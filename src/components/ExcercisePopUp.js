import React, { useState } from 'react';

const ExercisePopup = ({ onClose }) => {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  // Increment the value of sets
  const incrementSets = () => {
    setSets(prevSets => prevSets + 1);
  };

  // Decrement the value of sets
  const decrementSets = () => {
    setSets(prevSets => (prevSets > 0 ? prevSets - 1 : 0));
  };

  // Increment the value of repetitions
  const incrementReps = () => {
    setReps(prevReps => prevReps + 1);
  };

  // Decrement the value of repetitions
  const decrementReps = () => {
    setReps(prevReps => (prevReps > 0 ? prevReps - 1 : 0));
  };

  // Close handler
  const handleClose = () => {
    if (onClose) {
      onClose(); // If you have a passed onClose function to call
    }
  };

  // Save handler
  const handleSave = () => {
    // Perform save operations here
    if (onClose) {
      onClose(); // If you have a passed onClose function to call
    }
  };

  return (
    <>
      <style>
        {`
          .exercise-popup {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.75);
          }

          .exercise-popup-content {
            background: #000;
            border-radius: 10px;
            padding: 20px;
            width: 300px;
            color: white;
          }

          .exercise-field {
            margin-bottom: 15px;
          }

          .exercise-field label {
            display: block;
            margin-bottom: 5px;
          }

          .exercise-field input, .time-inputs input {
            background: #000;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 10px;
            color: white;
          }

          .exercise-field input {
            width: calc(100% - 22px);
          }

          .time-inputs input {
            width: auto;
            padding: 10px;
            min-width: 50px;
          }

          .counter-controls {
            display: inline-flex;
            align-items: center;
          }

          .counter-controls button {
            background: #000;
            border: 1px solid #fff;
            color: white;
            margin: 0 5px;
            padding: 5px 10px;
            cursor: pointer;
          }

          .time-inputs span {
            display: inline-block;
          }

          .popup-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
          }

          .button {
            border: none;
            border-radius: 5px;
            color: white;
            padding: 10px 20px;
            cursor: pointer;
            width: 100px;
          }

          .cancel-button {
            background: red;
          }

          .save-button {
            background: green;
          }
        `}
      </style>
      <div className="exercise-popup">
        <div className="exercise-popup-content">
          <div className="exercise-field">
            <label htmlFor="exercise-name">Exercise Name:</label>
            <input id="exercise-name" placeholder="Press Here to Type" />
          </div>
          <div className="exercise-field">
            <label htmlFor="sets">Sets:</label>
            <div className="counter-controls">
              <button onClick={decrementSets}>-</button>
              <input 
                id="sets" 
                type="number" 
                value={sets} 
                onChange={(e) => setSets(Math.max(0, parseInt(e.target.value) || 0))}
                placeholder="Type Here" 
              />
              <button onClick={incrementSets}>+</button>
            </div>
          </div>
          <div className="exercise-field">
            <label htmlFor="repetitions">Repetitions:</label>
            <div className="counter-controls">
              <button onClick={decrementReps}>-</button>
              <input 
                id="repetitions" 
                type="number" 
                value={reps} 
                onChange={(e) => setReps(Math.max(0, parseInt(e.target.value) || 0))}
                placeholder="Type Here" 
              />
              <button onClick={incrementReps}>+</button>
            </div>
          </div>
          <div className="exercise-field">
            <label htmlFor="time">Time:</label>
            <div className="time-inputs">
              <input id="time-minutes" placeholder="min" />
              <span>:</span>
              <input id="time-seconds" placeholder="sec" />
            </div>
          </div>
          <div className="popup-buttons">
            <button className="button cancel-button" onClick={handleClose}>Cancel</button>
            <button className="button save-button" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisePopup;
