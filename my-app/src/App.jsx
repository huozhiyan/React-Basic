import "./App.css";
import Toolbar from "./Toolbar";

function App() {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert("Playing")}
        onUploadImage={() => alert("Uploading")}
      ></Toolbar>
    </>
  );
}

export default App;
