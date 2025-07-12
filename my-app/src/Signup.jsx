export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("提交表单！");
      }}
    >
      <input type="text" />
      <button>发送</button>
    </form>
  );
}
