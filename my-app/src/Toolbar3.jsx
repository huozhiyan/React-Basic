function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar3() {
  return (
    <div
      onClick={() => {
        alert("你点击了 Toolbar3！");
      }}
    >
      <Button onClick={() => alert("正在播放！")}>播放电影</Button>
      <Button onClick={() => alert("正在上传！")}>上传图片</Button>
    </div>
  );
}
