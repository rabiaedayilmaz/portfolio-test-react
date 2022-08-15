import "./index.scss";
import Sidebar from "../Sidebar/"
import TopRightBar from "../TopRightBar";


const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <TopRightBar />
    </div>
    )    
}

export default Layout;