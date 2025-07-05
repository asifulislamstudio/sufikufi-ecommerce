import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsRocketTakeoff } from "react-icons/bs";
import { useState } from "react";
import CategoryDrawer from "../Drawer/CategoryDrawer";

const Navigation = () => {
    
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false)

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true)
    }
    return (
       <>
        <nav className="py-2">
           <div className="container flex items-center justify-end">
            <div className="col1 w-[20%]">
                <Button onClick={openCategoryPanel} className="!text-black font-primary !font-bold !text-[18px]  !gap-x-1"> 
                <RiMenu2Fill className="!font-bold  " />
                  SHOP BY CATEGORIES
                <FaAngleDown className="ml-4" />
                </Button>
            </div>
            <div className="col2 w-[60%]">
            <ul className="flex gap-x-8   items-center">
                <li className="hover:text-primary">
                    <Link to='/'>Home</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/fashion'>Fashion</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/new-arrivals'>Electronics</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/all-brands'>Bags</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/best-deals'>Footware</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/blog'>Groceries</Link>
                </li>
                
                <li className="hover:text-primary">
                    <Link to='/blog'>Beauty</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/blog'>Wellness</Link>
                </li>
                <li className="hover:text-primary">
                    <Link to='/blog'>Jewellery </Link>
                </li>
            </ul>
            </div>
            <div className="col3 w-[20%]">
                <p className="flex items-center justify-center gap-x-2"><BsRocketTakeoff />Free International Delivery</p>
            </div>
           </div>

        </nav>
       <CategoryDrawer  setIsOpenCatPanel={setIsOpenCatPanel} isOpenCatPanel={isOpenCatPanel}  ></CategoryDrawer>
       </>
    );
};

export default Navigation;