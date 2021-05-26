import Link from "next/link";
import { useState } from "react";

const MenuBurger = ({ links }) => {
  const [spread, setSpread] = useState(false);

  const handleToggle = () => {
    setSpread(!spread);
  };

  return (
    <div className="menu">
      <span className="top-icons">
        <svg
          className="burger"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={handleToggle}
        >
          <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" />
        </svg>
      </span>

      <nav className={`nav${spread ? " spread" : ""}`}>
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <a rel="noreferrer noopener" onClick={handleToggle}>
              {link.name}
            </a>
          </Link>
        ))}
      </nav>

      <style jsx>
        {`
          .menu {
            width: 400px;
            height: 100%;
            display: flex;
            flex-flow: column;
            padding: 0.5em;
            z-index: 200;
          }
          // ======================================================================
          .top-icons {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
          }
          .top-icons i {
            font-size: 2em;
            z-index: 1000;
          }
          // ==========================================================================
          .burger {
            z-index: 120;
            background: #1c1c1c;
            fill: white;
            border-radius: 0.5em;
            width: 40px;
            height: 40px;
            cursor: pointer;
            z-index: 1100;
          }
          /* NAV */
          .nav {
            position: absolute;
            top: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background: transparent;
            transition: 0.4s ease-in;
            transform: translateX(300px);
            opacity: 0;
          }
          a {
            margin: 0.5em 0;
            font-size: 2em;
            transition: 0.2s ease-in;
            color: #bfc2ca;
            text-align: center;
            z-index: 1000;
          }
          a:hover {
            color: white;
          }
          .spread {
            transform: translateX(0px);
            opacity: 1;
            background: hsla(0, 0%, 11%, 0.6);
            backdrop-filter: blur(0.5em);
            z-index: 1000;
          }
        `}
      </style>
    </div>
  );
};

export default MenuBurger;
