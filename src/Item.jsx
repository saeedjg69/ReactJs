import { useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const Item = ({ status, title, plaque, columns }) => {
 const [isOpen, setIsOpen] = useState(false);
 const closeDropdown = useRef(null);
 const hide = (e) => {
  !closeDropdown.current?.contains(e.target) && setIsOpen(false);
 };
 document.addEventListener("mousedown", hide);

 return (
  <div
   ref={closeDropdown}
   className="relative flex justify-between m-3 bg-white rounded-2xl shadow-xl"
   onClick={() => setIsOpen(false)}
  >
   <HiDotsVertical
    size={"35px"}
    className="absolute p-1 top-2 left-1 text-gray-500 hover:text-white hover:bg-gray-500 rounded-full duration-200 cursor-pointer"
    onClick={(e) => {
     setIsOpen(!isOpen);
     e.stopPropagation();
    }}
   />
   {isOpen && (
    <div
     className="absolute top-6 left-7 text-center border-2 rounded-r-xl rounded-b-xl bg-white child:rounded-xl shadow-lg child:duration-200 child:cursor-pointer child:p-2 child-hover:bg-gray-300"
     onClick={(e) => e.stopPropagation()}
    >
     <div>مشاهده جزئیات</div>
     <div>تاریخچه پلاک</div>
    </div>
   )}
   <div
    className={`flex items-center rounded-r-2xl text-white p-2 ${
     status === "فعال" ? "bg-[#11DA00]" : "bg-[#F4B000]"
    }`}
   >
    <div className="vertical-lr">{status}</div>
   </div>
   <div className="p-3">
    <div className="flex justify-between w-11/12 lg:w-2/3 xl:w-1/2">
     <div className="text-sm md:text-lg lg:text-xl ml-10 mt-3">{title}</div>
     <div className="flex border-2 border-black rounded ">
      <div className="border-l border-black px-4 text-center">
       <div className="text-xs">ایران</div>
       <div>{plaque[3]}</div>
      </div>
      <div className="p-2 md:text-xl child:p-3">
       <span>{plaque[0]}</span>
       <span>{plaque[1]}</span>
       <span>{plaque[2]}</span>
      </div>
      <div className="bg-[#0015D7] p-2"></div>
     </div>
    </div>
    <div className="flex flex-wrap mt-3">
     {columns.map((col) => (
      <div key={col.name} className="w-1/3 xl:w-1/4 text-xs lg:text-sm my-2">
       {col.lable + ": " + col.value}
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default Item;
