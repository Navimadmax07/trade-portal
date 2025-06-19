import { useNavigate } from 'react-router-dom';
import './Signup.css';
import {useState} from 'react';
function SignUp(){
    const navigate=useNavigate();
    const[Fullname,setFullname]=useState("");
    const[Email,setEmail]=useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Input:", { Fullname, Email, Phone, Password });
        navigate('./dashboard1');
        

        // In future: send data to backend here using Axios or Fetch
    };

    return(
        <div className='container-signup'>
            <div className='float-signup-container'>
                <div className='logo-row'>
                    <img
                    src="/LoginPageImages/IM LOGO 2.png"
                    alt="logox"
                    className='logo'
                    />
                    <img
                    src="/LoginPageImages/_.png"
                    alt="logox"
                    className='bar'
                    />
                    <img
                    src="/LoginPageImages/Trade.ai.png"
                    alt="logox"
                    className='logo1'
                    />
                </div>
            
                <h2 className='title'>Create Your Account</h2>

                <form className='signup-form' onSubmit={handleSubmit} >
                    <div className='input-group'>
                        <label>Full Name*</label>
                        <input 
                        type="text" 
                        placeholder="Name"
                        value={Fullname}
                        onChange={(e)=>setFullname(e.target.value)}
                        required
                        />
                    </div>

                    <div className='input-group'>
                        <label>E-mail*</label>
                        <input type="email" 
                        placeholder="Gmail"
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}
                         required 
                        />
                    </div>

                    <div className='input-group'>
                        <label>Phone Number*</label>
                        <input type="tel"
                         placeholder="Number" 
                         value={Phone}
                         onChange={(e)=>setPhone(e.target.value)}
                         required
                        />
                    </div>

                    <div className='input-group'>
                        <label>Create Password*</label>
                        <input type="password"
                        placeholder="XXXXXX" 
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required 
                        />
                    </div>

                    <button type="submit" className='btn-signup'>Sign Up</button>
                </form>

            <div className='divider'>
            <span>OR</span>
            </div>

            <button className='btn-google'>
            <img src="./LoginPageImages/Google button.png" alt='google-button' />
            Continue with Google
            </button>
            </div>
        </div>
    );
}
export default SignUp;