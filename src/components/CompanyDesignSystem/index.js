import React from "react"
import styled from "styled-components"

import Button from "../Button"

const StyledCompanyDesignSystem = styled.div``

const CompanyDesignSystem = ({ url, company }) => (
  <StyledCompanyDesignSystem>
    <div>
      Explore public documentation of design system by {company} to get better insights on what
      you’re be working on.
    </div>
    <Button href={url}>Open design system</Button>
  </StyledCompanyDesignSystem>
)

export default CompanyDesignSystem
