
/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import OtpVerification from "layouts/authentication/otp-verification"

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import  Report from 'layouts/report';
import InventoryReport from "layouts/inventory-transfer";
import ProductionOrderList from "layouts/production-order";
import FilterCategory from "layouts/filter-category";
import GoodsReceiptNote from "layouts/goods-receipt";
import GoodsFilterCategory from "layouts/goods-receipt/filter-category";
import InventoryTransferRequestList from "layouts/inventory-transfer-request-list";
import InventoryTransferApproval from "layouts/inventory-transfer-approval";
import InventoryTransferRequest from "layouts/inventory-transfer-request";
import EditProfile from "layouts/edit-profile";
import  UserAuthContextProvider from "layouts/context/user-auth";
import DownloadPage from "layouts/pdf-convertor";
import SignEmail from "layouts/authentication/email-signin";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
 
 
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Otp Verification",
    key: "otp-verification",
    route: "/authentication/otp-verification",
    icon: <SpaceShip size="12px" />,
    component: <OtpVerification/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Report",
    key: "report",
    route: "/report",
    icon: <SpaceShip size="12px" />,
    component: <Report/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "TransferReport",
    key: "transfer-report",
    route: "/inventory-transfer",
    icon: <SpaceShip size="12px" />,
    component: <InventoryReport/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "ProductionOrderList",
    key: "production-order-list",
    route: "/production-order",
    icon: <SpaceShip size="12px" />,
    component: <ProductionOrderList/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "FilterCategory",
    key: "filter-category",
    route: "/filter-category",
    icon: <SpaceShip size="12px" />,
    component: <FilterCategory/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "GoodsReceiptNote",
    key: "goods-receipt",
    route: "/goods-receipt",
    icon: <SpaceShip size="12px" />,
    component: <GoodsReceiptNote/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "GoodsFilterNote",
    key: "goods-filter",
    route: "/goods-filter-note",
    icon: <SpaceShip size="12px" />,
    component: <GoodsFilterCategory/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "InventoryTransferRequestList",
    key: "inventory-transfer-request-list",
    route: "/inventory-transfer-request-list",
    icon: <SpaceShip size="12px" />,
    component: <InventoryTransferRequestList/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "InventoryTransferRequest",
    key: "inventory-transfer-request",
    route: "/inventory-transfer-request",
    icon: <SpaceShip size="12px" />,
    component: <InventoryTransferRequest/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "InventoryTransferApproval",
    key: "inventory-transfer-approval",
    route: "/inventory-transfer-approval",
    icon: <SpaceShip size="12px" />,
    component: <InventoryTransferApproval/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "EditProfile",
    key: "edit-profile",
    route: "/edit-profile",
    icon: <SpaceShip size="12px" />,
    component: <EditProfile/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "user-auth",
    key: "user-auth",
    route: "/user-auth",
    icon: <SpaceShip size="12px" />,
    component: <UserAuthContextProvider/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "pdf-convertor",
    key: "pdf-convertor",
    route: "/pdf-convertor",
    icon: <SpaceShip size="12px" />,
    component: <DownloadPage/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "email-signin",
    key: "email-signin",
    route: "/authentication/email-signin",
    icon: <SpaceShip size="12px" />,
    component: <SignEmail/>,
    noCollapse: true,
  },
];

export default routes;
