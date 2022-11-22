import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { useState } from "react";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import Breadcrumbs from "examples/Breadcrumbs";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import SoftInput from "components/SoftInput";
import "../modal.css"


function InventoryReport() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const paragraph = {
    color:"#0B2F8A",
    fontSize:"20px",
    fontWeight:"500"
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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={15} textAlign="center">
      <SoftTypography mb={6} style={{color:"#0B2F8A",fontWeight:"700",fontSize:"30px",lineHeight:"30px",fontFamily:"Inter"}}>Reports</SoftTypography>
        <SoftBox mb={3} textAlign="center">
       <SoftTypography style={paragraph} textAlign="center">Inventory Transfer Request Print layout</SoftTypography>
      <SoftBox style={{display:"flex", justifyContent:"center"}} mt={6}>
      <SoftButton variant="outlined" color="info">
      <input type="radio" name="pdf" style={{marginRight:"10px"}}>
      </input>
      PDF</SoftButton>
      <SoftButton variant="outlined" color="info" style={{marginLeft:"20px"}}>
      <input type="radio" name="pdf" style={{marginRight:"10px"}} >
      </input>Excel
      </SoftButton>
      </SoftBox>
      <SoftBox style={{display:"flex", justifyContent:"center"}} mt={6}>
      <SoftBox pr={1}>
      <SoftInput
        placeholder="Enter Document Number..."
        icon={{ component: "search", direction: "left" }}
      />
    </SoftBox>
    <SoftBox pr={1}>
    <SoftInput
      placeholder="Enter Document Series..."
      icon={{ component: "search", direction: "left" }}
    />
  </SoftBox>
  <SoftButton variant="contained" color="info" style={{marginLeft:"20px",backgroundColor:"#0B2F8A",boxShadow:" 0px 8px 24px -2px rgba(11, 47, 138, 0.6)"}}
  onClick={toggleModal}>
  Print Report
      </SoftButton>
      </SoftBox>
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

export default InventoryReport;
