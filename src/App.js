import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Difference,PropsDes,PropsType,Constructor,HookState} from "./components/basic/FuncnalComponent";
import {ClassConstructor,ClassState,ClassEvent,ClassLifeCycle} from "./components/basic/ClassComponent";

function App() {  
  const sideBarMenu = [
    {
        path: "/",
        name: "Home",
        componentName: <Difference/>
    },
    {
        path: "/props",
        name: "Props",
        componentName: <PropsDes name="syed"/>
    },
    {
        path: "/propstype",
        name: "Props Type",
        componentName: <PropsType name="syed" desi="developer" age={21}/>
    },
    {
        path: "/contractor",
        name: "constructor",
        componentName: <Constructor/>
    },
    {
        path: "/classConstructor",
        name: "class Constructor",
        componentName: <ClassConstructor name="momin"/>
    },
    {
        path: "/state",
        name: "state",
        componentName: <ClassState/>
    },
    {
        path: "/hook",
        name: "hooks",
        componentName: <HookState/>
    },
    {
        path: "/event",
        name: "event handle",
        componentName: <ClassEvent name="momin"/>
    },
    {
        path: "/lifecyle",
        name: "life cycle",
        componentName: <ClassLifeCycle/>
    },
    {
        path: "/phase",
        name: "phase",
        componentName: <ClassEvent name="momin"/>
    }
]

return (
    <>
        <Router>
            <div className="sidenav">
                <div className="sideheader">ADVANCE TESTING</div>
                {sideBarMenu.map((sideNav, index) => {
                    return <Link to={sideNav.path} className="sideLink" key={index}>{sideNav.name.toUpperCase()}</Link>
                })}
            </div>
            <div class="main">
                <Routes>
                {sideBarMenu.map((sideNav, index) => {
                    return <Route path={sideNav.path} element={sideNav.componentName} key={index}/>
                })}
                </Routes>
            </div>
        </Router>

    </>
)
}

export default App;
