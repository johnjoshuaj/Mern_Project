const validation = (values) => {
  let errors = {};
  if (!values.firstname) {
    errors.firstname = "FirstName Required";
  } else if (values.firstname.length < 5) {
    errors.firstname = "FirstName must be more than 5 char";
  } if (!values.lastname) {
    errors.lastname = "LastName Required";
  } else if (values.lastname < 5) {
    errors.lastname = "LastName must be more than 5 char";
  }  if (!values.mobilenumber) {
    errors.mobilenumber = "Mobile Number Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }  if (!values.reasonofmeeting) {
    errors.reasonofmeeting = "Reason Required";
  } else if (values.reasonofmeeting.length <= 7) {
    errors.reasonofmeeting = "Reason must be more than 5 char";
  }

  return errors;
};

export default validation;
