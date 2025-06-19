import { Route, Routes } from 'react-router-dom';
import SignInPage from "../tradePortal/LoginPageFiles/sign-in.jsx";
import SignUp from "../tradePortal/SignupPageFiles/signup.jsx";
import DashBoard1 from '../tradePortal/DashBoards/Dashboard1.jsx';
import DB from '../tradePortal/DB/DB.jsx';
import Layout from './Layout';

function Routesss() {
    return (
        <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<Layout />}>
                <Route path='/dashboard1' element={<DashBoard1 />} />
                <Route path='/db' element={<DB />} />
                {/* Add more protected/content routes here */}
            </Route>
        </Routes>
    );
}
export default Routesss;