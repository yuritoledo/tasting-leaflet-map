import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 8px;
  color: black;
  background-color: turquoise;
  padding: 15px 25px;
  position: absolute;
  z-index: 999;
  right: 5px;
  top: 5px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export default Button
