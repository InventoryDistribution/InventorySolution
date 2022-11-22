import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password"  value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </SoftBox>
       
        <SoftBox mt={4} mb={1}>
        <SoftTypography>
        <SoftButton
        onClick={() => logInWithEmailAndPassword(email, password)}
         fullWidth style={{backgroundColor:"#0B2F8A",color:"white",boxShadow:"0px 8px 24px -2px rgba(11, 47, 138, 0.6)",borderRadius:"16px"}}>
          Sign In
          </SoftButton>
        </SoftTypography>
          
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Don&apos;t have an account?{" "}
          <SoftTypography
            component={Link}
            to="/authentication/sign-up"
            variant="button"
            style={{color:'#0B2F8A'}}
            fontWeight="medium"
          >
            Register
          </SoftTypography>
        </SoftTypography>
      </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignEmail;
