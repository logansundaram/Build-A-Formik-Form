import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';
function App() {
 // TODO: add a const called formik assigned to useFormik()
 const formik = useFormik({
   initialValues: {
     email: "",
     password: ""
   },
   onSubmit: values =>{
     alert("Login Sucesssful");
   },
   validate: values =>{
     let errors = {};
     if (values.email.indexOf("@")===-1 || values.email.indexOf(".")===-1) errors.email = "Username should be an email";
     if (!values.email) errors.email = "Field required";
     if (!values.password) errors.password = "Field required";
     return errors;
   },
 });
 return (
   <div>
     <form onSubmit={formik.handleSubmit}>
       <div>email:</div>
       <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
       {formik.errors.email ? <div id="emailError">{formik.errors.email}</div> : null}
       <div>password:</div>
       <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
       <div></div>
       {formik.errors.password ? <div id="pswError">{formik.errors.password}</div> : null}
       <button id="submitBtn"
        type="submit">
         submit
       </button>
     </form>
     <p>
       The app is ready! You can proceed with the task instructions. TODO:
       build you form here.
     </p>
   </div>
 );
}
 
export default App;
 

