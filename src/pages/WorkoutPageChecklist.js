import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import LoadTemplatePopup from "../components/LoadTemplatePopup";
import PortalPopup from "../components/PortalPopup";


const WorkoutPageChecklist = () => {
  const navigate = useNavigate();
  const [isLoadTemplatePopupOpen, setLoadTemplatePopupOpen] = useState(true);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const [userGoalData, setUserGoalData] = useState({});

  useEffect(() => {
    const storedUserGoalData = sessionStorage.getItem("userGoalData");
    if (storedUserGoalData) {
      setUserGoalData(JSON.parse(storedUserGoalData));
    }
  }, []);

  const dailyGoal = `${userGoalData.dailyGoal || ''}`; 

  const onTemplateLoad = (loadedExercises) => {
    setLoadedExercises(loadedExercises);
  };

  const openLoadTemplatePopup = useCallback(() => {
    setLoadTemplatePopupOpen(true);
  }, []);

  const closeLoadTemplatePopup = useCallback(() => {
    setLoadTemplatePopupOpen(false);
  }, []);

  // This arrangement can be altered based on how we want the date's format to appear.
let date = new Date().toLocaleDateString();

  return (
    <div className="w-full relative h-[844px] text-left text-[28px] text-colors-neutral-white font-inter">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
      <img
        className="absolute h-[47.87%] w-[83.85%] top-[28.79%] right-[8.21%] bottom-[23.34%] left-[7.95%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/long-term-goals2.svg"
      />
      <div className="absolute h-[4.98%] w-[46.92%] top-[23.46%] left-[7.95%] inline-block">
        WORKOUT:
      </div>
      <img
        className="absolute h-[7.23%] w-[52.82%] top-[0.47%] right-[20.77%] bottom-[92.3%] left-[26.41%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-main-screen@2x.png"
      />
      <div className="absolute h-[20%] w-[78.46%] top-[5.17%] right-[10.77%] bottom-[74.64%] left-[10.77%] text-left">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-64.svg"
        />
        <div className="absolute top-[50px] left-[26px] inline-block w-[400px] h-[30px]">{date}</div>
        <div className="absolute top-[85px] left-[65px] inline-block w-[400px] h-[30px]">{dailyGoal}</div>
      </div>

      <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[3.91%] w-[38.21%] top-[79%] right-[50%] bottom-[35.31%] left-[30%]"
          onClick={openLoadTemplatePopup}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-deepskyblue-200 z-10 overflow-y-auto" />
          <b className="absolute h-[78.79%] w-[90.6%] top-[12.12%] left-[5.37%] text-mini inline-block font-poppins text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center z-10">
            Load Template
          </b>
          </button>

      <div className="absolute h-[3.44%] w-[7.44%] top-[15.52%] right-[74.87%] bottom-[81.04%] left-[17.69%] rounded-[50%] bg-colors-neutral-white" />
      <div className="absolute h-[2.25%] w-[4.87%] top-[16.11%] right-[76.15%] bottom-[81.64%] left-[18.97%] rounded-[50%] bg-deepskyblue-200" />
      <div className="absolute h-[1.3%] w-[2.82%] top-[16.59%] right-[77.18%] bottom-[82.11%] left-[20%] rounded-[50%] bg-colors-neutral-white" />

      <img
        className="absolute h-[4.15%] w-[8.21%] top-[2.61%] right-[83.59%] bottom-[93.25%] left-[8.21%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        alt=""
        src="/back-button51.svg"
        onClick={onBackButtonIconClick}
      />

      {isLoadTemplatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoadTemplatePopup}
        >
          <LoadTemplatePopup onClose={closeLoadTemplatePopup} onTemplateLoad={onTemplateLoad} />
        </PortalPopup>
      )}

    </div>
  );
};

export default WorkoutPageChecklist;
