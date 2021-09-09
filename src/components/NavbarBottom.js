import Link from "next/link";

const NavbarBottom = () => {
  return (
    <nav className="bottom">
      <div className="links">
        {links?.map((link, index) => (
          <div className="link" key={index}>
            <Link href={link.href}>
              <a>
                <i className={link.icon} aria-hidden></i>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

const links = [
  { icon: "fas fa-home", href: "/" },
  { icon: "fas fa-user-alt", href: "/" },
  { icon: "fas fa-cog", href: "/" },
];

export default NavbarBottom;
