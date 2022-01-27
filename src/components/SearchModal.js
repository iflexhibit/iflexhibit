import styles from "styles/SearchModal.module.scss";
import { motion } from "framer-motion";
import TextInput from "./TextInput";
import { useState } from "react";
import Button from "./Button";
import IconButton from "./IconButton";
import TimesIcon from "./icons/TimesIcon";
import { useRouter } from "next/router";

export const SearchModal = ({ closeMenu }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, title: search },
    });
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
        <TextInput
          id="search"
          placeholder="Search & Discover"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
