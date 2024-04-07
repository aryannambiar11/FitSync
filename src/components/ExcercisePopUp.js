import React, { useState } from "react";

const ExercisePopup = ({ onClose }) => {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  // Increment the value of sets
  const incrementSets = () => {
    setSets((prevSets) => prevSets + 1);
  };

  // Decrement the value of sets
  const decrementSets = () => {
    setSets((prevSets) => (prevSets > 0 ? prevSets - 1 : 0));
  };

  // Increment the value of repetitions
  const incrementReps = () => {
    setReps((prevReps) => prevReps + 1);
  };

  // Decrement the value of repetitions
  const decrementReps = () => {
    setReps((prevReps) => (prevReps > 0 ? prevReps - 1 : 0));
  };

  // Close handler
  const handleClose = () => {
    if (onClose) {
      onClose(); // If you have a passed onClose function to call
    }
  };

  // Save handler
  const handleSave = () => {
    const newExerciseData = {
      name: document.getElementById("exercise-name").value,
      sets: sets,
      reps: reps,
      minutes: parseInt(document.getElementById("time-minutes").value) || 0,
      seconds: parseInt(document.getElementById("time-seconds").value) || 0,
    };
  
    // Get the current exercises from sessionStorage, or initialize an empty array if none exist
    const currentExercises = JSON.parse(sessionStorage.getItem('exerciseData')) || [];
    
    // Add the new exercise data to the current exercises array
    currentExercises.push(newExerciseData);
    
    // Save the updated exercises array to sessionStorage
    sessionStorage.setItem('exerciseData', JSON.stringify(currentExercises));
    //mine
    window.dispatchEvent(new Event('storageChange'));
    // Close the popup
    onClose();
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

          .time-inputs {
            display: flex; /* This will align children horizontally */
            align-items: center; /* This will vertically center align children */
          }
          
          .time-input {
            background: #000;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 10px;
            color: white;
            margin: 0 5px; /* This adds some space between the inputs and the colon */
            width: 50px; /* Adjust the width as needed */
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
                type="text"
                value={sets}
                onChange={(e) =>
                  setSets(Math.max(0, parseInt(e.target.value) || 0))
                }
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
                type="text"
                value={reps}
                onChange={(e) =>
                  setReps(Math.max(0, parseInt(e.target.value) || 0))
                }
                placeholder="Type Here"
              />
              <button onClick={incrementReps}>+</button>
            </div>
          </div>
          <div className="exercise-field">
            <label htmlFor="time">Time:</label>
            <div className="time-inputs flex items-center justify-center">
              <input
                id="time-minutes"
                type="number"
                className="time-input bg-black text-white border-1 border-white rounded p-2"
                placeholder="min"
                // other props such as value and onChange handler
              />
              <span className="mx-2 text-white">:</span>
              <input
                id="time-seconds"
                type="number"
                className="time-input bg-black text-white border-1 border-white rounded p-2"
                placeholder="sec"
                // other props such as value and onChange handler
              />
            </div>
          </div>
          <div className="popup-buttons">
            <button className="button cancel-button" onClick={handleClose}>
              Cancel
            </button>
            <button className="button save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisePopup;
