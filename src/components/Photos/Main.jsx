import React, { useContext, useEffect, useReducer } from "react";

import { FirebaseContext } from "../../firebase/index";
import { CookieContext } from "../../session/index";
import MainBody from "./MainBody";

const photosReducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const Main = () => {
  // const [shareURL, setShareURL] = useState("");

  const [state, dispatch] = useReducer(photosReducer, {
    error: "",
    progress: "",
    uploading: false,
    allImages: [],
    showButtons: false,
    listId: "",
    loading: true,
    deleting: false,
  });

  const validType = /^image\/*/;

  const { firestore, storage, timestamp } = useContext(FirebaseContext);
  const { getCookie } = useContext(CookieContext);

  useEffect(() => {
    const unsub = firestore
      .collection("data")
      .doc(`${getCookie()}`)
      .collection("images")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let tempAllImages = [];
        snap.forEach((doc) =>
          tempAllImages.push({ ...doc.data(), id: doc.id })
        );

        dispatch({ type: "allImages", payload: tempAllImages });
        dispatch({ type: "loading", payload: false });
      });

    return () => unsub();
  }, [firestore, getCookie]);

  function handleChange(e) {
    dispatch({ type: "error", payload: "" });
    let selected = e.target.files[0];

    if (selected) {
      if (validType.test(selected.type)) {
        let alreadyExists = false;

        state.allImages.forEach((image) => {
          if (image.name === selected.name) alreadyExists = true;
        });

        if (alreadyExists) {
          dispatch({
            type: "error",
            payload: "File with same name already uploaded !!",
          });
        } else {
          dispatch({ type: "uploading", payload: true });
          const uploadTask = storage
            .ref()
            .child(`images/${selected.name}`)
            .put(selected);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              dispatch({ type: "progress", payload: Math.floor(progress) });
            },

            (error) => {
              dispatch({ type: "error", payload: error });
              dispatch({ type: "uploading", payload: false });
            },

            async () => {
              const url = await uploadTask.snapshot.ref.getDownloadURL();

              await firestore
                .collection("data")
                .doc(`${getCookie()}`)
                .collection("images")
                .doc(`${selected.name}`)
                .set({
                  name: selected.name,
                  url,
                  createdAt: timestamp(),
                });

              dispatch({ type: "uploading", payload: false });
            }
          );
        }
      } else {
        dispatch({ type: "error", payload: "Please select an image file !!" });
      }
    }
  }

  const handleDeleteBtnClick = async (fileNameToDelete) => {
    try {
      dispatch({ type: "deleting", payload: true });
      await storage.ref().child(`images/${fileNameToDelete}`).delete();

      await firestore
        .collection("data")
        .doc(`${getCookie()}`)
        .collection("images")
        .doc(`${fileNameToDelete}`)
        .delete();
    } catch (error) {
      dispatch({ type: "error", payload: error });
    } finally {
      dispatch({ type: "deleting", payload: false });
    }
  };

  const handleShareBtnClick = (fileURLToShare) => {
    // setShareURL(fileURLToShare);
    dispatch({ type: "error", payload: fileURLToShare });
  };

  return (
    <main
      className="min-h-100 main-photo-container"
      onClick={() => {
        if (state.error) dispatch({ type: "error", payload: "" });
      }}
    >
      <MainBody
        state={state}
        dispatch={dispatch}
        handleChange={handleChange}
        handleDeleteBtnClick={handleDeleteBtnClick}
        handleShareBtnClick={handleShareBtnClick}
      />
    </main>
  );
};

export default Main;
