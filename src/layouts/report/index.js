import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import Breadcrumbs from "examples/Breadcrumbs";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";


function Report() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const myStyle = {
    backgroundColor:"#0B2F8A",
    boxShadow:"0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
    borderRadius:"16px",
    cursor:"pointer",
    color:"white",
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={15}>
      <SoftTypography textAlign="center" mb={6} style={{color:"#0B2F8A",fontWeight:"700",fontSize:"30px",lineHeight:"30px",fontFamily: 'Inter'}}>Reports</SoftTypography>
        <SoftBox mb={3} mt={10}>
        <Grid container spacing={12}>
            <Grid item xs={12} sm={6} xl={6}>
            <SoftBox style={myStyle} textAlign="center" pt={5} pb={5}> 
            <SoftTypography component={Link}
            to="/inventory-transfer" style={{color:"white",fontFamily:"Open Sans"}}>
            Inventory Transfer Request 
            Print Layout
            </SoftTypography>
            
            </SoftBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
            <SoftBox style={myStyle} textAlign="center" pt={5} pb={5}> 
            ITR Print Layout with Barcode
            </SoftBox>
            </Grid>
            
            
          </Grid>
        </SoftBox>
        <SoftBox mb={6} mt={10}>
        <Grid container spacing={12}>
          
            <Grid item xs={12} sm={6} xl={6}>
            <SoftBox style={myStyle} textAlign="center" pt={5} pb={5}> 
            Inventory Transfer Layout
            </SoftBox>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
            <SoftBox style={myStyle} textAlign="center" pt={5} pb={5}> 
            Issue Delivery Challan
            </SoftBox>
            </Grid>
            
            
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Report;
