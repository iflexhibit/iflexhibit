import styles from "styles/SearchModal.module.scss";
import { motion } from "framer-motion";
import TextInput from "./TextInput";
import { useEffect, useState } from "react";
import Button from "./Button";
import IconButton from "./IconButton";
import TimesIcon from "./icons/TimesIcon";
import { useRouter } from "next/router";
import Select from "./Select";

export const SearchModal = ({ closeMenu }) => {
  const searchOptions = [
    { value: "post", label: "Search for posts" },
    { value: "user", label: "Search for a user" },
  ];
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState(searchOptions[0].value);
  const handleSearch = () => {
    searchOption === "user"
      ? router.push({
          pathname: `/profile/${search}`,
          query: { type: "username" },
        })
      : router.push({
          pathname: "/",
          query: { ...router.query, title: search },
        });

    setSearch("");
  };

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
  return (
    <div className={styles.search}>
      <motion.button
        key="underlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.125 }}
        className={styles.underlay}
        onClick={closeMenu}
      ></motion.button>
      <motion.div
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.125 }}
        className={styles.menu}
      >
        <IconButton
          icon={<TimesIcon />}
          onClick={closeMenu}
          variant="default"
        />
        <Select
          options={searchOptions}
          value={searchOption}
          onChange={(e) => handleSearchChange(e.target.value)}
          fullWidth
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
          autoFocus
        />
        <Button
          label="Search"
          fullWidth
          onClick={handleSearch}
          variant="primary"
        />
      </motion.div>
    </div>
  );
};
