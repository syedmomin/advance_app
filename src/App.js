import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {  
  const sideBarMenu = [
    {
        path: "/",
        name: "Home",
        componentName: ""
    },
    {
        path: "/bacis",
        name: "Basic",
        componentName: ""
    },
    {
        path: "/advance",
        name: "advance",
        componentName: ""
    }
]

return (
    <>
        <Router>
            <div class="sidenav">
                <div className="sideheader">ADVANCE TESTING</div>
                {sideBarMenu.map((sideNav, index) => {
                    return <Link to={sideNav.path} className="sideLink" key={index}>{sideNav.name.toUpperCase()}</Link>
                })}
            </div>

            <div class="main">
                <Routes>
                   
                </Routes>
            </div>
        </Router>

    </>
)
}

export default App;
