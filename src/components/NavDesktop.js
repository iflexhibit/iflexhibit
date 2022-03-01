import Image from "next/image";
import Link from "next/link";
import styles from "styles/Nav.module.scss";
import IconButton from "./IconButton";
import MainMenu from "./MainMenu";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import UserIcon from "./icons/UserIcon";
import HomeIcon from "./icons/HomeIcon";
import TextInput from "./TextInput";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SearchIcon from "./icons/SearchIcon";
import Select from "./Select";

const NavDesktop = () => {
  const searchOptions = [
    { value: "post", label: "Post" },
    { value: "user", label: "User" },
  ];
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState(searchOptions[0].value);
  const handleSearch = () => {
    if (search.trim().length > 0)
      searchOption === "user"
        ? router.push({
            pathname: `/profile/${search.trim()}`,
            query: { type: "username" },
          })
        : router.push({
            pathname: "/",
            query: { ...router.query, title: search },
          });

    setSearch("");
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const recentSearch = sessionStorage.getItem("recent-search");
    if (recentSearch && ["post", "user"].includes(recentSearch)) {
      setSearchOption(recentSearch);
    }
  }, []);
  const handleSearchChange = (value) => {
    setSearchOption(value);
    sessionStorage.setItem("recent-search", value);
  };
  console.log(user?.avatar);
  return (
    <nav className={`${styles["nav"]} ${styles["desktop"]}`}>
      <div className={styles["controls"]}>
        <IconButton icon={<HomeIcon />} href="/" />
        <Link href="/">
          <a>
            <Image
              src="/assets/logos/lettermark.svg"
              layout="intrinsic"
              width="120"
              height="30"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className={styles["controls"]}>
        <div className={styles["search"]}>
          <Select
            options={searchOptions}
            value={searchOption}
            onChange={(e) => handleSearchChange(e.target.value)}
            small
          />
          <TextInput
            id="title"
            placeholder={
              searchOption === searchOptions[0].value
                ? "Search by post title"
                : "Search by username"
            }
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onEnterKey={handleSearch}
          />
          <IconButton
            icon={<SearchIcon />}
            onClick={handleSearch}
            disabled={!search.trim().length > 0}
            variant={!search.trim().length > 0 ? null : "primary"}
          />
        </div>
        <Button
          startIcon={<PlusIcon />}
          href="/upload"
          label="Upload"
          variant="secondary"
        />
        <Button
          startIcon={
            <div
              style={{
                width: "1.25rem",
                height: "1.25rem",
                borderRadius: "5px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={user ? user.avatar : "/assets/noavatar.jpg"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          }
          label={user ? user.username : "Account"}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <MainMenu key={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavDesktop;
