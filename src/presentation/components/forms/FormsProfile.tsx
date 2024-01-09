import { useState } from "react"
import styled from "styled-components"

const FormsProfile = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function emailValidate(e: string) {
        if (e.split('').find(char => char === '@')) {
            setEmail(e)
        }
    }

    return (
        <Form>
            <H1>Profile</H1>
            <InputBox>
                <Label>Name: </Label>
                <Input onBlur={(e) => setNome(e.target.value)} />
            </InputBox>
            <InputBox>
                <Label>Email: </Label>
                <Input onBlur={(e) => emailValidate(e.target.value)} />
            </InputBox>
            <Submit onClick={() => { console.log(nome); console.log(email) }}>Sign in</Submit>
        </Form>
    )
}

export default FormsProfile

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content:  center;
    flex-direction: column;
    width: 400px;
    height: 500px;
    background-color: white;
`

const Label = styled.label`
    margin-bottom: 10px;
`

const Input = styled.input`
    padding: 10px;
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-top: 5px;
    width: 300px;
`

const Submit = styled.button`
    background-color: transparent;
    border-radius: 5px;
    padding: 7.5px;
    border: 2px solid black;
    cursor: pointer;
    width: 300px;
    transition: all.3s;
    margin-top: 20px;

    &:hover{
        background-color: black;
        color: white;
    }
`

const H1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 50px;
`