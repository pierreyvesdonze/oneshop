import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Mobile = ({
  navLinks,
  mobileOpen,
  setMobileOpen,
  openSubMenus,
  toggleSubMenu,
  iconStyle,
}) => {
  return (
    <div style={{ position: "relative", background: "#fff" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
        {/* Burger */}
        <IconButton
          color="inherit"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <MenuIcon style={iconStyle} />
        </IconButton>

        {/* Titre centré */}
        <h3
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            margin: 0,
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            ONE SHOP
          </Link>
        </h3>

        {/* Icônes à droite */}
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
          <IconButton color="inherit">
            <SearchIcon style={iconStyle} />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon style={iconStyle} />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon style={iconStyle} />
          </IconButton>
        </div>
      </div>

      {/* Menu mobile overlay */}
      <Collapse in={mobileOpen}>
        <Paper
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#fff",
            zIndex: 1000,
          }}
        >
          <MenuList>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <MenuItem
                    onClick={() => toggleSubMenu(link.label)}
                    style={iconStyle}
                  >
                    {link.label}
                  </MenuItem>
                  <Collapse in={openSubMenus[link.label]}>
                    <MenuList style={{ paddingLeft: "1rem" }}>
                      {link.children.map((sub) => (
                        <MenuItem
                          key={sub.label}
                          style={iconStyle}
                          component={Link}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Collapse>
                </div>
              ) : (
                <MenuItem
                  key={link.label}
                  style={iconStyle}
                  component={Link}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </MenuItem>
              ),
            )}
          </MenuList>
        </Paper>
      </Collapse>
    </div>
  );
};

export default Mobile;
