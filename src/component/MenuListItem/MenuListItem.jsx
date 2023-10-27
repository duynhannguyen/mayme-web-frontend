import React from "react";
import MenuRow from "../MenuRow/MenuRow.jsx";

const MenuListItem = ({ getMenuListItem, isMenuItemVisible, handleClick }) => {
  const MenuList = getMenuListItem.map((MenuList) => (
    <MenuRow
      {...MenuList}
      isMenuItemVisible={isMenuItemVisible}
      handleClick={handleClick}
    />
  ));

  return <div>{MenuList}</div>;
};

export default MenuListItem;
