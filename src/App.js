import { useRoutes } from "react-router-dom";
import routs from "./routs";
import TopBar from "./Component/TopBar/TopBar"; 
import SideBar from "./Component/Sidebar/SideBar";
// import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in a src/App.scss */

function App() {
  let router=useRoutes(routs)
  return (
    <div className="container1">
      <TopBar/>
      <div style={{display:'flex',gap:'1rem'}}>
      <SideBar/>
      {router}

      </div>
    </div>
  );
}

export default App;
