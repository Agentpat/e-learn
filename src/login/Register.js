import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Button, Checkbox, FormControlLabel, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css'


const firebaseConfig = {
  apiKey: "AIzaSyARcM3B95adLITNiwuJH4Q1x7H9_-Nl1AY",
  authDomain: "learnify-95d61.firebaseapp.com",
  projectId: "learnify-95d61",
  storageBucket: "learnify-95d61.appspot.com",
  messagingSenderId: "808810884807",
  appId: "1:808810884807:web:7fd417ab59c8bee79398e2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("")
  const [rememberMe, setRememberMe] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
  const handleUsernameChange = (e) => setUserName(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        userName,
        password
      );
      const user = userCredential.user;

     
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        userName: userName,
        
      });

     
      navigate("/");
    } 
    catch (error) {
      console.error("Registration error:", error.message);
      setSnackbarMessage("Registration failed. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="register__page">
      <div className="heading__register">
        <div className="register__logo">
          <img src="/Landsacpelogo.png"  alt="Logo" />
        </div>
        <div className="register__btns">
          <Button className="register___bt" variant="text">
            <Link to="/login">LOGIN</Link>
          </Button>
        </div>
      </div>
      <div className="body___register">
        <div className="register___port">
          <h2>Create an Account</h2>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="fieldsss">
              <input
                  type="text"
                  placeholder="Enter Username"
                  className="email__box input"
                  value={userName}
                  onChange={handleUsernameChange}
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="email__box input"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="password__box input"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="rem__forgot">
                <div className="lefffff">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
}

export default Register;