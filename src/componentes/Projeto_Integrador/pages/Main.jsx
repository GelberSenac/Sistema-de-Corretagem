import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Principal from "../components/Principal";

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  gap: 20px;
  padding: 20px;
  background: #fff;
`;

function Main() {
  return (
    <>
      <MainContent>
        <Sidebar />
        <Principal />
      </MainContent>
    </>
  );
}

export default Main;
