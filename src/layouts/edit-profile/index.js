import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Link, useParams,useNavigate } from "react-router-dom";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftInput from "components/SoftInput";
// import { Form } from "react-bootstrap";
import "../modal.css"
import { useState } from "react";
import {toast} from "react-toastify";
import SoftAvatar from "components/SoftAvatar";
import { db, storage } from "../authentication/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import user1 from "assets/images/curved-images/user.png"
// import { auth } from 'layouts/authentication/firebase';
import  {getAuth,  updateProfile } from "firebase/auth";
import { updateDoc } from "firebase/firestore";
// import { async } from "@firebase/util";

function EditProfile() {
  // const [state,setState] = useState(initialState);
  // const [date, setDate] = useState({});
  const auth = getAuth();
  const [changeDetails,setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name :auth.currentUser.name,
    email: auth.currentUser.email,
    code : auth.currentUser.code,
    phone : auth.currentUser.phone
  })
  const {name,email,code,phone} = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData ((prevState) =>({
      ...prevState,
      [e.target.id]:e.target.value,
    }
    ))
  }
  function onSubmit(){
    async(dispatch) =>{
      try{
        if(auth.currentUser.email !== email){
          await updateProfile(auth.currentUser,{
            email : email,
          });
          const docRef = doc(db, "users",auth.currentUser.uid )
          await updateDoc(docRef,{
            email,
          })
        }
        toast.success('profile details updated')
      }catch(error){
        toast.error("Could not update profile picture")
      }
    }
    }
   
  // const handleInputChange = (e) =>{
  //   const {name,value} = e.target;
  //   setState({...state, [name]:value})
  // };
  // const handleSubmit =(e) =>{
  //   e.preventDefault();
  //   if (!name || !email || !phone || !code){
  //     toast.error("please provide value in each input field" )
  //   }
  //   else{
  //     fireDb.child("users").push(state, (err) =>{
  //       if(err){
  //         toast.error(err);
  //       }else{
  //         toast.success("Profile Updated Successfully")
  //       }
  //     } );
  //     setTimeout(()=> navigate("/"),500);
  //   }
  // };

  const text = {
    color: "#0B2F8A",
    fontSize: "15px",
    fontWeight: "500",
    marginRight: "10px",
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
// for picture
  const handleSubmit1 = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            Alert(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <SoftBox py={3} mb={15} textAlign="center">
      
        <SoftTypography
          mb={6}
          style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "30px", lineHeight: "30px" }}
        >
        Edit Your Profile
        </SoftTypography>
        <SoftBox style={{display:"flex",justifyContent:"center"}} mb={9}>
        <SoftAvatar src={url} alt="Avatar" variant="circular" size="xl" box-shadow="xxl"/>
        <input type="file" onChange={handleImageChange} style={{position:"absolute",marginTop:"60px",marginLeft:"240px"}}/>
        <SoftButton onClick={handleSubmit1} style={{position:"absolute",marginTop:"90px",marginLeft:"70px",}}>Submit</SoftButton>
        </SoftBox>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={2} xl={2}>
        </Grid>
        <Grid item xs={12} sm={4} xl={4}>
          <SoftBox display="flex">
            <SoftTypography style={text} mt={1}>
              Full Name
            </SoftTypography>
            <SoftBox ml={6}>
            <SoftInput
            type="text"
              placeholder="Krishna Mohan"
              icon={{
                component: "search",
                direction: "left",
              }}
              id="name"
              name="name"
              value={name}
              disabled ={!changeDetails}
              onChange = {onChange}
            />
            </SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} sm={4} xl={4}>
        <SoftBox display="flex">
        <SoftTypography style={text} mt={1}>
        Email Address
        </SoftTypography>
        <SoftBox ml={2}>
        <SoftInput
        id="email"
        name="email"
        value={email}
        disabled ={!changeDetails}
        onChange = {onChange}
        type="email"
          placeholder="krishna@gmail.com"
          icon={{
            component: "search",
            direction: "left",
          }}
        />
        </SoftBox>
      </SoftBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} sm={2} xl={2}>
        </Grid>
        <Grid item xs={12} sm={4} xl={4}>
          <SoftBox display="flex">
            <SoftTypography style={text} mt={1}>
            Employee Code
            </SoftTypography>
            <SoftBox ml={2}>
            <SoftInput
            id="code"
            name="code"
            value={code}
            disabled ={!changeDetails}
            onChange = {onChange}
            type="text"
              placeholder="AH0007854"
              icon={{
                component: "search",
                direction: "left",
              }}
            />
            </SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} sm={4} xl={4}>
        <SoftBox display="flex">
        <SoftTypography style={text} mt={1}>
        Phone Number
        </SoftTypography>
        <SoftBox ml={2}>
        <SoftInput
        id="phone"
        name="phone"
        value={phone}
        disabled ={!changeDetails}
        onChange = {onChange}
        type="tel"
          placeholder="9985492565"
          icon={{
            component: "search",
            direction: "left",
          }}
        />
        </SoftBox>
      </SoftBox>
        </Grid>
      </Grid>
        <SoftBox mt={6} >
        <SoftTypography>
        {/*<SoftButton
        variant="contained"
        color="info"
        style={{
          backgroundColor: "#0B2F8A",
          boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
        }}
      >
      Update Profile
      </SoftButton>*/}
      <p display="flex" >
      Do you want to change your name?
      <span onClick={()=>{
        changeDetails && onSubmit()
        setChangeDetails((prevState)=>!prevState )}
      }
        
       >
      {changeDetails ? "Apply change" :"Edit"}
      </span>
      </p>
        </SoftTypography>
        
        </SoftBox>
       
        <SoftBox mt={6}>
          <SoftTypography
            style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "35px", lineHeight: "30px" }}
          >
          Reset Your Password
          </SoftTypography>
          <SoftBox display="flex" style={{justifyContent:"center"}} mt={6}>
        <SoftTypography style={text} mt={1}>
        Old Password
        </SoftTypography>
        <SoftBox ml={2}>
        <SoftInput
        type="password"
          placeholder="Enter Old Password"
          icon={{
            component: "search",
            direction: "left",
          }}
        />
        </SoftBox>
      </SoftBox>
      <SoftBox display="flex" style={{justifyContent:"center"}} mt={3}>
      <SoftTypography style={text} mt={1}>
      New Password
      </SoftTypography>
      <SoftBox ml={2}>
      <SoftInput
      type="password"
        placeholder="Enter New Password"
        icon={{
          component: "search",
          direction: "left",
        }}
      />
      </SoftBox>
    </SoftBox>
    <SoftBox display="flex" style={{justifyContent:"center"}} mt={3}>
    <SoftTypography style={text} mt={1}>
    New Password
    </SoftTypography>
    <SoftBox ml={2}>
    <SoftInput
    type="password"
      placeholder="Enter New Password"
      icon={{
        component: "search",
        direction: "left",
      }}
    />
    </SoftBox>
  </SoftBox>
        </SoftBox>
        <SoftBox mt={7}>
        <SoftButton
        onClick={toggleModal}
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
            }}
          >
          Reset Password
          </SoftButton>
        
        </SoftBox>
        
  <SoftBox style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
  {modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h4 style={{color:"#0B2F8A",marginTop:"20px"}}>Please Fill all the Required Fields</h4>
        <button className="close-modal" onClick={toggleModal} style={{backgroundColor:"#0B2F8A",color:"white",border:"none",borderRadius:"5px",marginTop:"50px",marginBottom:"20px",boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)"}}>
          OK
        </button>
      </div>
    </div>
  )}
</SoftBox>
    </SoftBox>
    <Footer />
    </DashboardLayout>
  );
}

export default EditProfile;
