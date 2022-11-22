import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
// import OTPInput, { ResendOTP } from "otp-input-react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function OtpVerification() {
  const [rememberMe, setRememberMe] = useState(true);
  const [OTP, setOTP] = useState("");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout title="Verify OTP" image={curved9}>
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Enter OTP Here
            </SoftTypography>
          </SoftBox>
          <SoftInput type="tel" placeholder="Enter your OTP" />
          {/*
          <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
           <ResendOTP onResendClick={() => console.log("Resend clicked")} />
  */}
        </SoftBox>

        <SoftBox mt={4} mb={1} textAlign="center">
          <SoftButton
            fullWidth
            component={Link}
            to="/dashboard"
            style={{
              backgroundColor: "#0B2F8A",
              color: "white",
              boxShadow: "0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              borderRadius: "16px",
            }}
          >
            Continue
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Didn&apos;t Receive OTP?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              fontWeight="medium"
              style={{ color: "#0B2F8A" }}
            >
              Click here
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox textAlign="center">
          <SoftTypography>
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              style={{ color: "#0B2F8A" }}
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

export default OtpVerification;
