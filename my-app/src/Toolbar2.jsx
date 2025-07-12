function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`正在播放电影: ${movieName}`);
  }

  return <button onClick={handlePlayClick}>播放 {movieName}</button>;
}

function UploadButton() {
  return <Button onClick={() => alert("正在上传！")}>上传图片</Button>;
}

export default function Toolbar2() {
  return (
    <div>
      <PlayButton movieName="让子弹飞"></PlayButton>
      <UploadButton></UploadButton>
    </div>
  );
}
