import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 0;
`;

const Title = styled.h1`
  padding: 20px;
  width: fit-content;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
`;

const Header = ({ tournamentTitle }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title onClick={() => navigate("/")}>
        {tournamentTitle || "Tournament App"}
      </Title>
    </HeaderContainer>
  );
};

export default Header;
