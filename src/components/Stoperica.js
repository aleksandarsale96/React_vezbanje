import React from "react";
import Button from "react-bootstrap/Button";

export default function Stoperica() {
    const [time, setTime] = React.useState(0);
    const [start, setStart] = React.useState(false);
    
    React.useEffect(() => {
        if (!start) return;
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [start]);
    const startTimer = () => setStart(prevStart => !prevStart)

    function resetTimer() {
        
        setTime(0);
    }
    function reverseTimer() {
        const intervalReverse = setInterval(() => {
            setTime(prevTime => prevTime - 1);

        }, 1000);
    }
    

    return (
        <div className="container-fluid">
            <div id="time">{time}</div>
            <Button
              variant="primary"
              size="lg"
              block="block"
              type="button"
              className="mt-4 create-edit-btn"
              onClick={startTimer}
            >
              {start ? "Stop" : "Start"}
              </Button>
              <Button
              variant="danger"
              size="lg"
              block="block"
              type="button"
              className="mt-4 create-edit-btn"
              onClick={resetTimer}
            >
              Reset
              </Button>
              <Button
              variant="danger"
              size="lg"
              block="block"
              type="button"
              className="mt-4 create-edit-btn"
              onClick={reverseTimer}
            >
              Reverse
              </Button>
        </div>
    )
}