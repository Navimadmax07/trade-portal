import { Route,Routes } from 'react-router-dom';
import SignInPage from "../tradePortal/LoginPageFiles/sign-in.jsx";
import SignUp from "../tradePortal/SignupPageFiles/signup.jsx";
import DashBoard1 from '../tradePortal/DashBoards/Dashboard1.jsx';
function Routesss(){
    return(
        <Routes>
            <Route path='/' element={<SignInPage/>}/>
            <Route path='/signup' element={<SignUp />}> </Route>
            <Route path='/dashboard1' element={<DashBoard1 />}></Route>
             
        </Routes>
    );
}
export default Routesss;