import styles from "styles/TextArea.module.scss";

const TextArea = ({ id, value, onChange, placeholder, autoFocus }) => {
  const handleResize = (e) => {
    if (e.target.scrollHeight >= 136) return;
    e.target.style.height = "";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <textarea
      className={styles["textarea"]}
      onInput={handleResize}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};

export default TextArea;
