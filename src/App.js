import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="markdown-container">
        <div className="nav-container">
          <div className="container-name">
            <h2>Editor</h2>
          </div>
          <div className="nav-buttons">
            <button type="button" className="nav-button">
              <FontAwesomeIcon icon={faRotateRight} className="nav-icon" />
            </button>
            <button type="button" className="nav-button">
              <FontAwesomeIcon icon={faCopy} className="nav-icon" />
            </button>
            <button type="button" className="nav-button">
              <FontAwesomeIcon icon={faFloppyDisk} className="nav-icon" />
            </button>
          </div>
        </div>
        <div className="input-container">
          <textarea className="textinput"></textarea>
        </div>
      </div>
      <div className="preview-container">
        <div className="nav-container">
          <div className="container-name">
            <h2>Preview</h2>
          </div>
        </div>
        <div className="preview"></div>
      </div>
    </div>
  );
}

export default App;
