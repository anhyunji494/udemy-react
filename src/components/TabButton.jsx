export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log("handle Click");
  }

  return (
    <li>
      <button onClick={onSelect}> {children} </button>
    </li>
  );
}
