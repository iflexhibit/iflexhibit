import Link from "next/link";
import Image from "next/image";

const SiteFooter = ({ links }) => {
  return (
    <footer>
      <div className="row">
        <FooterLinks links={links} />
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

const FooterLinks = ({ links }) => {
  return (
    <div className="links">
      {Object.entries(links)?.map((link, index) => (
        <div className="group" key={index}>
          <div className="header">
            <b>{link[0]}</b>
          </div>
          <div className="list">
            {link[1].map(({ href, label }, index) => (
              <Link href={href} key={index}>
                <a>{label}</a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SiteFooter;
