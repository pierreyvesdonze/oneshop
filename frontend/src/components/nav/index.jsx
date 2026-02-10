import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Test", href: "/test" },
      { label: "Service B", href: "/services/b" },
      { label: "Service C", href: "/services/c" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Email", href: "/contact/email" },
      { label: "Téléphone", href: "/contact/telephone" },
      { label: "Adresse", href: "/contact/adresse" },
    ],
  },
];

export default function Nav() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenus, setOpenSubMenus] = React.useState({}); // mobile accordions

  const toggleSubMenu = (label) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (isMobile) {
    // -------- MOBILE MENU --------
    return (
      <div style={{ padding: "1rem", background: "#ffffff" }}>
        <IconButton
          color="inherit"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <MenuIcon style={{ color: "#6B7280" }} />
        </IconButton>

        <h3 style={{
          position: "absolute", top: '0', left: "50%", transform: "translateX(-50%)",
        }}>ONE SHOP</h3>

        <Collapse in={mobileOpen}>
          <Paper style={{ marginTop: "0.5rem", background: "#ffffff" }}>
            <MenuList>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <MenuItem
                      onClick={() => toggleSubMenu(link.label)}
                      style={{ color: "#6B7280" }}
                    >
                      {link.label}
                    </MenuItem>
                    <Collapse in={openSubMenus[link.label]}>
                      <MenuList style={{ paddingLeft: "1rem" }}>
                        {link.children.map((sub) => (
                          <MenuItem
                            key={sub.label}
                            style={{ color: "#6B7280" }}
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
                    style={{ color: "#6B7280" }}
                    component={Link}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </MenuItem>
                )
              )}
            </MenuList>
          </Paper>
        </Collapse>
      </div>
    );
  }

  // -------- DESKTOP MENU --------
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#ffffff",
        padding: "1rem",
      }}
    >
       <h3 style={{
          position: "absolute", top: '0', left: "5%", transform: "translateX(-5%)",
        }}>ONE SHOP</h3>
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
            onMouseEnter={(e) => {
              if (link.children) {
                const submenu = e.currentTarget.querySelector("ul");
                submenu.style.display = "block";
              }
            }}
            onMouseLeave={(e) => {
              if (link.children) {
                const submenu = e.currentTarget.querySelector("ul");
                submenu.style.display = "none";
              }
            }}
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
                  background: "#ffffff",
                  listStyle: "none",
                  padding: "0.5rem 0",
                  minWidth: "140px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.5)",
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
                        e.currentTarget.style.background = "#E5E7EB"; // gris clair
                        e.currentTarget.style.color = "#111827"; // texte sombre
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
    </nav>
  );
}
