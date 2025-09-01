import { Route , BrowserRouter, Routes } from "react-router-dom"
import Login from "./pages/Login";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;