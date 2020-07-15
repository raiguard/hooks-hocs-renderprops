import React, { useEffect, useState } from "react";

export default (props) => {
  let [username, setUsername] = useState(""),
    [count, setCount] = useState(0);

  // empty dependency array simulates a componentDidMount()
  useEffect(() => {
    setUsername("Rai");
  }, []);

  // items in the dependency array will be "watched" and useEffect() will fire whenever those change
  // unlike componentDidMount, this also fires the first time a component is loaded. watch out for that!
  useEffect(() => {
    console.log("Count updated");
  }, [count]);

  return (
    <div>
      <h1>
        Hello, {username}, your count is {count}
      </h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={() => setCount(count - 1)}>Count Down</button>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
    </div>
  );
};
