import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";

const navLinks = [
  { label: "Accueil", href: "#" },
  {
    label: "Services",
    children: [
      { label: "Service A", href: "#" },
      { label: "Service B", href: "#" },
      { label: "Service C", href: "#" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Email", href: "#" },
      { label: "Téléphone", href: "#" },
      { label: "Adresse", href: "#" },
    ],
  },
];

export default function Nav() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenus, setOpenSubMenus] = React.useState({}); // mobile accordion

  // Toggle sous-menu mobile
  const toggleSubMenu = (label) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (isMobile) {
    // ----- MOBILE MENU -----
    return (
      <div style={{ padding: "1rem", background: "#111827" }}>
        <IconButton
          color="inherit"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <MenuIcon style={{ color: "#fff" }} />
        </IconButton>

        <Collapse in={mobileOpen}>
          <Paper style={{ marginTop: "0.5rem", background: "#1f2937" }}>
            <MenuList>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <MenuItem
                      onClick={() => toggleSubMenu(link.label)}
                      style={{ color: "#fff" }}
                    >
                      {link.label}
                    </MenuItem>
                    <Collapse in={openSubMenus[link.label]}>
                      <MenuList style={{ paddingLeft: "1rem" }}>
                        {link.children.map((sub) => (
                          <MenuItem
                            key={sub.label}
                            style={{ color: "#fff" }}
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
                    style={{ color: "#fff" }}
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

  // ----- DESKTOP MENU -----
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#ffffff",
        padding: "1rem",
      }}
    >
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
            <a
              href={link.href || "#"}
              style={{ color: "#9ca3af", textDecoration: "none" }}
            >
              {link.label}
            </a>
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
                    <a
                      href={sub.href}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#9ca3af",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#374151";
                        e.currentTarget.style.color = "#e5e7eb";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#9ca3af";
                      }}
                    >
                      {sub.label}
                    </a>
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
