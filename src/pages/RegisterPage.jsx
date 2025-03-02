import AuthForm from "../components/AuthForm";
import Wrapper from "../components/Wrapper";

const RegisterPage = () => {
    return(
        <Wrapper>
            <h1>Register</h1>
            <AuthForm isRegisterPage={true} />
        </Wrapper>
    );
}

export default RegisterPage;