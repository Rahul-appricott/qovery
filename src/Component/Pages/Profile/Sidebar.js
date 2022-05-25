import React from 'react';
import { SidebarImage } from '../../../img/index';
// import {Container, Row} from 'react-bootstrap';
import {HeaderSidebar} from '../../../Component/Header/Header';
import '../../../Component/Sass/Layout/sidebar.scss';

const sidebar = () =>{
    return(
        <>
            <HeaderSidebar/>
            <div className="sidebar" style={{ backgroundImage: `url(${SidebarImage})` }}></div>
        </>
    );
}

export default sidebar;