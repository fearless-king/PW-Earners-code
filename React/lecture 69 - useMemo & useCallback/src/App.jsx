import { useCallback, useMemo, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function calculateTotalSum() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [count, setCount] = useState(0);
  const value = useMemo(() => {
    console.log("use memo");
    return calculateTotalSum();
  }, []);

  // function printHello() {
  //   // re create on every re render with new reference
  //   console.log("hii hello jii");
  // }

  // function printHello2() {
  //   console.log("hii hello jii");
  // }

  // console.log(printHello == printHello2);

  const memoizedPrintHello = useCallback(() => {
    console.log("hii hello jii"); 
  }, []);

  let obj = {
    count: 53,
    printHello: memoizedPrintHello,
  };


  return (
    <div>
      <p>Value : {count}</p>
      <button onClick={() => setCount((p) => p + 1)}>Click</button>
      <p>Total sum : {value}</p>
      {/* <ChildComponent count={count} /> */}
      <ChildComponent {...obj} />
    </div>
  );
}
export default App;
