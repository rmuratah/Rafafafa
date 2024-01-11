import Forms from "../../components/forms/FormsProfile"
import { useLocation } from "react-router-dom"
import './profile.css'

const Profile = () => {

    const location = useLocation()

    return (
        <div className="BoxMain"> 
            <Forms email={location.state.UserData.user.email} />
        </div>
    )
}

export default Profile

