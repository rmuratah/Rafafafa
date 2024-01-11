import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './FormsProfile.css'

const FormsLogin = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [firstName, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    //fetching all users
    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then(function (response) {
                setUsers(response.data);
            });
    }, []);

    //Function to submit and move to page Profile
    const submit = (name: string, email: string) =>
        users.map(user => user.UserData.user.email === email && user.UserData.user.firstname === name ? navigate("/profile", { state: user }) : setError(true));

    return (
        <div className="form">
            <h1>Login</h1>
            {error && <p className="ErrorMsg">Name or Email invalid</p>}
            <div className="inputBox">
                <label style={{ color: error ? "red" : "black" }}>First Name: </label>
                <input onChange={(e) => setFirstname(e.target.value)} style={{ borderColor: error ? "red" : "black" }} />
            </div>
            <div className="inputBox">
                <label style={{ color: error ? "red" : "black" }}>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} style={{ borderColor: error ? "red" : "black" }} />
            </div>
            <button className="Submit" onClick={() => submit(firstName, email)}>Sign in</button>
        </div>
    )
}

export default FormsLogin;

