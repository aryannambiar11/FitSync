import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import UpdateGoalPopUp from "../components/UpdateGoalPopUp";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const GoalPageRefined = () => {
  const [isUpdateGoalPopUpOpen, setUpdateGoalPopUpOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(""); // Add state for selected goal
  const navigate = useNavigate();

  const storedUnits = localStorage.getItem("units");
  let unit = "";
  if (storedUnits == "kgs") {
    unit = " kg"
  }
  else {
    unit = " lbs"
  }

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const openUpdateGoalPopUp = useCallback(() => {
    setUpdateGoalPopUpOpen(true);
  }, []);

  const closeUpdateGoalPopUp = useCallback(() => {
    setUpdateGoalPopUpOpen(false);
  }, []);

  const [formData, setFormData] = useState({
    goal: "",
    dailyGoal: "",
  });

  // Callback function to handle goal selection
  const handleGoalSelect = useCallback((goal) => {

    let selectedOptionText = "";

    switch (goal) {
      case 'Lose':
        selectedOptionText = "Lose ";
        break;
      case 'Gain':
        selectedOptionText = "Gain ";
        break;
      case 'Maintain':
        selectedOptionText = "Maintain ";
        break;

    }

    setSelectedGoal(goal);
    sessionStorage.setItem("option", selectedOptionText);
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();


    window.sessionStorage.setItem("userGoalData", JSON.stringify(formData));
  }
    , [formData, navigate]);


  return (
    <>
      <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[844px] text-left text-5xl text-colors-neutral-white font-poppins">
        <div className="absolute h-[4.98%] w-[36.15%] top-[43.72%] left-[9.74%] text-black inline-block">
          Daily Goal:
        </div>
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
        <div className="absolute h-[4.15%] w-[30%] top-[2.61%] right-[35.13%] bottom-[93.25%] left-[34.87%] text-center text-black">
          <img
            className="absolute h-full w-[99.91%] top-[0%] right-[0.09%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-41.svg"
          />
          <div className="absolute h-[71.43%] w-full top-[0%] left-[0%] inline-block">
            FitSync
          </div>
        </div>
        <DropdownButton
          className="w-[30.18%] flex flex-col absolute h-[4.38%] top-[24.41%] right-[61.79%] bottom-[71.21%] left-[11.03%]"
          title={selectedGoal || "Select Goal"} // Display selected goal
          variant="dark"
          drop="down"
          value={formData.option}
          onChange={handleChange}
          onSelect={handleGoalSelect} // Call handleGoalSelect when an option is selected
        >
          <Dropdown.Item eventKey="Lose">Lose:</Dropdown.Item>
          <Dropdown.Item eventKey="Gain">Gain:</Dropdown.Item>
          <Dropdown.Item eventKey="Maintain">Maintain:</Dropdown.Item>
        </DropdownButton>

        <img
          className="absolute h-[7.23%] w-[75.38%] top-[51.78%] right-[13.59%] bottom-[41%] left-[11.03%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/long-term-goals1.svg"
        />
        <img
          className="absolute h-[7.23%] w-[52.82%] top-[0.47%] right-[23.85%] bottom-[92.3%] left-[23.33%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/logo-main-screen@2x.png"
        />
        <div className="absolute h-[4.98%] w-[36.15%] top-[18.96%] left-[11.03%] text-13xl inline-block">
          GOAL
        </div>
        <div className="absolute h-[4.5%] w-[56.67%] top-[24.90%] left-[85.33%] text-xl inline-block">{unit}</div>

        <div className="absolute h-[4.98%] w-[61.03%] top-[45.73%] left-[11.03%] text-13xl inline-block">
          DAILY GOAL
        </div>
        <img
          className="absolute h-[4.15%] w-[10.77%] top-[3.08%] right-[85.13%] bottom-[92.77%] left-[4.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
          alt=""
          src="/back-button4.svg"
          onClick={onBackButtonIconClick}
        />
        <input
          className="[border:none] [outline:none] font-poppins text-xl bg-[transparent] absolute h-[3.79%] w-[51.28%] top-[53.55%] left-[14.36%] text-dimgray-500 text-left inline-block"
          placeholder="Press Here to Type"
          type="text"
          name="dailyGoal"
          value={formData.dailyGoal}
          onChange={handleChange}
        />
        <div className="absolute h-[4.62%] w-[10%] top-[60.55%] right-[78.97%] bottom-[34.83%] left-[11.03%] rounded-[50%] bg-deepskyblue-200" />
        <img
          className="absolute h-[3.55%] w-[7.44%] top-[61.14%] right-[80.26%] bottom-[35.31%] left-[12.31%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ellipse-151@2x.png"
        />
        <div className="absolute h-[4.5%] w-[56.67%] top-[60.66%] left-[23.33%] text-xl inline-block">{`Suggestion: `}</div>
        <div className="absolute h-[4.15%] w-[42.05%] top-[63.86%] left-[23.33%] text-base inline-block">
          “Focus on Cardio”
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[5.28%] w-[47.44%] top-[79.27%] right-[29.23%] bottom-[15.45%] left-[23.33%]"
          onClick={handleSubmit}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-58.svg"
          />
          <b className="absolute h-[75.11%] w-4/5 top-[13.23%] left-[8.81%] text-3xl inline-block font-poppins text-colors-neutral-white text-center">
            CONFIRM
          </b>
        </button>
        <div className="absolute h-[4.38%] w-[38.46%] top-[24.64%] right-[21.54%] bottom-[70.97%] left-[45%] bg-black box-border border-[1px] border-solid border-colors-neutral-white" />
        <input
          className="[border:none] [outline:none] font-poppins text-xl bg-[transparent] absolute h-[3.79%] w-[38.21%] top-[24.76%] left-[46.79%] text-dimgray-600 text-left inline-block"
          placeholder="Weight"
          type="number"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        />
      </div>

    </>
  );
};

export default GoalPageRefined;