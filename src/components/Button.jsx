import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  min-width: 200px;
  margin: 0px;
  padding: 15px 30px;
  font-size: 24px;
  background-color: ${(props) => (props.disabled ? "#6C6E7E14" : "#448EFE29")};
  color: ${(props) => (props.disabled ? "#bbb" : "#1959b8")};
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease-in-out;
  white-space: nowrap;
`;

const Button = ({ disabled, onClick, children }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
