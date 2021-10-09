import { useCharacterCounterStore } from "../../store/characterCounter/characterCounterStore";

export function TextInput() {
  const { inputText, setText } = useCharacterCounterStore();

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <br />
      Echo: {inputText}
    </div>
  );
}
