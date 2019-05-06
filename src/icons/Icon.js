import React from "react"
import styled from "styled-components"

export const getSize = size => {
  const sizes = {
    small: "12px",
    medium: "24px",
  }
  return sizes[size]
}

const getColor = () => ({ theme, color }) => {
  const colors = {
    light: theme.palette.ink.light,
  }
  return colors[color]
}

const StyledIcon = styled(({ className, children, ariaHidden, ariaLabel }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden={ariaHidden ? "true" : undefined}
    aria-label={ariaLabel}
  >
    {children}
  </svg>
))`
  width: ${getSize};
  height: ${getSize};
  vertical-align: middle;
  fill: currentColor;
  color: ${getColor};
`

const Icon = ({ children, size, color }) => (
  <StyledIcon size={size} color={color}>
    {children}
  </StyledIcon>
)

export default Icon
