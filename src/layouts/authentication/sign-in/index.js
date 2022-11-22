import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import PhoneInput from "react-phone-number-input";
import { Form, Alert,Button } from "react-bootstrap";
import "react-phone-number-input/style.css"
import { useUserAuth } from "../../context/user-auth";
// import "./signin.css"

function SignIn() {
  const button = { 
    width:"170px",
    height:"39px",
    border:"none",
    borderRadius:"16px",
    background: "#0B2F8A",
    boxShadow:" 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
    color:"white",
  }
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <CoverLayout
      image={curved9}
    >
    <div className="p-4 box">
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <PhoneInput
          defaultCountry="IN"
          value={number}
          onChange={setNumber}
          placeholder="Enter Phone Number"
        />
        <div id="recaptcha-container"></div>
      </Form.Group>
      <div className="button-right" style={{marginTop:"50px",display:"flex",flexDirection:"row"}}>
        <Link to="/">
          <Button variant="secondary" style={button}>Cancel</Button>
        </Link>
        &nbsp;
        <Button type="submit" variant="primary" style={button}>
          Send Otp
        </Button>
      </div>
    </Form>

    <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
      <Form.Group className="mb-3" controlId="formBasicOtp">
        <Form.Control
          type="otp"
          placeholder=" Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
          style={{width:"250px",height:"40px",borderRadius:"10px",borderColor:"#0B2F8A",}}
        />
      </Form.Group>
      <div className="button-right"style={{marginTop:"50px",display:"flex",flexDirection:"row"}}>
        <Link to="/">
          <Button style={button}>Cancel</Button>
        </Link>
        &nbsp;
        <Button type="submit" style={button}>
          Verify
        </Button>
      </div>
    </Form>
    <SoftBox mt={3} textAlign="center">
    <SoftTypography variant="button" color="text" fontWeight="regular">
    Don&apos;t have an account?{" "}
      <SoftTypography
        component={Link}
        to="/authentication/email-signin"
        variant="button"
        color="dark"
        fontWeight="bold"
        textGradient
      >
        Register
      </SoftTypography>
    </SoftTypography>
  </SoftBox>
  </div>
    </CoverLayout>
  );
}

export default SignIn;
