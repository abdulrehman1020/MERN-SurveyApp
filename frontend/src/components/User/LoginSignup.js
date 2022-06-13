import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { useCreateUserMutation, useLoginUserMutation } from '../../redux/user'
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';


const LoginSignup = () => {
    const [createUser, responseInfo1] = useCreateUserMutation()
    const [loginUser, responseInfo] = useLoginUserMutation()
      const {isSuccess,isError, error} = responseInfo
    const nav = useNavigate()
    ;
    const isError1=responseInfo1.isError
   console.log(isError1)

    // console.log(isError);
  // if (isError){
  //   console.log(error.message);
  // }

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


      
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // const [user, setUser] = useState({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
  
    // const { name, email, password } = user;
  
    // const [avatar, setAvatar] = useState("/profile.jpg");
    // const [avatarPreview, setAvatarPreview] = useState("/Profile.jpg");

    const loginSubmit = async (e) => {
        e.preventDefault();

          let loginuser = {
            email: loginEmail,
            password: loginPassword
          }
          await loginUser(loginuser)

        if(isError){
          toast.error(error.data.message);
        }  
        if(isSuccess){
          toast.success("LoggedIn Successfully");
          nav('/all-questions')
        };
        
      };

      const registerSubmit = (e) => {
        e.preventDefault();
        // if(data.isError){
        //   toast.error(data.error.data.message);
        // }  
        
        if(isError1){
          toast.error(responseInfo1.error.data.message);
          // console.log("error")
      }
        let newUser = {
            name: name,
            email: email,
            password: password
        }
    
        createUser(newUser)
        if(responseInfo1.isSuccess){
          // toast.error(.error.data.message);
          toast.success("Registered Successfully")
      }
      };
    
      // useEffect(() => {
      //   if(loginSubmit){
      //     history.push('/all-questions')
      //   }
      // }, [history, loginSubmit])
      
    //   const registerDataChange = (e) => {
    //     if (e.target.name === "avatar") {
    //       const reader = new FileReader();
    
    //       reader.onload = () => {
    //         if (reader.readyState === 2) {
    //           setAvatarPreview(reader.result);
    //           setAvatar(reader.result);
    //         }
    //       };
    
    //       reader.readAsDataURL(e.target.files[0]);
    //     } else {
    //       setUser({ ...user, [e.target.name]: e.target.value });
    //     }
    //   }; 


    //   const redirect= location.search ? location.search.split("=")[1] : "/account";

      useEffect(() => {
        
    
        // if (isAuthenticated) {
        //   history.push(redirect);
        // }
      }, [isError, error]);

      const switchTabs = (e, tab) => {
        if (tab === "login") {
          switcherTab.current.classList.add("shiftToNeutral");
          switcherTab.current.classList.remove("shiftToRight");
    
          registerTab.current.classList.remove("shiftToNeutralForm");
          loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
          switcherTab.current.classList.add("shiftToRight");
          switcherTab.current.classList.remove("shiftToNeutral");
    
          registerTab.current.classList.add("shiftToNeutralForm");
          loginTab.current.classList.add("shiftToLeft");
        }
      };
  

  return (
    // <Fragment>
    //   {loading? (
    //     <Loader  />
    //   ):(
        <Fragment>
          <div></div>
          <Toaster 
          position="top-center"
          reverseOrder={false}
           />
        <div className="LoginSignUpContainer">
          <div className="LoginSignUpBox">
            <div>
              <div className="login_signUp_toggle">
                <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
              </div>
              <button ref={switcherTab}></button>
            </div>
            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit} >
              <div className="loginEmail">
                {/* <MailOutlineIcon /> */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="loginPassword">
                {/* <LockOpenIcon /> */}
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              {/* <Link to="/password/forgot">Forget Password ?</Link> */}
              <input type="submit" value="Login" className="loginBtn" />
            </form>
            <form
              className="signUpForm"
              ref={registerTab}
              encType="multipart/form-data"
              onSubmit={registerSubmit}
            >
              <div className="signUpName">
                {/* <FaceIcon /> */}
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="signUpEmail">
                {/* <MailOutlineIcon /> */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signUpPassword">
                {/* <LockOpenIcon /> */}
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* <div id="registerImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </div> */}
              <input type="submit" value="Register" className="signUpBtn" />
            </form>
          </div>  
        </div>
      </Fragment> 
    //   )}
    // </Fragment>

  )
}

export default LoginSignup