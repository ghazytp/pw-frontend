import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeNav = "text-secondary tracking-widesr";
  const nonactiveNav = "text-white nav-underline tracking-wide";

  return (
    <>
      <div className="absolute top-8 left-12">
        <ul className="text-xl font-bold sm:text-2xl">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeNav : nonactiveNav
              }
            >
              about me
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"work"}
              className={({ isActive }) =>
                isActive ? activeNav : nonactiveNav
              }
            >
              work
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                isActive ? activeNav : nonactiveNav
              }
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
