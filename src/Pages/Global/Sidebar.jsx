import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colours.grey[100] }}
      onClick={() => setSelected}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colours.primary[700]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#ff678a !important",
        },
        "& .pro-menu-item:hover": {
          color: "#ff678a !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ITEM */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colours.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colours.grey[100]}>
                  BUSINESS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* <img
              alt="profile-user"
              width="100px"
              height="100px"
              ADD IMAGE LINK
              style={{ cursor: "pointer", borderRadius: "50%" }}
            /> */}
              </Box>
              {/* TODO Link to database for user profile if possible */}
              <Box>
                {/* <Typography
                  variant="h2"
                  color={colours.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {/* User Name
                </Typography>
                <Typography variant="h5" color={colours.greenAccent[500]}>
                  User Role
                </Typography> */}
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Inventory"
              to="/inventory"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Stock"
              to="/add-stock"
              icon={<AddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reports"
              to="/reports"
              icon={<SummarizeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
