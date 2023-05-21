import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login";
import LoginCheck from "./Login/LoginCheck";
import Main from "./Main";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login/check" element={<LoginCheck/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;