import { useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
  UserData: {
    user: {
      firstname: string,
      email: string,
    }
    permissions: string[]
  }
}

const FormsProfile = ({ UserData }: Props) => {

  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    setFirstname(UserData.user.firstname)
    setEmail(UserData.user.email)
  }, [UserData])

  return (
    UserData.permissions.includes("user:profile:view") ? <Form>
      <H1>Profile</H1>
      <InputBox>
        <Label>Name: </Label>
        {UserData.permissions.includes("user:profile:firstname:view") || UserData.permissions.includes("user:profile:view") ?
          <Input
            onChange={(e) => setFirstname(e.target.value)} value={firstname}
            readOnly={UserData.permissions.includes("user:profile:firstname:edit") || UserData.permissions.includes("user:profile:edit") ? false : true}
          /> : undefined
        }
      </InputBox>
      <InputBox>
        <Label>Email: </Label>
        {UserData.permissions.includes("user:profile:email:view") || UserData.permissions.includes("user:profile:view") ?
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)} value={email}
            readOnly={UserData.permissions.includes("user:profile:email:edit") || UserData.permissions.includes("user:profile:edit") ? false : true}
          /> : undefined
        }
      </InputBox>
      {UserData.permissions.includes("user:profile:firstname:edit") || UserData.permissions.includes("user:profile:firstname:edit") || UserData.permissions.includes("user:profile:edit") ?
        <Submit onClick={() => { console.log(firstname); console.log(email) }}>Save</Submit>
        : undefined
      }
    </Form> : <h1 style={{ color: "black", fontSize: "5rem" }}>You do not have permission to see your profile</h1>
  )
}

export default FormsProfile

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

const Input = styled.input`
    padding: 1.5rem;
    border-radius: 1rem;
    font-size: 1.5rem;
`

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