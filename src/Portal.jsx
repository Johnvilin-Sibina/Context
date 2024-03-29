import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
function Portal() {
  return (
    <div className="d-flex flex-row">
      <SideBar/>
      <Outlet/>
    </div>
  );
}

export default Portal;