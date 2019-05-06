import React from "react"
import styled from "styled-components"

const StyledStack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`

const Stack = ({ children, direction = "row" }) => (
  <StyledStack direction={direction}>{children}</StyledStack>
)

export default Stack
