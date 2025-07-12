function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="你好，世界!">你好</AlertButton>
      <AlertButton message="React is awesome!">React</AlertButton>
    </div>
  );
}
