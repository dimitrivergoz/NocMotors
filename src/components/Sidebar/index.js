import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from './SidebarElements' 
function Sidebar({isOpen, toggle}) {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="services"  onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="vehicules"  onClick={toggle}>
                    Véhicules
                </SidebarLink>
                <SidebarLink to="events"  onClick={toggle}>
                    Evènements
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to="contact"  onClick={toggle}>
                    Contact
                </SideBarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
    
    </>
  )
}

export default Sidebar