export default function Button() {
  function handleClick() {
    alert("你点击了我!");
  }

  return <button onClick={handleClick}>点我</button>;
}
