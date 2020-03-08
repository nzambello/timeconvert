import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./photon-extension-kit.css";
import "./App.css";

const parseTime = time => {
  const parsed = parseInt(time, 10);
  if (isNaN(parsed)) return 0;
  return parsed;
};

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.getElementById("hours").focus();
  }, []);

  const result = Number.parseFloat(hours + minutes / 60 + seconds / (60 * 60));
  const parsedResult = result > 0 ? result.toPrecision(4) : 0;

  return (
    <div className="App">
      <h1>Convert time to h</h1>
      <div className="browser-style">
        <input
          id="hours"
          type="text"
          value={hours}
          onChange={e => setHours(parseTime(e.target.value, 10))}
        />
        <input
          id="minutes"
          type="text"
          value={minutes}
          onChange={e => setMinutes(parseTime(e.target.value, 10))}
        />
        <input
          id="seconds"
          type="text"
          value={seconds}
          onChange={e => setSeconds(parseTime(e.target.value, 10))}
        />
      </div>
      <br />
      <div className="browser-style">
        <CopyToClipboard text={parsedResult} onCopy={() => setCopied(true)}>
          <button className="browser-style default">
            <span>{parsedResult} h</span>
          </button>
        </CopyToClipboard>
        {copied ? <p style={{ color: "green" }}>Copied.</p> : null}
      </div>
    </div>
  );
};

export default App;
