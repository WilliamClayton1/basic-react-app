import styled from "styled-components";
//try importing css in button directory
function Button (props){
    return <StyledButton className={btn}>{prop.text}</StyledButton>
}

const StyledButton = styled.a`
  padding: 10px;
  background-color: midnightblue;
  color: #FFFFFF;
  &:hover {
    background: green;
  }
`

export default Button;