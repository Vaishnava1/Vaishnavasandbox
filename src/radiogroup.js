import "./styles.css";
import { useState } from "react";
import Radio from "./radio.js";

export default function RadioGroup(props) {
  const { Values = [""], groupName = "group", defaultCheckedIndex = 0 } = props;
  return (
    <div>
      {Values.map((Value, i) => {
        return (
          <Radio
            value={Value}
            groupName={groupName}
            defaultChecked={defaultCheckedIndex === i}
          />
        );
      })}
    </div>
  );
}
