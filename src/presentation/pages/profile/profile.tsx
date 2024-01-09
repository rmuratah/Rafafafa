import styled from "styled-components"
import Forms from "../../components/forms/FormsProfile"

const Profile = () => {

    return (
        <BoxMain>
            <Forms />
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
