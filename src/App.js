import React, {useState, useEffect} from 'react';
import classes from './App.module.css';

function App() {

  const [time, setTime] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date())
      }, 1000);
      return () => clearInterval(timer);
    },[]);

  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>Digital Clock</h1>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <h2 className={classes.clock}>
            {time.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;

