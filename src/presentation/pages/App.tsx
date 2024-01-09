import Forms from "../components/forms/forms";
import Header from "../components/header/header";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <BoxMain>
        <Forms />
      </BoxMain>
    </>
  );
}

export default App;

const BoxMain = styled.div`
  height: 100%;
`
