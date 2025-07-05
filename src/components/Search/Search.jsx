import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";
const Search = () => {
    return (
        <div className="searchbox w-full border-1 rounded-md flex ">
            <input name='searchbox' type="text" placeholder="Search for Products.." className="p-2 focus:outline-none w-full py-3" />
            <Button className='absolutet top-0 right-0 z-50 w-4  !text-2xl !font-bold !rounded-full !text-black' ><IoSearchOutline/></Button>
        </div>
    );
};

export default Search;