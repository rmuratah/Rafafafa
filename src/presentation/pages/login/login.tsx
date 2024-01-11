import Forms from "../../components/forms/FormsLogin";
import styled from "styled-components";

const Login = () => {

    return (
        <BoxMain>
            <Forms />
        </BoxMain>
    )
}

export default Login

const BoxMain = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
