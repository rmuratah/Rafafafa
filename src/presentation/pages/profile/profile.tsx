import styled from "styled-components"
import Forms from "../../components/forms/FormsProfile"
import { useLocation } from "react-router-dom"


const Profile = () => {

    const location = useLocation()
    
    return (
        <BoxMain>
            <Forms user={location.state}/>
        </BoxMain>
    )
}

export default Profile

const BoxMain = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
