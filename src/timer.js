import React from 'react';

function Timer() {
    return (<div className="timer">
                <div className="hour">
                     <div className="num">00</div>
                     <div className="text">Hour</div>  
                </div>
                <div className="double">:</div>
                <div className="minute">
                     <div className="num">30</div>
                     <div className="text">Minute</div>  
                </div>
                <div className="double">:</div>
                <div className="second">
                     <div className="num">00</div>
                     <div className="text">Second</div>  
                </div>
            </div>
    );
  }
  
  export default Timer;
  
