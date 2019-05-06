import React from "react"
import styled from "styled-components"

const StyledBadge = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  height: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.palette.ink.normal};
  border-radius: 3px 0 3px 3px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.palette.highlight};
`

const Badge = ({ children }) => <StyledBadge>{children}</StyledBadge>

export default Badge
