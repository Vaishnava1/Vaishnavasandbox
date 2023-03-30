import "./styles.css";
import Input from "./input.js";
import RadioGroup from "./radiogroup";

export default function App() {
  return (
    <div className="App">
      <Input />
      <RadioGroup groupName="number" Values={["1", "2", "3"]} />
    </div>
  );
}
