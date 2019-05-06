import React from "react"
import styled from "styled-components"

const StyledList = styled.ul``

const List = ({ children, direction }) => <StyledList direction={direction}>{children}</StyledList>

export default List

export { default as ListItem } from "./ListItem"
