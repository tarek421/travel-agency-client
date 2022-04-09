import React, { useState } from 'react';

import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
  } from "@mui/material";
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const {user, logout} = useAuth();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleLogOut = () => {
      logout();      
    };
  
  
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <Box id='profile' sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/5GzXkwq/user.png"
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem>
                  <Link to="/dashboard/myOrder" className={(navInfo) => (navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link")} tabIndex="-1">Dashboard</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
    );
};

export default UserProfile;