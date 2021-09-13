import React from 'react';
import {
  SidebarContainer,
  Icon,
  Closeicon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from './SideBarElements';

const SideBar = ({ isOpen, toggleMobileMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}>
      <Icon onClick={toggleMobileMenu}>
        <Closeicon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to='/'>Home</SidebarLinks>
          <SidebarLinks to='/about'>About</SidebarLinks>
          <SidebarLinks to='/services'>Services</SidebarLinks>
          <SidebarLinks to='/our-work'>Our Work</SidebarLinks>
          <SidebarLinks to='/contact'>Contact</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
