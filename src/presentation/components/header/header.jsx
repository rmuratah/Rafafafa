import styled from "styled-components";
import logo from '../../assets/images/sigmalogo.png'

const header = () => {

	return (
		<Header>
			<Logo src={logo} alt="Logo" />
		</Header>
	)
}

export default header;

const Header = styled.header`
	background-color: white;
	height: 10vh;
`
const Logo = styled.img`
    width: 300px;
`