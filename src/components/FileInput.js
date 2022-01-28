import { useRef } from "react";
import styles from "styles/FileInput.module.scss";
import Button from "./Button";
import UploadIcon from "./icons/UploadIcon";

const FileInput = ({
  id,
  inputFile,
  oldFile,
  multiple,
  accept,
  onChange,
  label,
  buttonLabel,
  required,
  variant,
}) => {
  const inputRef = useRef(null);
  return (
    <label htmlFor={id} className={styles["container"]}>
      {label}
      {(oldFile || inputFile) && (
        <div className={`${styles["preview"]} ${styles[variant || "default"]}`}>
          {inputFile && (
            <img src={URL.createObjectURL(inputFile)} alt="image preview" />
          )}
          {!inputFile && oldFile && <img src={oldFile} alt="image preview" />}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        id={id}
        name={id}
        multiple={multiple}
        accept={accept}
        onChange={onChange}
        required={required}
      />
      <Button
        label={buttonLabel || label}
        variant="secondary"
        onClick={() => inputRef.current.click()}
        fullWidth
        startIcon={<UploadIcon />}
      />
    </label>
  );
};

export default FileInput;
