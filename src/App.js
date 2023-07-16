import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <div className="left-content-container"> 
          <Content />
        </div>
        <div className="right-content-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
