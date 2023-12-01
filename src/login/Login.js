import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate} from "react-router-dom";
import { LinkedIn } from "@mui/icons-material";





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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User logged in:", user);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      setSnackbarMessage("Login failed. Check your credentials.");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
 
    return (
      <div className="login__page">
        <div className="heading__login">
          <div className="login__logo">
            <img src="/Landsacpelogo.png" alt="Logo" />
          </div>
          <div className="login__btns">
            <Button className="login___bt" variant="text">
              <Link to="/register">REGISTER</Link>
            </Button>
          </div>
        </div>
        <div className="body___login">
          <div className="login___port">
            <h2>Welcome Back</h2>
          <div className='socials'>
            <div className='facebook dyt'>
              <FacebookIcon />
              <h2>Facebook</h2>
            </div>
            <div className='twitter dyt'>
              <TwitterIcon />
              <h2>Twitter</h2>
            </div>
            <div className='google dyt'>
              <GoogleIcon />
              <h2>Google</h2>
            </div>
          </div>
          <div className="panel">
            <h4 className="or">or login with Email</h4>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="fieldsss">
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
                <div className="rigggg">
                  <Link to="/forgotPassword" className="forgggggg">
                    Forgot Password
                  </Link>
                </div>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </div>
        </div>
        <div className="login__description">
          <h2 className="description">Please login to continue</h2>
          <h3 className="description__two">
            A platform with efficient integration of many features and so much
            more
          </h3>
          <img src="/login.png" alt="Login description" className="imglohg" />
        </div>
        
      </div>
      <div className='bottommmm  rjniouw'>
        <div className='grid-1'>
          <img  src='Landsacpelogo.png' alt='' className='ijsdbq'/>
          <h3 className='dhviuyfe'>loremkjsdbiuvusdvohewbs cubei if iuv bv vbedousa sv ewin  bdi owqgbdijs  oiuwbbc iwosfc  coiuqamzkn v  u kjweive niuf kj kweosc dkjghioyud xanrwe e yiywdm, fgkxjbewrkvouehv   knv,mblyoud sm weoufhweiufcm   c thedrr   JNDM RMC  VRERJBYWQKJISK</h3>
          <h3 className='khsdiyds'>
            @agentpat01
          </h3>
        </div>
        <div className='grid-2'>
          <h2 className='headringd'>
            COMPANY
          </h2>
          <ul>
            <li>Oxford</li>
            <li>Oxford</li>
            <li>Oxford</li>
            <li>Oxford</li>
          </ul>
        </div>
        <div className='grid-3'>
        <h2 className='headringd'>
            COMPANY
          </h2>
          <ul>
            <li>Oxford</li>
            <li>Oxford</li>
            <li>Oxford</li>
            <li>Oxford</li>
          </ul>
        </div>
        <div className='grid-4'>
        <h2 className='headringd'>
            COMPANY
          </h2>
          <ul>
            <li>Oxford</li>
            <li>Oxford</li>
            <li>Oxford</li>
            <li>Oxford</li>
          </ul>
        </div>
        <div className='grid-5'>
          <div className="jbids">
           <FacebookIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <LinkedIn/>
          </div>
          <div className="selector">
            <select id="selectField" value={selectedOption} onChange={handleSelectChange} >
              <option value="" disabled>Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
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

export default Login;
