import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  //JSX = html + js
  const name = "eric";
  const testObj = { name: "eric", channel: "hoidanit" };

  //template
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MyComponent />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
