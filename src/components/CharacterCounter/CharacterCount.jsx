import { useCharacterCounterStore } from "../../store/characterCounter/characterCounterStore";

export function CharacterCount() {
  const { charactersCounter } = useCharacterCounterStore();

  return <>Character Count: {charactersCounter()}</>;
}
