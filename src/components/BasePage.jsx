import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function BasePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Navbar />
      <section className="px-8">
        <Outlet />
      </section>
      {/* END HERO */}
    </>
  );
}
