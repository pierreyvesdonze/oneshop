import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Mobile from "./mobile";
import Desktop from "./desktop";

const navLinks = [
  { label: "Home", href: "/" },
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
      { label: "Phone", href: "/contact/telephone" },
      { label: "Place", href: "/contact/adresse" },
    ],
  },
];

export default function Nav() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenus, setOpenSubMenus] = React.useState({});
  const iconStyle = { color: "#6B7280" };

  const toggleSubMenu = (label) =>
    setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));

  return isMobile ? (
    <Mobile
      navLinks={navLinks}
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
      openSubMenus={openSubMenus}
      toggleSubMenu={toggleSubMenu}
      iconStyle={iconStyle}
    />
  ) : (
    <Desktop navLinks={navLinks} iconStyle={iconStyle} />
  );
}
