function Button({ onClickForBtn, children }) {
  return <button onClick={onClickForBtn}>{children}</button>;
}

export default function Toobar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClickForBtn={onPlayMovie}>play movie</Button>
      <Button onClickForBtn={onUploadImage}>upload image</Button>
    </div>
  );
}
