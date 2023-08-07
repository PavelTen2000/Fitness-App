import Logo from "@/assets/Logo.png";
import React from "react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            excepturi perspiciatis recusandae quo, illo architecto dolorem? Enim
            nobis minus quisquam, possimus sint hic!
          </p>
          <p>© All rights reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">WhatsApp</p>
          <p>VK</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">87778803344</p>
          <p className="my-5">87778803344</p>
          <p>87778803344</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
