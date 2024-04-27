import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
function ShowData() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
 
  // const date = new Date();
  const val = useRef(0)
  useEffect(() => {
    axios
      .get("http://localhost:3001/userdetails")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => setImage(res.data[val.current++].image))
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
    <div className="w-100 vh-90 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>email</th>
              <th>MobileNumber</th>
              <th>ReasonOfMeeting</th>
            </tr>
            </thead>
            <tbody>
              {data.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.email}</td>
                    <td>{data.mobilenumber}</td>
                    <td>{data.reasonofmeeting}</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
      </div>
      <img src={`http://localhost:3001/images/`+image} style={{height:"30%",width:"20%"}} alt="image"/>
    </div>
      <button style={{marginLeft:"45%",height:"5%",width:"5%",color:"black",backgroundColor:"aqua"}} onClick={()=> window.location.replace("/")}>Done</button>
    </>
  );
}

export default ShowData;
