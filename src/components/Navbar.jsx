import { Link, useLocation } from "react-router-dom";
import { HiHome, HiClock, HiChartBar, HiUserAdd } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: <HiHome /> },
    { to: "/timeline", label: "Timeline", icon: <HiClock /> },
    { to: "/stats", label: "Stats", icon: <HiChartBar /> },
  ];

  function isActive(path) {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  }

  return (
    <div className="bg-white border-b border-gray-200 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[60px]">
        <Link to="/" className="no-underline">
          <span className="text-xl font-bold text-[#1A1A1A]">Keen</span>
          <span className="text-xl font-bold text-gray-600">Keeper</span>
        </Link>

        <button
          className="menu-btn md:hidden text-2xl text-[#1F4D3D] bg-transparent border-0 cursor-pointer p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={"nav-links flex gap-1.5 items-center" + (open ? " show" : "")}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={
                "inline-flex items-center gap-1.5 px-[18px] py-2 no-underline text-sm font-medium rounded-full " +
                (isActive(link.to)
                  ? "bg-[#1F4D3D] text-white"
                  : "text-gray-600 bg-transparent")
              }
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .menu-btn { display: block !important; }
          .nav-links {
            display: none !important;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: white;
            padding: 12px;
            flex-direction: column;
            z-index: 50;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          }
          .nav-links.show { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
