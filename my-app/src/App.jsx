import "./App.css";
import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";

function App() {
  return (
    <>
      <FancyText title text="励志语录" />
      <InspirationGenerator>
        <Copyright year={2025} />
      </InspirationGenerator>
    </>
  );
}

export default App;
