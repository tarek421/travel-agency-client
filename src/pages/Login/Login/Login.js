import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {

  const { RegisterUser, signInUser, googleSignIn } = useAuth();
  const { register: registerSignIn, handleSubmit: handleSignIn } = useForm();
  const { register: registerSignUp, handleSubmit: handleSignUp } = useForm();


  const [newUser, setNewUser] = useState(false);


  const HandleGoogleSignIn = () => {
    googleSignIn();
  }

  const onSubmit = (data) => {

    const {email, password, name } = data;
    // RegisterUser(email, password, name);

    if(name && email && password) {
      RegisterUser(email, password, name);
      console.log('register')
    }else{
      signInUser(email, password);
      console.log("login")
    }

  }

  return (
    <div id="login">
      <div className="root-login">
        <div
          className={newUser ? "container right-panel-active" : ""}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form className="form" onSubmit={handleSignUp(onSubmit)}>
              <h1>Create Account</h1>
              {/* <div className="social-container">
                <li>
                  <FontAwesomeIcon className="social" icon={faGoogle} />
                </li>
                <li>
                  <FontAwesomeIcon className="social" icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon className="social" icon={faGithub} />
                </li>
              </div> */}
              <span>or use your email for registration</span>
              <input
                placeholder="Name"
                {...registerSignUp("name", { required: true })}
                type="text"
              />
              <input
                placeholder="Email"
                {...registerSignUp("email", { required: true })}
                type="email"
              />
              <input
                placeholder="Password"
                {...registerSignUp("password", { required: true })}
                type="password"
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleSignIn(onSubmit)}>
              <h1>Sign in</h1>
              <div className="social-container">
                <li>
                  <FontAwesomeIcon
                    onClick={HandleGoogleSignIn}
                    className="social"
                    icon={faGoogle}
                  />
                </li>
                {/* <li>
                  <FontAwesomeIcon
                    onClick={facebookSignIn}
                    className="social"
                    icon={faFacebookF}
                  />
                </li> */}
                {/* <li>
                <FontAwesomeIcon
                  onClick={githubSignIn}
                  className="social"
                  icon={faGithub}
                />
              </li> */}
              </div>
              <span>or use your account</span>
              <input
                placeholder="Email"
                {...registerSignIn("email", { required: true })}
                type="email"
              />
              <input
                placeholder="Password"
                {...registerSignIn("password", { required: true })}
                type="password"
              />
              <small style={{ color: "blue", cursor: "pointer" }}>
                Forgot your password?
              </small>
              <button className="ghost">Log In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => setNewUser(!newUser)}
                  className="ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                {/* <img id="profile-image" src={loggedInUser.photo} alt="" /> */}
                <h1>Hello Friend!</h1>
                <p>Let's start journey with us</p>
                <p>Enter your personal details and start journey with us</p>
                <button
                  onClick={() => setNewUser(!newUser)}
                  className="ghost"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;