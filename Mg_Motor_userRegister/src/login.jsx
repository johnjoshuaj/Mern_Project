import { useEffect,useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "./validation";

function Login() {
  const [values, setValue] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    email: "",
    reasonofmeeting: "",
  });
  const [errors, setError] = useState({});
  
  const handleChange=(e)=> {
    setValue({ ...values, [e.target.name]: e.target.value });
  }
  
  useEffect(() => {
    if(
      Object.keys(errors).length === 0 &&
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.mobilenumber !== Number &&
      values.email !== "" &&
      values.reasonofmeeting !== ""
    ) {
      axios
      .post("http://localhost:3001/userdetails", {
        firstname: values.firstname,
        lastname: values.lastname,
        mobilenumber: values.mobilenumber,
        email: values.email,
        reasonofmeeting: values.reasonofmeeting,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
      window.location.replace("/upload");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(values));
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="text">
              <strong>FirstName</strong>
            </label>
            <input
              type="text"
              placeholder="Enter FirstName"
              autoComplete="off"
              name="firstname"
              className="form-control rounded-0"
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.firstname}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="text">
              <strong>LastName</strong>
            </label>
            <input
              type="text"
              placeholder="Enter LastName"
              autoComplete="off"
              name="lastname"
              className="form-control rounded-0"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.lastname}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="number">
              <strong>MobileNumber</strong>
            </label>
            <input
              type="number"
              placeholder="Enter MobileNumber"
              autoComplete="off"
              name="mobilenumber"
              className="form-control rounded-0"
              value={values.mobilenumber}
              onChange={handleChange}
            />
            {errors.mobilenumber && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.mobilenumber}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="text">
              <strong>ReasonOfMeeting</strong>
            </label>
            <input
              type="text"
              placeholder="Enter ReasonOfMeeting"
              autoComplete="off"
              name="reasonofmeeting"
              className="form-control rounded-0"
              value={values.reasonofmeeting}
              onChange={handleChange}
            />
            {errors.reasonofmeeting && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.reasonofmeeting}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          <p>Already Have an Account</p>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
