import React, { useState } from "react";
import "./index.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export const Input = ({
  type,
  icon,
  placeholder,
  width,
  backgroundColor,
  fileFontColor,
}) => {
  const [uploaded, setUploaded] = useState(false);
  if (type === "text") {
    return (
      <div className={`TextInput`}>
        {icon}
        <input
          className={type}
          type={type}
          placeholder={placeholder}
          style={{ width: width, backgroundColor: backgroundColor }}
        />
      </div>
    );
  } else if (type === "password") {
    return (
      <div className={`PasswordInput`}>
        {icon}
        <input
          className={type}
          type={type}
          placeholder={placeholder}
          style={{ width: width, backgroundColor: backgroundColor }}
        />
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className={`CheckboxInput`}>
        <input className={type} type={type} />
      </div>
    );
  } else if (type === "email") {
    return (
      <div className={`EmailInput`}>
        {icon}
        <input
          className={type}
          type={type}
          placeholder={placeholder}
          style={{ width: width, backgroundColor: backgroundColor }}
        />
      </div>
    );
  } else if (type === "file") {
    return (
      <div className={`FileInput`}>
        <label
          className="file-label"
          style={{
            backgroundColor:
              backgroundColor === Input.defaultProps.backgroundColor
                ? "#29313d"
                : backgroundColor,
            color: fileFontColor,
          }}
        >
          {icon ||
            (!uploaded ? (
              <AiOutlineCloudUpload
                color={fileFontColor}
                style={{ transform: "scale(1.5)" }}
              />
            ) : (
              <TiTick
                color={fileFontColor}
                style={{ transform: "scale(1.3)" }}
              />
            ))}
          {placeholder === Input.defaultProps.placeholder
            ? !uploaded
              ? "Upload"
              : "Uploaded"
            : placeholder}
          <input className={type} type={type} onChange={setUploaded} />
        </label>
      </div>
    );
  }
};

Input.defaultProps = {
  type: "text",
  placeholder: "Start Typing...",
  width: "500px",
  backgroundColor: "#ffffff",
  fileFontColor: "#ffffff",
};
