import React, { useState } from "react";
import styled from "styled-components";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <Nav>
        <Logo href="/">
            Jorge Figueroa
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href=''>About</MenuLink>
          <MenuLink href=''>Experience</MenuLink>
          <MenuLink href=''>Work</MenuLink>
          <MenuLink href=''>Contact</MenuLink>
          <ResumeButton>Resume</ResumeButton>
        </Menu>
      </Nav>
    );
  };

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    alight-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const Hamburger = styled.div`
    padding: 1rem 0;
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: white;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in;
    font-size: 1rem;

    &:hover {
        color: white;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`;

const Logo = styled.a`
    padding: 1rem 0;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    color: black;
`;

const LogoImage = styled.img `
    src: 'jflogo.png';
    height: 100px;
`

const ResumeButton = styled.button `


`