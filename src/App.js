import React, {useState, useEffect} from 'react';
import './App.css';

const parseTime = time => {
  const parsed = parseInt(time, 10);
  if (isNaN(parsed)) return 0;
  return parsed;
};

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    document.getElementById('hours').focus();
  }, []);

  const result = hours + minutes / 60 + seconds / (60 * 60);

  return (
    <div className="App">
      <div>
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
      <div>
        <pre>{result} h</pre>
      </div>
    </div>
  );
};

export default App;
