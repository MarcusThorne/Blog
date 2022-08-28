import React from 'react'
import { NavbarContainer, NavbarLinks, NavbarSpacer, Socials } from '../Styles/NavbarStyle'
import { BsPinterest, BsInstagram } from 'react-icons/bs'

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <h1>Marcus' Blog</h1>
        <NavbarLinks>
          <a href='.'>Blogs</a>
          <a href='.'>Politics</a>
          <a href='.'>Mental Health</a>
          <a href='.'>Relationships</a>
          <Socials>
            <BsPinterest />
            <BsInstagram />
          </Socials>
        </NavbarLinks>
      </NavbarContainer>
      <NavbarSpacer />
    </>
  )
}

export default Navbar
