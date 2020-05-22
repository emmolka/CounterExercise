import React, { useState, useEffect } from "react";
import { StyledDiv, StyledColumn } from "./style";
import Button from "../button";
import Input from "../input";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    if (counter === 0) {
      setText("");
    } else if (counter % 5 === 0 && counter % 15 !== 0) {
      setText("Fizz");
    } else if (counter % 15 === 0) {
      setText("Buzz");
    } else {
      setText("");
    }

    return () => clearInterval(interval);
  }, [counter]);

  const increment = () => {
    setCounter(counter - 1);
  };

  const decrement = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <StyledDiv>
        <Button text={"+"} onClick={decrement} />
        {counter}
        <Button text={"-"} onClick={increment} />
      </StyledDiv>
      <StyledDiv>
        <StyledColumn>
          <p>{text}</p>
          <Input
            onChange={e => {
              if (parseInt(e.target.value)) {
                setCounter(parseInt(e.target.value));
              }
            }}
          />
        </StyledColumn>
      </StyledDiv>
    </>
  );
};

export default Counter;
