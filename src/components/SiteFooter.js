import Link from "next/link";
import Image from "next/image";

const SiteFooter = () => {
  return (
    <footer>
      <div className="row">
        <div className="links">
          <div className="group">
            <div className="header">
              <b>iFLEXHIBIT</b>
            </div>
            <div className="list">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>About us</a>
              </Link>
            </div>
          </div>
          <div className="group">
            <div className="header">
              <b>SUPPORT</b>
            </div>
            <div className="list">
              <Link href="/">
                <a>Help</a>
              </Link>
              <Link href="/">
                <a>Contact us</a>
              </Link>
              <Link href="/">
                <a>Report a bug</a>
              </Link>
              <Link href="/">
                <a>Submit feedback</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="logo">
          <Image
            src="/img/iflexhibit_light.png"
            layout="fill"
            objectFit="contain"
            alt="iFLEXHIBIT Logo"
          />
        </div>
      </div>
      <div className="row">
        <div className="divider"></div>
      </div>
      <div className="row">
        <small>Copyright 2021 iFLEXHIBIT. All rights reserved.</small>
        <small>
          <Link href="/">
            <a>Terms and Conditions</a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default SiteFooter;
