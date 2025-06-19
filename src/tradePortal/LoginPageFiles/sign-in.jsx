import { useNavigate } from "react-router-dom";
import './sign-in.css';
import { useState, useEffect } from "react";
import { auth, provider, signInWithPopup } from "../firebase";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signin, setSignin] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleError, setGoogleError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Load remembered email on mount
  useEffect(() => {
    const remembered = localStorage.getItem("rememberMe") === "true";
    const rememberedEmail = localStorage.getItem("rememberedEmail") || "";
    setRememberMe(remembered);
    if (remembered) setEmail(rememberedEmail);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "jainam@gmail.com" && password === "1234") {
      setSignin(true);
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("rememberedEmail");
      }
      navigate('/dashboard1');
    } else {
      setSignin(false);
    }
  }

  async function handleGoogleLogin() {
    setLoading(true);
    setGoogleError("");
    try {
      await signInWithPopup(auth, provider);
      setSignin(true);
      navigate('/dashboard1');
    } catch (error) {
      setGoogleError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='container'>
                {signin === false && <div className="error-msg1">Invalid Credentials</div>}
          {googleError && <div className="error-msg1">{googleError}</div>}
      <div className='sign-in'>
        <div className='table'>
          <img src="/LoginPageImages/IM LOGO 2.png" alt="Logo" className='logo' />
          <img src="/LoginPageImages/_.png" alt="Bar" className='bar' />
          <img src="/LoginPageImages/Trade.ai.png" alt="Trade.ai" className='logo1' />
          
          <h1 className='h1'>Sign in</h1>



          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <div className="email-input">
              <input 
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="email-icon">
                {/* Email SVG icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </div>
            
            <label htmlFor="password">Password</label>
            <div className='password-input'>
              <input 
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                style={{ paddingRight: "36px" }} // ensure space for the eye icon
              />
              <button
                type="button"
                className='eye-icon'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                tabIndex={0}
              >
                {showPassword ? (
                  // Eye Open SVG
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="12" rx="7" ry="5" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ) : (
                  // Eye Closed SVG
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="12" rx="7" ry="5" />
                    <circle cx="12" cy="12" r="2" />
                    <line x1="4" y1="4" x2="20" y2="20" />
                  </svg>
                )}
              </button>
            </div>

            <div className='remember-forgot'>
              <label>
                <input
                  type='checkbox'
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                /> Remember me
              </label>
              <span className="forgot-link">Forgot Password?</span>
            </div>

            <button className='btn' type="submit">Sign in</button>
            <button
              className='google-btn'
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <img src='/LoginPageImages/Google button.png' alt='Google' />
              {loading ? "Signing in..." : "Continue with Google"}
            </button>

            <div className="divider"><span>OR</span></div>
            
            <a>Don't have an account?</a>
            <button className="btn" type="button" onClick={() => navigate('/signup')}>Create Now</button>
          </form>
        </div>
      </div>

      <div className='image-text'>
        <div className="content-box">
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
            <div>
              <img src="./LoginPageImages/img1.jpg" alt="Slide 1" />
              <h3>Your Gateway to Global Trade</h3>
              <p className='para'>
                This platform helps you learn, register, and grow as an
                exporter. Begin now, and let your business reach across borders.
              </p>
            </div>
            <div>
              <img src="./LoginPageImages/img2.jpg" alt="Slide 2" />
              <h3>Start Your Export Journey Today</h3>
              <p className='para'>
                Unlock access to global markets. Learn how to register, connect with buyers, and grow your business internationally — all in one place.
              </p>
            </div>
            <div>
              <img src="./LoginPageImages/img3.jpg" alt="Slide 3" />
              <h3>From Local to Global</h3>
              <p className='para'>
                Join thousands of Indian entrepreneurs taking their products to the world. Start your export journey with expert guidance and tools.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;