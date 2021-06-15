import React, { useContext, useEffect, useState } from "react";
import { BsFilePlus } from "react-icons/bs";

import { FirebaseContext } from "../../firebase/index";
import { MdDeleteForever } from "react-icons/md";

import { BiShareAlt } from "react-icons/bi";
import Error from "../Error/Error";

const Main = () => {
  const [error, setError] = useState("");
  const [progress, setProgress] = useState("");
  const [uploading, setUploading] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [listId, setListId] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  // const [shareURL, setShareURL] = useState("");

  const validType = /^image\/*/;

  const { auth, firestore, storage, timestamp } = useContext(FirebaseContext);

  useEffect(() => {
    document.title = "photos | personalCollection";

    const unsub = firestore
      .collection("data")
      .doc(`${auth.currentUser.uid}`)
      .collection("images")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let tempAllImages = [];
        snap.forEach((doc) =>
          tempAllImages.push({ ...doc.data(), id: doc.id })
        );
        setAllImages(tempAllImages);
        setLoading(false);
      });

    return () => unsub();
  }, [auth.currentUser.uid, firestore]);

  function handleChange(e) {
    setError("");
    let selected = e.target.files[0];

    if (selected) {
      if (validType.test(selected.type)) {
        let alreadyExists = false;

        allImages.forEach((image) => {
          if (image.name === selected.name) alreadyExists = true;
        });

        if (alreadyExists) {
          setError("File with same name already uploaded !!");
        } else {
          setUploading(true);
          const uploadTask = storage
            .ref()
            .child(`images/${selected.name}`)
            .put(selected);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(Math.floor(progress));
            },

            (error) => {
              setError(error);
              setUploading(false);
            },

            async () => {
              const url = await uploadTask.snapshot.ref.getDownloadURL();

              await firestore
                .collection("data")
                .doc(`${auth.currentUser.uid}`)
                .collection("images")
                .doc(`${selected.name}`)
                .set({
                  name: selected.name,
                  url,
                  createdAt: timestamp(),
                });

              setUploading(false);
            }
          );
        }
      } else {
        setError("Please select an image file !!");
      }
    }
  }

  const handleDeleteBtnClick = async (fileNameToDelete) => {
    try {
      setDeleting(true);
      await storage.ref().child(`images/${fileNameToDelete}`).delete();

      await firestore
        .collection("data")
        .doc(`${auth.currentUser.uid}`)
        .collection("images")
        .doc(`${fileNameToDelete}`)
        .delete();
    } catch (error) {
      setError(error);
    } finally {
      setDeleting(false);
    }
  };

  const handleShareBtnClick = (fileURLToShare) => {
    // setShareURL(fileURLToShare);
    setError(fileURLToShare);
  };

  return (
    <main
      className="min-h-100 main-photo-container"
      onClick={() => {
        if (error) setError("");
      }}
    >
      <section>
        <h2 className="font-s-2">Your Pictures</h2>
        <div className="div-file-chooser">
          <input
            type="file"
            id="photo-picker"
            accept="image/*"
            onChange={handleChange}
          />
          <label htmlFor="photo-picker">
            <BsFilePlus className="file-plus" />
            <div>Add File</div>
          </label>
        </div>
        {loading ? (
          <div className="loading pad-2" role="status">
            <div className="circle circle1 list-item-inline"></div>
            <div className="circle circle2 list-item-inline"></div>
            <div className="circle circle3 list-item-inline"></div>
            <br />
            <br />
            <div>Getting&nbsp;&nbsp;pics...</div>
          </div>
        ) : (
          <>
            {" "}
            {error && (
              <div className="error-container">
                <Error error={error} />
              </div>
            )}
            {uploading && (
              <div className="loading pad-2" role="status">
                <div className="circle circle1 list-item-inline"></div>
                <div className="circle circle2 list-item-inline"></div>
                <div className="circle circle3 list-item-inline"></div>
                <br />
                <br />
                <div>Uploading&nbsp;&nbsp;{progress}%...</div>
              </div>
            )}
            {deleting && (
              <div className="loading pad-2" role="status">
                <div className="circle circle1 list-item-inline"></div>
                <div className="circle circle2 list-item-inline"></div>
                <div className="circle circle3 list-item-inline"></div>
                <br />
                <br />
                <div>Deleting...</div>
              </div>
            )}
            <ul className="photo-container">
              {allImages &&
                allImages.map((image) => (
                  <li
                    key={image.id}
                    onMouseOver={() => {
                      setShowButtons(true);
                      setListId(image.id);
                    }}
                    onMouseOut={() => {
                      setShowButtons(false);
                      setListId("");
                    }}
                  >
                    <div
                      className={`div-btn-container ${
                        showButtons && listId === image.id
                          ? ""
                          : "div-btn-container-visiblity"
                      }`}
                    >
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteBtnClick(image.name)}
                      >
                        <MdDeleteForever className="svg" />
                      </button>
                      <button
                        className="btn-share"
                        onClick={() => handleShareBtnClick(image.url)}
                      >
                        <BiShareAlt className="svg" />
                      </button>
                    </div>
                    <img
                      src={image.url}
                      alt={`${image.name}`}
                      className={`${
                        showButtons && listId === image.id ? "img-opacity" : ""
                      }`}
                    />
                  </li>
                ))}
            </ul>
          </>
        )}{" "}
      </section>
    </main>
  );
};

export default Main;
