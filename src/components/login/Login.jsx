import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ImLinkedin } from 'react-icons/im';
import CommonButton from '../../common/commonButton/CommonButton';
const Login = () => {
  // ******* variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // ******* firebase variable
  const auth = getAuth();
  // ******* function part
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is blank");
    }
    if (!password) {
      setPasswordError("Password is blank");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          toast.success("Registerd successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          console.log("🚀 ~ .then ~ user:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          toast.error(errorCode, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        });
    }
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="main_form">
            <div className="formHeader">
              <div className="icon">
                <ImLinkedin />
              </div>
              <div className="headerText">
                <h1>Login</h1>
                <p>Free register and you can enjoy it</p>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="emailAddres">
                <label htmlFor="email">Email Addres</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError && "error"}
                  type="email"
                  name="email"
                  id="email"
                  placeholder={emailError ? emailError : "Email Addres"}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError && "error"}
                  type="password"
                  name="password"
                  id="password"
                  placeholder={passwordError ? passwordError : "Password"}
                />
              </div>
              <CommonButton button_content={"Sign Up"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login