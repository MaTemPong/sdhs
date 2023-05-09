import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todos from './todos';
import Main from './main'

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/todos" element={<Todos />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;