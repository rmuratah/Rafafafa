import { useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
    user: {
        firstname: string,
        email: string,
        permissions: string[]
    }
}

const FormsProfile = ({ user }: Props) => {

    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        setFirstname(user.firstname)
        setEmail(user.email)
    }, [user])

    return (
        user.permissions.includes("user:profile:view") ? <Form>
            <H1>Profile</H1>
            <InputBox>
                <Label>Name: </Label>
                {user.permissions.includes("user:profile:firstname:view") || user.permissions.includes("user:profile:view") ?
                    <Input
                        onChange={(e) => setFirstname(e.target.value)} value={firstname}
                        readOnly={user.permissions.includes("user:profile:firstname:edit") || user.permissions.includes("user:profile:edit") ? false : true}
                    /> : undefined
                }
            </InputBox>
            <InputBox>
                <Label>Email: </Label>
                {user.permissions.includes("user:profile:email:view") || user.permissions.includes("user:profile:view") ?
                    <Input
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        readOnly={user.permissions.includes("user:profile:email:edit") || user.permissions.includes("user:profile:edit") ? false : true}
                    /> : undefined
                }
            </InputBox>
            {user.permissions.includes("user:profile:firstname:edit") || user.permissions.includes("user:profile:firstname:edit") || user.permissions.includes("user:profile:edit")?
                <Submit onClick={() => { console.log(firstname); console.log(email) }}>Save</Submit>
                : undefined
            }
        </Form> : <h1 style={{ color: "white", fontSize: "3rem" }}>You do not have permission to see your profile</h1>
    )
}

export default FormsProfile

const Form = styled.div`
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