import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;
  }

  li {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #1b487e;

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
      border-right: 0;
    }
  }
`
