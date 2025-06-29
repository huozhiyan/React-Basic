export default function TodoList() {
  const person = {
    name: "海蒂·拉玛",
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    theme: {
      backgroundColor: "orange",
      color: "white",
      borderRadius: "10px",
      padding: "10px",
    },
    todolist: ["发明一种新式交通信号灯", "排练一个电影场景", "改进频谱技术"],
  };
  return (
    <div style={person.theme}>
      <h1>{person.name}的待办事项</h1>
      <img
        src={person.avatar}
        alt="Hedy Lamarr"
        className="photo"
        style={{ width: "200px", borderRadius: "10px" }}
      />
      <ul>
        <li>{person.todolist[0]}</li>
        <li>{person.todolist[1]}</li>
        <li>{person.todolist[2]}</li>
      </ul>
    </div>
  );
}
