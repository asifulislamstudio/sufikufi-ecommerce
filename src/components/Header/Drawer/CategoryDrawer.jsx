import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


const CategoryDrawer = (props) => {
  

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <div className=" border-b pl-2 py-3 flex justify-between items-center">
        <h3 className="font-primary">Shop By Categories</h3>
        <Button className="!text-xl !text-black !rounded-full"><RxCross2 /></Button>
        </div>
      <List>
        {["Fashion", "Electronics", "Bags", "Footware", "Groceries", "Beauty" , "Wellness" , "Jewellery" ].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton >
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
    
    <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  </div>
  );
};

export default CategoryDrawer;
