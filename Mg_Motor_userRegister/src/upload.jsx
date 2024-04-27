/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import { useEffect } from 'react'
import axios from "axios";

function Upload() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();



  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);
    axios
      .post("http://localhost:3001/upload", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      window.location.replace("/fetchdata")
  };

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/getImage")
//       .then((res) => setImage(res.data[0].image))
//       .catch((err) => console.log(err));
//   },[]);

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {/* <img src={`http://localhost:3001/images/`+ image} alt="image"/> */}
    </div>
  );
}

export default Upload;
