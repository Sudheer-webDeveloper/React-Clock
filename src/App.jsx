import "./App.scss";

import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  },[time]);


  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <h2>{hours < 10 ? `0${hours}` : hours } : {minutes < 10 ? `0${minutes}` : minutes }  : {seconds < 10 ? `0${seconds}` : seconds } </h2>
  )
};

export default App;
