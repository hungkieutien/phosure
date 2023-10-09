import NavBar from "./component/NavBar";
import '../src/styles/global/_boilerplate.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";


function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
