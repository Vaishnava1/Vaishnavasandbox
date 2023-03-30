import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Input(props) {
  const { type = "text", label = "Label" } = props;
  const [focused, setFocused] = useState(false);
  const [filled, setfilled] = useState(false);
  const edgecase =
    (focused && filled) || (focused && !filled) || (!focused && filled);

  return (
    <div>
      <motion.label
        style={labelstyle}
        initial={{ y: 22 }}
        animate={{
          y: edgecase ? 8 : 22,
          scale: edgecase ? 0.75 : 1,
          color: edgecase ? "#0000FF" : "#444"
        }}
      >
        {label}{" "}
      </motion.label>
      <motion.input
        type={type}
        style={inputstyle}
        onChange={(e) =>
          e.target.value !== "" ? setfilled(true) : setfilled(false)
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        whileHover={{
          background: "#B1D4E0",
          cursor: "pointer"
        }}
      />
    </div>
  );
}

const labelstyle = {
  position: "absolute",
  marginLeft: 15,
  fontSize: 16,
  fontFamily: "Roboto-ExtraBold",
  color: "#0000FF"
};
const inputstyle = {
  width: "95%",
  padding: "12px 20px",
  margin: "10px 0",
  display: "inline-block",
  background: "#e3e2e3",
  border: "none",
  borderRadius: "4px 4px 0 0",
  boxSizing: "border-box",
  fontsize: 16,
  fontFamily: "Roboto-Regular",
  borderBottom: "2px solid {focused ? '#0000FF' : '#e3e2e3'}"
};
