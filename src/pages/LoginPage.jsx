import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Wrapper from "../components/Wrapper";

const LoginPage = () => {
    return (
        <Wrapper>
            <h1>Login</h1>
            <AuthForm isRegisterPage={false} />
            <Link to='/register'>Don't have an account? Register here!</Link>
        </Wrapper>
    );
}

export default LoginPage;