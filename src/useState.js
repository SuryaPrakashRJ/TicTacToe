import { useState } from 'react';

function UseState() {
  return (
    <div className="text-3xl text-orange-900 text-center">
     <h1>Hello World</h1>
     <MyButton/>

    </div>
  );
}

function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  function handleReset(){
    setCount(0);
  }

  return(
    <div className=' space-x-5'>
      <button onClick={handleClick}>
      You have clicked {count} time
    </button>

    <button onClick={handleReset}>
      Reset

    </button>

    </div>
    
  )
}

export default UseState;
