import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/contact-us"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>Service</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
