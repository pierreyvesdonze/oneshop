import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Desktop = ({ navLinks, iconStyle }) => (
  <nav
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
      padding: "1rem",
      position: "relative",
    }}
  >
    {/* Titre à gauche */}
    <h3 style={{ position: "absolute", left: "1rem", margin: 0 }}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        ONE SHOP
      </Link>
    </h3>

    {/* Menu */}
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        gap: "2rem",
      }}
    >
      {navLinks.map((link) => (
        <li
          key={link.label}
          style={{ position: "relative" }}
          onMouseEnter={(e) =>
            link.children &&
            (e.currentTarget.querySelector("ul").style.display = "block")
          }
          onMouseLeave={(e) =>
            link.children &&
            (e.currentTarget.querySelector("ul").style.display = "none")
          }
        >
          <Link
            to={link.href || "#"}
            style={{ color: "#6B7280", textDecoration: "none" }}
          >
            {link.label}
          </Link>
          {link.children && (
            <ul
              style={{
                display: "none",
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                listStyle: "none",
                padding: "0.5rem 0",
                minWidth: "140px",
                boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                borderRadius: "4px",
                zIndex: 1000,
              }}
            >
              {link.children.map((sub) => (
                <li key={sub.label}>
                  <Link
                    to={sub.href}
                    style={{
                      display: "block",
                      padding: "0.5rem 1rem",
                      color: "#6B7280",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#E5E7EB";
                      e.currentTarget.style.color = "#111827";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#6B7280";
                    }}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>

    {/* Icônes à droite */}
    <div
      style={{
        position: "absolute",
        right: "1rem",
        display: "flex",
        gap: "0.5rem",
      }}
    >
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
  </nav>
);

export default Desktop;
