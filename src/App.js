import { useState } from "react";
import "./index.css";
import Content from "./components/Content";

function App() {
  let [status, setStatus] = useState(false);
  let [selected, setSelected] = useState("");

  let linkStyles = {
    opacity: status ? "1" : "0",
    transform: status ? `translateX(0px)` : `translateX(-100px)`,
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <div
            className="circle"
            onClick={() => {
              setStatus(!status);
              setSelected("");
            }}
          ></div>
          <div className="links" style={linkStyles}>
            <h4
              onClick={() => {
                setSelected("works");
              }}
            >
              WORKS
            </h4>
            <h4
              onClick={() => {
                setSelected("about");
              }}
            >
              ABOUT
            </h4>
            <h4
              onClick={() => {
                setSelected("contact");
              }}
            >
              CONTACT
            </h4>
          </div>
        </header>
        {selected === "works" && <Content text="works" />}
        {selected === "about" && <Content text="about" />}
        {selected === "contact" && <Content text="contact" />}
      </div>

      {/* {selected === "works" && <Content text="works" />}
      {selected === "about" && <Content text="about" />}
      {selected === "contact" && <Content text="contact" />} */}
    </div>
  );
}

export default App;
