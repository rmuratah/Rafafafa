import axios from "axios"
import { SetStateAction, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

interface InputProps {
    error?: boolean;
}

const FormsLogin = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)

    //fetching all users
    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(function (response) {
                setUsers(response.data);
            })
    }, [])

    const submit = (name: string, email: string) => users.map(user => user.UserData.user.email === email && user.UserData.user.firstname === name ? navigate("/profile", { state: user }) : setError(true))

    return (
        <Form>
            <H1>Login</H1>
            {error && <ErrorMsg>Name or Email invalid</ErrorMsg>}
            <InputBox>
                <Label>Name: </Label>
                <Input onBlur={(e: { target: { value: SetStateAction<string> } }) => setName(e.target.value)} error={error} />
            </InputBox>
            <InputBox>
                <Label>Email: </Label>
                <Input onBlur={(e: { target: { value: string } }) => setEmail(e.target.value)} error={error} type={"email"} />
            </InputBox>
            <Submit onClick={() => submit(name, email)}>Sign in</Submit>
        </Form>
    )
}

export default FormsLogin

const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content:  center;
    flex-direction: column;
    width: 40rem;
    height: 50rem;
    border-radius: 2rem;
    backdrop-filter: blur(5rem);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`

const Label = styled.label`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`

const Input = styled.input<InputProps>`
  padding: 1.5rem;
  border-color: ${(props) => (props.error ? 'red' : 'black')}; 
  border-radius: 1rem;
  font-size: 1.5rem;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-top: 5px;
    width: 300px;
`

const Submit = styled.button`
    background-color: white;
    border-radius: 5px;
    padding: 7.5px;
    border: 2px solid black;
    cursor: pointer;
    width: 300px;
    transition: all.3s;
    margin-top: 20px;
    border-radius: 1rem;
    font-size: 2rem;

    &:hover{
        background-color: black;
        color: white;
    }
`

const H1 = styled.h1`
    font-size: 5rem;
    margin-bottom: 50px;
`

const ErrorMsg = styled.p`
    color: red;
`