import React, { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import "./Registration.css";
import CommonButton from "../../common/commonButton/CommonButton";
import {createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { Slide, toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { Blocks } from "react-loader-spinner";
const Registration = () => {
  // ******* variable
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  // ******* firebase variable
  const auth = getAuth();
  // ******* function part
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(!loader);
    if (!email) {
      setEmailError("Email is blank");
    }
    if (!name) {
      setNameError("Name is blank");
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
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            onClose: () => {
              navigate("/login"), setLoader(!loader);
            },
          });
          console.log("🚀 ~ .then ~ user:", user);

          updateProfile(auth.currentUser, {
            // udatting the user profile
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
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
      <div className="reg">
        <div className="container">
          <div className="main_form">
            <div className="formHeader">
              <div className="icon">
                <ImLinkedin />
              </div>
              <div className="headerText">
                <h1>Get started with easily register</h1>
                <p>Free register and you can enjoy it</p>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="fullName">
                <label htmlFor="name">Full name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className={nameError && "error"}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={nameError ? nameError : "Full Name"}
                />
              </div>
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
                      height="22"
                      width="22"
                      color="#4fa94d"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      visible={true}
                    />
                  ) : (
                    "Sign Up"
                  )
                }
              />
            </form>
          </div>
          <div className="loginLink">
            <p>
              Already have an account? <Link to={"/login"}>Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
