import styled from 'styled-components'

export const NavbarContainer = styled.div`
  background-color: #2b2d32;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0 5rem;
`

export const NavbarLinks = styled.div`
  display: flex;

  a {
    color: white;
    text-decoration: none;
    margin: auto;
    margin-left: 2rem;
  }
`

export const Socials = styled.div`
  display: flex;
  padding-left: 3rem;
  height: 80%;
  margin: auto;
  margin-left: 3rem;

  svg {
    margin: auto 5px;
  }
`

export const NavbarSpacer = styled.div`
  height: 3rem;
  background-color: #2b2d32;
  width: 100%;
  border: 1px solid #4b4f58;
`
