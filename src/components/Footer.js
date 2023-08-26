import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="main_footer pt-5">
        <div class="main__footer__logo ml-12">
          <a href="follow_external.php?req=eWtniS6JsI">
            <img
              src="https://sciastra.com/Assets/Images/newsciastra.jpg"
              class="w-20"
              alt=""
            />
          </a>
          <h3 class="text-white">SciAstra</h3>
        </div>
        <div class="Pages ml-12">
          <p class="mb-4 font-bold text-2xl text-white">© SciAstra</p>
          <ul class="list-unstyled text-light">
            <li class="mb-3">
              <i class="fa fa-home"></i>&nbsp;
              <a class="text-light hover:no-underline" href="https://sciastra.com/">
                {" "}
                Home
              </a>
            </li>
            <li class="mb-3">
              <i class="fa fa-book"></i>&nbsp;
              <a class="text-light hover:no-underline" href="https://sciastra.com/courses/">
                {" "}
                Our Courses
              </a>
            </li>
            <li class="mb-3">
              <i class="fa fa-comment"></i>&nbsp;
              <a class="text-light hover:no-underline" href="https://sciastra.com/blog/">
                {" "}
                Blog
              </a>
            </li>
            <li class="mb-3">
              <i class="fa fa-file"></i>&nbsp;
              <a class="text-light hover:no-underline" href="https://sciastra.com/materials/">
                {" "}
                Free Materials
              </a>
            </li>
            <li class="mb-3">
              <i class="fa fa-group"></i>&nbsp;
              <a class="text-light hover:no-underline" href="https://sciastra.com/teams/">
                {" "}
                Our Team
              </a>
            </li>
            <li class="mb-3">
              <i class="fa fa-phone"></i>&nbsp;
              <a class="text-light hover:no-underline" href="https://sciastra.com/contact/">
                {" "}
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div style={{ "min-height": "130px" }}></div>
        <div class="container basic">
          <div class="row">
            <div class="col-md-3 col-lg-3 mt-4 mt-lg-0">
              <p class="text-center text-white text-lg-start fs-6">
                SciAstra Education Pvt Ltd, Bhubaneswar, Odisha
              </p>
            </div>
            <div class="col-md-3 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start"></div>
            <div class="col-md-3 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start mail">
              <a
                href="mailto:support@sciastra.com"
                class="fs-6 text-white ps-0 ps-lg-5 text-center text-lg-start  hover:no-underline"
              >
                support@sciastra.com
              </a>
            </div>
            <div class="col-md-3 col-lg-3 mb-3 mt-4 mt-lg-0">
              <div class="text-center flex justify-evenly">

              <a href="https://sciastra.com/follow_external.php?req=ygIy1k6vyP" class="fa fa-youtube" style={{"color":"white","textDecoration":"none"}}>
  <span class="sr-only">Visit us on YouTube</span>
</a>
<a href="https://sciastra.com/follow_external.php?req=MrrBHi4frT" style={{"color":"white","textDecoration":"none"}} class="fa fa-facebook">
  <span class="sr-only">Visit us on Facebook</span>
</a>
<a href="https://sciastra.com/follow_external.php?req=FMlxbuQS5w" style={{"color":"white","textDecoration":"none"}} class="fa fa-instagram">
  <span class="sr-only">Visit us on Instagram</span>
</a>
<a href="https://sciastra.com/follow_external.php?req=x1Luinj8TR" style={{"color":"white","textDecoration":"none"}} class="fa-brands fa-discord">
  <span class="sr-only">Join us on Discord</span>
</a>
<a href="https://sciastra.com/follow_external.php?req=xZrGX4XxE8" style={{"color":"white","textDecoration":"none"}} class="fa fa-linkedin">
  <span class="sr-only">Connect with us on LinkedIn</span>
</a>


        
                
                
                
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="main__footer__down__strip text-white bg-black text-center py-4">
        &copy; Copyright 2023, SciAstra. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
