
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../fireConfig";
import { v4 } from "uuid";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

const Home = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();
  const { currentUser } = useSelector((state) => state.loginUserReducer);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls( url);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(url);
        });
      });
    });
  }, []);
  
  return (
    <>
   <Layout >
    <div className="parent">
   <img src={imageUrls} /><br/>
            <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      /><br/>
 
      <h1>Email : {currentUser?.user.email}</h1>
      <h2>Name : {currentUser?.user.displayName}</h2>
    
      <h3>Created at : {currentUser?.user.createdAt}</h3>
      <h3>Last Login at : {currentUser?.user.lastLoginAt}</h3>
      <button onClick={uploadFile} className="my-4"> Upload Image</button>
     
      </div>
      </Layout>
    </>
  );
};

export default Home;
