import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ImLinkedin } from "react-icons/im";
import CommonButton from "../../common/commonButton/CommonButton";
import "./Login.css";
import { Link, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";
import { Blocks } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { currentUserSlice } from "../../features/counter/mySlice";
import { getDatabase, ref, set } from "firebase/database";
const Login = () => {
  // ******* variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ******* firebase variable
  const auth = getAuth();
  const db = getDatabase();
  // ******* function part
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (!email) {
      setEmailError("Email is blank");
    }
    if (!password) {
      setPasswordError("Password is blank");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("🚀 ~ .then ~ user:", user);
          toast.success("Log in successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            onClose: () => {
              setLoader(false), navigate("/");
            },
          });
          // ****** setting the data to the local storage
          localStorage.setItem("currentUser", JSON.stringify(user));
          // ****** dispatching the localStorage data to Redux
          dispatch(
            currentUserSlice(JSON.parse(localStorage.getItem("currentUser")))
          );
          // ****** setting the data to the realtime database
          set(ref(db, "users/" + user.uid), {
            username: user.displayName,
            email: user.email,
            profile_picture: user.photoURL,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("🚀 ~ handleSubmit ~ errorCode:", errorCode);
          toast.error(errorCode, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            onClose: () => setLoader(false),
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
              <CommonButton
                button_content={
                  loader ? (
                    <Blocks
                      height="40"
                      width="40"
                      color="#4fa94d"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      visible={true}
                    />
                  ) : (
                    "Log In"
                  )
                }
              />
            </form>
          </div>
          <div className="registrationLink">
            <p>
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
