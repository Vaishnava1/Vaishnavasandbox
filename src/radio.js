import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Radio(props) {
  const {
    groupName = "group",
    value = "Value",
    defaultChecked = false
  } = props;
  return (
    <div>
      <label>{value}</label>
      <input
        type="radio"
        name={groupName}
        value={value}
        defaultChecked={defaultChecked}
      />
    </div>
  );
}
