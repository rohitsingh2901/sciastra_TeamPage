import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav class="tanmay_nav_new my-2">
          <div class="right-nav">
            <div class="n-small flex justify-evenly flex-row-reverse items-center">
              <div class="menu-item">
                <a
                  class="login-button  lra text-black hover:no-underline "
                  href="https://sciastra.com/app/"
                >
                  Login
                </a>
              </div>
              <div
                class="menu-item
                "
              >
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/contact">
                  Contact us
                </a>
              </div>
              <div class="menu-item">
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/tss-niser">
                  TSS{" "}
                </a>
              </div>
              <div
                class="menu-item
                 active"
              >
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/teams/">
                  Team
                </a>
              </div>
              <div
                class="menu-item
                "
              >
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/materials">
                  Materials
                </a>
              </div>
              <div
                class="menu-item
                "
              >
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/blog/">
                  Blogs
                </a>
              </div>
              <div
                class="menu-item
                "
              >
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/selections">
                  Selections
                </a>
              </div>
              <div
                class="menu-item
                "
              >
                <a class="lra text-black  hover:no-underline" href="https://www.sciastra.com/courses/">
                  Courses
                </a>
              </div>
              <div
                class="menu-item
                "
              >
                <a class="lra text-black  hover:no-underline" href="https://sciastra.com/">
                  Home
                </a>
              </div>
              <div class="left-nav">
                <a href="https://sciastra.com">
                  <img
                    style={{ "border-radius": "50%", width: "70px" }}
                    src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
                    alt="SciAstra Logo"
                  />
                </a>
              </div>
            </div>

            <div class="upx n-large">
              <button
                class="upxb "
                onclick="openNavtanmay()"
                id="openmenubtn"
              ></button>
            </div>
          </div>
          <div class="clear"></div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
