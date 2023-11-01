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
    <>
      <tr
        className={
          _id === isMenuItemVisible
            ? "  cursor-pointer text-center align-middle bg-green-100 "
            : "  bg-slate-200  text-center align-middle cursor-pointer hover:bg-green-100"
        }
        onClick={() => handleClick(_id)}
      >
        <td className="p-2 border-b-[1.5px] border-green-500">{maHangHoa}</td>
        <td className="p-2 border-b-[1.5px] border-green-500 text-center    ">
          <p className=" flex items-center justify-start gap-4">
            <img
              className="  w-14 h-14 rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
              src={hinhAnh}
            />
            <p> {tenHang}</p>
          </p>
        </td>
        <td className="p-2 border-b-[1.5px] border-green-500">{nhomHang}</td>
        <td className="p-2 border-b-[1.5px] border-green-500">{loai}</td>
        <td className="p-2 border-b-[1.5px] border-green-500">{giaBan}</td>
        <td className="p-2 border-b-[1.5px] border-green-500">{giaVon}</td>
      </tr>
      {_id === isMenuItemVisible && (
        <tr>
          <td colSpan={6}>
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
          </td>
        </tr>
      )}
    </>
  );
};

export default MenuRow;
