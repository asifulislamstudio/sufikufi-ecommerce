import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Divider, { dividerClasses } from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/Navigation";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  return (
    <>
    <header className="bg-white">
      {/* top-bar */}
      <div className="top-strip py-2 border-b-1 border-black-100/20  bg-primary">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* col1 of topbar */}
            <div className="col1 w-[50%]">
              {" "}
              <p className="text-base font-semibold text-white">
                {" "}
                Welcome to SufiKufi, asifulislam.xyz
              </p>{" "}
            </div>
            {/* col-2 of top -bar */}
            <div className="col2 flex items-center justify-end ">
              <ul className="flex justify-evenly gap-x-3  ">
                <li className="hover:text-white transition-colors">
                  <Link to="/help-center">Help Center</Link>
                </li>
                <li className="hover:text-white transition-colors">
                  <Link to="/order-tracking">Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mid Header */}
      <div className="header py-1 border-b border-gray-200">
        <div className="container flex items-center justify-between py-3">
          <div className="col1 w-[30%]">
            <img src={logo} alt="Sufikufi logo" />
          </div>

          <div className="col2 w-[40%]">
            <Search />
          </div>
          {/* end-header */}
          <div className="col3 w-[30%] flex items-center ">
            <div className="container flex">
              <ul className="flex items-center gap-x-3 mr-3 font-semibold">
                <li>
                  <Link className=" hover:text-primary" to="/login">
                    Log In
                  </Link>
                </li>
                |
                <li>
                  <Link className=" hover:text-primary" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
              <Divider className="" orientation="vertical" flexItem />
              <ul className="flex items-center gap-x-3">
                <li>
                  <IconButton aria-label="compare">
                    <Tooltip title="Compare">
                      <StyledBadge
                        badgeContent={4}
                        className="hover:text-primary"
                        color="secondary"
                      >
                        <IoIosGitCompare />
                      </StyledBadge>
                    </Tooltip>
                  </IconButton>
                </li>
                <li>
                  <IconButton aria-label="Wishlist">
                    <Tooltip title="Wishlist">
                      <StyledBadge
                        badgeContent={4}
                        className="hover:text-primary"
                        color="secondary"
                      >
                        <FaRegHeart />
                      </StyledBadge>
                    </Tooltip>
                  </IconButton>
                </li>
                <li>
                  <IconButton aria-label="cart">
                    <Tooltip title="My Cart">
                      <StyledBadge
                        badgeContent={4}
                        className="hover:text-primary"
                        color="secondary"
                      >
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </Tooltip>
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Nvaigations  */}
      <div className="navigation">
        <Navigation></Navigation>
      </div>
    </header>
   
    </>
  );
};

export default Header;
