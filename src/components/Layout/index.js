import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import { Typography } from "../../components/Title/Title.styled";
import { ALink } from "../../components/Button/Button.styled";

const Layout = (props) => {
  return (
    <div className="Container">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <section>
          <ALink link href="#">
            Tips&nbsp;&nbsp;|
          </ALink>
          <ALink link href="#">
            Refer a Friend&nbsp;&nbsp;|
          </ALink>
          <ALink link href="#">
            Privacy policy
          </ALink>
        </section>
        <section>
          <ALink facebook href="#">
            <FaFacebookF size={28} />
          </ALink>
          <ALink twitter href="#">
            <BsTwitter size={28} />
          </ALink>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
