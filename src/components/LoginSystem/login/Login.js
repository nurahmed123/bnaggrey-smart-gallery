import "../LoginSystem.css";
import { Link } from 'react-router-dom'

export default function Login(props) {
    return (
        <>
            <section>
                <div className="colour"></div>
                <div className="colour"></div>
                <div className="colour"></div>
                <div className="box">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="container">
                        <div className="form">
                            <h2>Login Form</h2>
                            <form>
                                <div className="input__box">
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input__box">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input__box">
                                    <input type="submit" value="Login" />
                                </div>
                                {/* <p className="forget">Forgot Password? <Link to="#">Click Here</Link></p> */}
                                <p className="forget">Don't have an account? <Link to="/signup">Sign Up</Link> / <Link to="/">Home</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
