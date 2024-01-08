import { useState } from "react"
import styled from "styled-components"

const Forms = () => {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    return (
        <Form>
            <InputBox>
                <Label>Nome: </Label>
                <Input onBlur={(e) => setNome(e.target.value)} />
            </InputBox>
            <InputBox>
                <Label>Email: </Label>
                <Input onBlur={(e) => setEmail(e.target.value)} />
            </InputBox>
            <Submit onClick={() => { console.log(nome); console.log(email) }}>Enviar</Submit>
        </Form>
    )
}

export default Forms

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content:  center;
    border: 1px solid red;
    width: 600px;
    height: 200px;
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
`

const Submit = styled.button`
    background-color: transparent;
    border-radius: 5px;
    padding: 5px;
    border: 2px solid black;
    cursor: pointer;
    transition: all.3s;

    &:hover{
        background-color: black;
        color: white;
    }
`