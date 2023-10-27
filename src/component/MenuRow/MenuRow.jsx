import React from "react";
import MenuItem from "../../pages/MenuItem/MenuItem.jsx";
const MenuRow = ({
  handleClick,
  isMenuItemVisible,
  _id,
  maHangHoa,
  tenHang,
  nhomHang,
  loai,
  giaBan,
  giaVon,
  hinhAnh,
}) => {
  return (
    <div onClick={handleClick} className="border-2 border-green-500">
      <div className=" flex  justify-between items-center cursor-pointer bg-green-100">
        <div id={_id} className="text-xs font-bold mr-2">
          {maHangHoa}
        </div>
        <div className="mr-2">{tenHang}</div>
        <div className="mr-2">{nhomHang}</div>
        <div className="mr-2">{loai}</div>
        <div className="mr-2">{giaBan}</div>
        <div className="mr-2">{giaVon}</div>
      </div>
      {isMenuItemVisible && (
        <MenuItem
          id={_id}
          maHangHoa={maHangHoa}
          tenHang={tenHang}
          nhomHang={nhomHang}
          loai={loai}
          giaBan={giaBan}
          giaVon={giaVon}
          hinhAnh={hinhAnh}
        />
      )}
    </div>
  );
};

export default MenuRow;
