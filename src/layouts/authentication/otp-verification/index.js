import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";

function OtpVerification() {
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <CoverLayout title="Verify OTP" image={curved9}>
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Enter Registered Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </SoftBox>
        <SoftBox mt={4} mb={1} textAlign="center">
          <SoftButton
            fullWidth
            style={{
              backgroundColor: "#0B2F8A",
              color: "white",
              boxShadow: "0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              borderRadius: "16px",
            }}
            onClick={() => sendPasswordReset(email)}
          >
          Send password reset email
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t Have an Account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              fontWeight="medium"
              style={{ color: "#0B2F8A" }}
            >
              Register
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        
      </SoftBox>
    </CoverLayout>
  );
}

export default OtpVerification;
