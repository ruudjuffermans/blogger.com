import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const DropArea = () => {
  const [file, setFile] = useState(undefined);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
      }}
      className={styles.wrapper}
    >
      {file && "yess"}
      DropArea
      <img src={file} alt="alt" />
    </div>
  );
};

export default DropArea;
