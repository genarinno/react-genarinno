import React, { useState, useEffect, useRef } from 'react';

const Dummy = ({funcCounter, initialState }) => {

  const [counter, setCounter] = [initialState, funcCounter];

  return (
    <div>
      <h1>Dummy: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>CHANGE</button>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Dummy  initialState={counter} funcCounter={setCounter} />
      <Dummy  initialState={counter} funcCounter={setCounter} />
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>COUNT++</button>
    </div>
  );
};

export default App;
