import { useState } from "react";
export default function Form() {
  const [to, setTo] = useState("齐天大圣");
  const [message, setMessage] = useState("你是我的英雄");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`发送给${to}的消息是：${message}`);
    }, 5000);
  }

  const blockStyle = {
    display: "block",
    margin: "10px 0",
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        To: {""}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="齐天大圣">齐天大圣</option>
          <option value="小猪妖">小猪妖</option>
        </select>
      </label>
      <textarea
        style={blockStyle}
        placeholder="说点什么吧"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">发送</button>
    </form>
  );
}
