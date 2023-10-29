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
    // <div
    //   onClick={() => handleClick(_id)}
    //   id={_id}
    //   key={_id}
    //   className={
    //     _id === isMenuItemVisible
    //       ? "p-[1px] border-2 border-green-500"
    //       : "p-[1px]"
    //   }
    // >
    //   <div
    //     className={
    //       _id === isMenuItemVisible
    //         ? "flex justify-between items-center cursor-pointe bg-green-100 "
    //         : " flex bg-slate-200 justify-between items-center cursor-pointer hover:bg-green-100"
    //     }
    //   >
    //     <div className="text-xs font-bold mr-2">{maHangHoa}</div>
    //     <div className="mr-2">{tenHang}</div>
    //     <div className="mr-2">{nhomHang}</div>
    //     <div className="mr-2">{loai}</div>
    //     <div className="mr-2">{giaBan}</div>
    //     <div className="mr-2">{giaVon}</div>
    //   </div>
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
        <td className="p-2 border-b-[1.5px] border-green-500">{tenHang}</td>
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
    // {/* </div> */}
  );
};

export default MenuRow;
