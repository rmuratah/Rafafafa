// import axios from "axios"
// import { useEffect, useState } from "react"
import { useEffect, useState } from 'react'
import './FormsProfile.css'
import axios from 'axios'

interface Props {
  emailError?: boolean;
  email: string
}

type UserData = {

  user: {
    firstname: string,
    email: string,
  }
  permissions: string[]

};

const FormsProfile = ({ email }: Props) => {

  const [userData, setUserData] = useState<UserData>({
    user: {
      firstname: '',
      email: '',
    },
    permissions: [],
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${email}`)
      .then(response => setUserData(response.data[0].UserData))
  }, [email])


  const [firstName, setFirstName] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [firstNameError, setFirstNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  // Function to edit User
  const editUser = async (firstname: string, emailEdit: string) => {
    await axios.put(`http://localhost:3001/users/${email}`,
      {
        firstname,
        emailEdit
      }
    )
    window.location.reload();
  }

  useEffect(() => {
    setFirstName(userData.user.firstname);
    setEmailEdit(userData.user.email);
  }, [userData]);

  // Function to validate the FirstName
  const validateFirstName = (firstName: string) => {
    if (/^[a-zA-Z]*$/.test(firstName) && firstName.length <= 15) {
      setFirstNameError(false);
    } else setFirstNameError(true);
  }

  // Function to validade the Email
  const validateEmail = (email: string) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length < 25) {
      setEmailError(false);
    } else setEmailError(true);
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    userData.permissions.includes("user:profile:view") ? <div className="form">
      <h1>Profile</h1>
      <div className="inputBox">
        <label className="">First Name: </label>
        {userData.permissions.includes("user:profile:firstname:view") || userData.permissions.includes("user:profile:view") ?
          <input
            style={{ borderColor: firstNameError ? "red" : "black" }}
            onChange={(e) => { validateFirstName(e.target.value); setFirstName(e.target.value) }} value={firstName}
            readOnly={userData.permissions.includes("user:profile:firstname:edit") || userData.permissions.includes("user:profile:edit") ? false : true}
          /> : undefined}
      </div>
      <div className="inputBox">
        <label>Email: </label>
        {userData.permissions.includes("user:profile:email:view") || userData.permissions.includes("user:profile:view") ?
          <input
            style={{ borderColor: emailError ? "red" : "black" }} value={emailEdit}
            onChange={(e) => { validateEmail(emailEdit); setEmailEdit(e.target.value) }}
            readOnly={userData.permissions.includes("user:profile:email:edit") || userData.permissions.includes("user:profile:edit") ? false : true}
          /> : undefined}
      </div>
      {userData.permissions.includes("user:profile:firstname:edit") || userData.permissions.includes("user:profile:firstname:edit") || userData.permissions.includes("user:profile:edit") ?
        <button className="Submit" onClick={() => firstNameError === false && emailError === false && editUser(firstName, emailEdit)}>Save</button>
        : undefined}
    </div> : <h1 style={{ color: "black", fontSize: "5rem" }}>You do not have permission to see your profile</h1>
  )
}

export default FormsProfile;
