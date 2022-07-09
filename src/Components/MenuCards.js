import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

import Menu from './menuApi';
import Cards from './Cards';
import "./menucard.css";
import NavBar from './NavBar';

const MenuCards = () => {
    const [menuData, setMenuData] = useState(Menu); //Hooks=> useState - always use to manage data... get data from APi and store it

    const filterItem = (category) => {
        const updateMenuList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateMenuList);
    }
    return (
        <>
            <NavBar  filterItem = {filterItem} menuData = {menuData}/>
            <Cards menuData={menuData} />
        </>
    )
}

export default MenuCards