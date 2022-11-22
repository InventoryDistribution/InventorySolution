import { useState,useEffect } from "react";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";
// import { Alert } from "@mui/material";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
// import { storage } from "../firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { useUserAuth } from "layouts/context/user-auth";
import user1 from "assets/images/curved-images/user.png"

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone,setPhone] = useState("");
  const [code,setCode] = useState("");
  const [role,setRole] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState(null);
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [name, setName] = useState("");
  // const [code, setCode] = useState("");
  // const [role, setRole] = useState("");
  // const [error, setError] = useState("");
  // const [password, setPassword] = useState("");
  // const { signUp } = useUserAuth();
  // let navigate = useNavigate();

  // const handleSubmit1 = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await signUp(email, password,phone,name,code,role);
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };


//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };
// // for picture
//   const handleSubmit = () => {
//     const imageRef = ref(storage, "image");
//     uploadBytes(imageRef, image)
//       .then(() => {
//         getDownloadURL(imageRef)
//           .then((url) => {
//             setUrl(url);
//           })
//           .catch((error) => {
//             console.log(error.message, "error getting the image url");
//           });
//         setImage(null);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
  return (
    <BasicLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h3" fontWeight="bold" style={{color:"#0B2F8A"}}>
            Register 
          </SoftTypography>
        </SoftBox>
        {/*
      <SoftBox mb={2}>
        
          <Socials />
        </SoftBox>
        <Separator />
      */}
      <SoftBox ml={15}>
        <SoftAvatar src={user1} alt="Avatar" variant="circular" size="xxl" box-shadow="xxl"/>
       {/* <input type="file" onChange={handleImageChange} />
    <button onClick={handleSubmit}>Submit</button>*/}
    </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" >
            <SoftBox>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Full Name
            </SoftTypography>
              <SoftInput placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}/>
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phone Number
            </SoftTypography>
              <SoftInput type="tel" placeholder="9957349267" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Employee Code
            </SoftTypography>
              <SoftInput type="text" placeholder="AH0007854" 
              value={code}
              onChange={(e) => setCode(e.target.value)}/>
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Employee Role
            </SoftTypography>
              <SoftInput type="text" placeholder="Enter Your Role"
              value={role}
              onChange={(e) => setRole(e.target.value)} />
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Email
            </SoftTypography>
              <SoftInput type="email" placeholder="krishnamohan@gmail.com" 
              value={email}
          onChange={(e) => setEmail(e.target.value)}/>
            </SoftBox>
            <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Password
            </SoftTypography>
              <SoftInput type="password" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
            <SoftTypography>
            <SoftButton fullWidth onClick={register} style={{backgroundColor:"#0B2F8A",color:"white",boxShadow:"0px 8px 24px -2px rgba(11, 47, 138, 0.6)",borderRadius:"16px"}}>
              Register
              </SoftButton>
            </SoftTypography>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/email-signin"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
