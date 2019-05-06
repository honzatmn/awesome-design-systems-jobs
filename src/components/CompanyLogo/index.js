import React from "react"
import styled from "styled-components"

const StyledCompanyLogo = styled.div`
  height: 82px;
  width: 82px;
  background-color: white;
  border-radius: 6px 0 6px 6px;
`

const StyledImage = styled.img`
  border-radius: 6px 0 6px 6px;
`
const CompanyLogo = () => <StyledCompanyLogo />

export default CompanyLogo
