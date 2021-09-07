import Link from "next/link";

const NavbarBottom = () => {
  return (
    <nav className="bottom">
      <div className="links">
        <div className="link">
          <Link href="/">
            <a>
              <i className="fas fa-home" aria-hidden></i>
            </a>
          </Link>
        </div>
        <div className="link">
          <Link href="/">
            <a>
              <i className="fas fa-user-alt" aria-hidden></i>
            </a>
          </Link>
        </div>
        <div className="link">
          <Link href="/">
            <a>
              <i className="fas fa-cog" aria-hidden></i>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;
