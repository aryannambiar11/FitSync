import { useState, useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import moment from 'moment';
import ExcercisePopUp from "../components/ExcercisePopUp";
import PortalPopup from "../components/PortalPopup";
import LoadTemplatePopup from "../components/LoadTemplatePopup";
import NameTemplatePopup from "../components/NameTemplatePopup";
import PopUpPlanks from "../components/PopUpPlanks";
import BurpeesPopup from "../components/BurpeesPopup";
import StairsPopup from "../components/StairsPopup";
import SitUpsPopup from "../components/SitUpsPopup";
import { useNavigate } from "react-router-dom";

const RefinedPlanPage1Before = () => {
  const [isExcercisePopUpOpen, setExcercisePopUpOpen] = useState(false);
  const [isExcercisePopUp1Open, setExcercisePopUp1Open] = useState(false);
  const [isExcercisePopUp2Open, setExcercisePopUp2Open] = useState(false);
  const [isExcercisePopUp3Open, setExcercisePopUp3Open] = useState(false);
  const [isExcercisePopUp4Open, setExcercisePopUp4Open] = useState(false);
  const [isLoadTemplatePopupOpen, setLoadTemplatePopupOpen] = useState(false);
  const [isNameTemplatePopupOpen, setNameTemplatePopupOpen] = useState(false);
  const [isPopUpPlanksOpen, setPopUpPlanksOpen] = useState(false);
  const [isPopUpPlanks1Open, setPopUpPlanks1Open] = useState(false);
  const [isBurpeesPopupOpen, setBurpeesPopupOpen] = useState(false);
  const [isStairsPopupOpen, setStairsPopupOpen] = useState(false);
  const [isSitUpsPopupOpen, setSitUpsPopupOpen] = useState(false);
  const [loadedExercises, setLoadedExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const savedExercises = sessionStorage.getItem('exerciseData');
      if (savedExercises) {
        setLoadedExercises(JSON.parse(savedExercises));
      }
    };

    // Event listener for custom storage change event
    window.addEventListener('storageChange', handleStorageChange);

    // Manually call handleStorageChange to load exercises on mount
    handleStorageChange();

    // Cleanup
    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
  }, []);

  const [date, setDate] = useState(() => {
    const savedDate = sessionStorage.getItem('selectedDate');
    return savedDate ? moment(savedDate) : moment();
  });

  useEffect(() => {
    sessionStorage.setItem('selectedDate', date.format('YYYY-MM-DD'));
  }, [date]);

  const handleDateChange = (value) => {
    setDate(value);
  };

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onProfileButtonPlanWorkoutClick = useCallback(() => {
    navigate("/profile-page-refined");
  }, [navigate]);

  const openExcercisePopUp = useCallback(() => {
    setExcercisePopUpOpen(true);
  }, []);

  const closeExcercisePopUp = useCallback(() => {
    setExcercisePopUpOpen(false);
  }, []);

  const openExcercisePopUp1 = useCallback(() => {
    setExcercisePopUp1Open(true);
  }, []);

  const closeExcercisePopUp1 = useCallback(() => {
    setExcercisePopUp1Open(false);
  }, []);

  const openExcercisePopUp2 = useCallback(() => {
    setExcercisePopUp2Open(true);
  }, []);

  const closeExcercisePopUp2 = useCallback(() => {
    setExcercisePopUp2Open(false);
  }, []);

  const openExcercisePopUp3 = useCallback(() => {
    setExcercisePopUp3Open(true);
  }, []);

  const closeExcercisePopUp3 = useCallback(() => {
    setExcercisePopUp3Open(false);
  }, []);

  const openExcercisePopUp4 = useCallback(() => {
    setExcercisePopUp4Open(true);
  }, []);

  const closeExcercisePopUp4 = useCallback(() => {
    setExcercisePopUp4Open(false);
  }, []);

  const openLoadTemplatePopup = useCallback(() => {
    setLoadTemplatePopupOpen(true);
  }, []);

  const closeLoadTemplatePopup = useCallback(() => {
    setLoadTemplatePopupOpen(false);
  }, []);

  // Define the onTemplateLoad function
  const onTemplateLoad = (loadedExercises) => {
    setLoadedExercises(loadedExercises);
  };

  const handleSaveTemplate = (loadedExercises) => {
    setLoadedExercises(loadedExercises)
  }

  const openNameTemplatePopup = useCallback(() => {
    setNameTemplatePopupOpen(true);
  }, []);

  const closeNameTemplatePopup = useCallback(() => {
    setNameTemplatePopupOpen(false);
  }, []);

  const openPopUpPlanks1 = useCallback(() => {
    setPopUpPlanks1Open(true);
  }, []);

  const closePopUpPlanks1 = useCallback(() => {
    setPopUpPlanks1Open(false);
  }, []);

  const openPopUpPlanks = useCallback(() => {
    setPopUpPlanksOpen(true);
  }, []);

  const closePopUpPlanks = useCallback(() => {
    setPopUpPlanksOpen(false);
  }, []);

  const openBurpeesPopup = useCallback(() => {
    setBurpeesPopupOpen(true);
  }, []);

  const closeBurpeesPopup = useCallback(() => {
    setBurpeesPopupOpen(false);
  }, []);

  const openStairsPopup = useCallback(() => {
    setStairsPopupOpen(true);
  }, []);

  const closeStairsPopup = useCallback(() => {
    setStairsPopupOpen(false);
  }, []);

  const openSitUpsPopup = useCallback(() => {
    setSitUpsPopupOpen(true);
  }, []);

  const closeSitUpsPopup = useCallback(() => {
    setSitUpsPopupOpen(false);
  }, []);
 
  
  return (
    <>
      <div className="w-full relative h-[844px] text-left text-xl text-black font-poppins">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
        <div className="absolute h-[4.98%] w-[49.23%] top-[69.19%] left-[11.03%] text-5xl text-colors-neutral-white inline-block">
          RECOMMENDED:
        </div>
        <DatePicker
          className="absolute h-[4.62%] w-[48.97%] top-[11.02%] right-[10%] bottom-[84.36%] left-[41.03%]"
          size="large"
          value={date}
          onChange={handleDateChange}
          autoFocus={true}
          bordered={true}
          allowClear={false}
        />
         
         <div className="absolute h-[37%] w-[78.97%] top-[23%] right-[10%] bottom-[30%] left-[11.03%] bg-black box-border border-[1px] border-solid border-colors-neutral-white z-10 overflow-y-auto ">
            {loadedExercises.length > 0 ? (
              loadedExercises.map((exercise, index) => (
                <div key={index} className="text-colors-neutral-white text-base mb-2 p-2">
                   {exercise.sets && exercise.reps
                  ? `${exercise.name} ${exercise.sets}x${exercise.reps}`
                  : `${exercise.name} - ${exercise.minutes} m : ${exercise.seconds} s`}

                </div>
              ))
            ) : (
              <div className="text-colors-neutral-black text-base p-2">
                No exercises loaded
              </div>
            )}
          </div>
      
        <img
          className="absolute h-[4.15%] w-[8.21%] top-[1.61%] right-[80%] bottom-[93.25%] left-[11.79%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
          alt=""
          src="/back-button51.svg"
          onClick={onBackButtonIconClick}
        />
        <img
          className="absolute h-[6.75%] w-[13.59%] top-[1.3%] right-[6.41%] bottom-[91.94%] left-[80%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
          alt=""
          src="/profile-button@2x.png"
          onClick={onProfileButtonPlanWorkoutClick}
        />
        <div className="absolute h-[42.54%] w-[78.97%] top-[17.3%] right-[10%] bottom-[40.17%] left-[11.03%] bg-black box-border border-[1px] border-solid border-colors-neutral-white" />
        <div className="absolute h-[2.61%] w-[56.15%] top-[18.36%] left-[23.85%] text-base text-dimgray-500 inline-block">
          <p className="m-0">{`Add Exercise `}</p>
        </div>
        <div className="absolute h-[4.98%] w-[36.15%] top-[10.9%] left-[8.21%] text-13xl text-colors-neutral-white inline-block">
          PLAN :
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[2.84%] w-[6.15%] top-[18.36%] right-[80.51%] bottom-[78.79%] left-[13.33%]"
          onClick={openExcercisePopUp}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200 box-border border-[2px] border-solid border-colors-neutral-white" />
          <div className="absolute h-[7.92%] w-[52.08%] top-[45.83%] right-[23.75%] bottom-[46.25%] left-[24.17%] rounded-12xs bg-colors-neutral-white" />
          <div className="absolute h-[7.92%] w-[52.08%] top-[24.17%] right-[-6.25%] bottom-[67.92%] left-[54.17%] rounded-12xs bg-colors-neutral-white [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </button>
        <div className="absolute h-[4.38%] w-[78.46%] top-[74.17%] right-[10.77%] bottom-[21.45%] left-[10.77%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-66.svg"
            />
            <div className="absolute h-[81.08%] top-[10.81%] left-[calc(50%_-_37px)] inline-block w-[75px]">
              Planks
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[59.46%] w-[7.19%] top-[21.62%] right-[2.29%] bottom-[18.92%] left-[90.52%]"
            onClick={openExcercisePopUp1}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200 box-border border-[2px] border-solid border-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[45.91%] right-[24.09%] bottom-[45.91%] left-[24.09%] rounded-12xs bg-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[24.09%] right-[-5.91%] bottom-[67.73%] left-[54.09%] rounded-12xs bg-black [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </button>
        </div>
        <div className="absolute h-[4.38%] w-[78.46%] top-[80.33%] right-[10.77%] bottom-[15.28%] left-[10.77%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-66.svg"
            />
            <div className="absolute h-[81.08%] top-[10.81%] left-[calc(50%_-_37px)] inline-block w-[75px]">
              Sit Ups
            </div>
          </div>
        </div>
        <div className="absolute h-[9%] w-[78.46%] top-[81.28%] right-[10.77%] bottom-[9.72%] left-[10.77%]">
          <div className="absolute h-[48.68%] w-full top-[51.32%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-66.svg"
            />
            <div className="absolute h-[81.08%] top-[8.11%] left-[calc(50%_-_37px)] inline-block w-[75px]">
              Stairs
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[28.95%] w-[7.19%] top-[0%] right-[2.29%] bottom-[71.05%] left-[90.52%]"
            onClick={openExcercisePopUp2}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200 box-border border-[2px] border-solid border-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[45.91%] right-[24.09%] bottom-[45.91%] left-[24.09%] rounded-12xs bg-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[24.09%] right-[-5.91%] bottom-[67.73%] left-[54.09%] rounded-12xs bg-black [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </button>
        </div>
        <div className="absolute h-[9.12%] w-[78.46%] top-[86.85%] right-[10.77%] bottom-[4.03%] left-[10.77%]">
          <div className="absolute h-[48.05%] w-full top-[51.95%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-66.svg"
            />
            <div className="absolute h-[81.08%] top-[10.81%] left-[calc(50%_-_42px)] inline-block w-[85px]">
              Burpees
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[28.57%] w-[7.19%] top-[62.34%] right-[2.29%] bottom-[9.09%] left-[90.52%]"
            onClick={openExcercisePopUp3}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200 box-border border-[2px] border-solid border-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[45.91%] right-[24.09%] bottom-[45.91%] left-[24.09%] rounded-12xs bg-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[24.09%] right-[-5.91%] bottom-[67.73%] left-[54.09%] rounded-12xs bg-black [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[28.57%] w-[7.19%] top-[0%] right-[2.61%] bottom-[71.43%] left-[90.2%]"
            onClick={openExcercisePopUp4}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200 box-border border-[2px] border-solid border-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[45.91%] right-[24.09%] bottom-[45.91%] left-[24.09%] rounded-12xs bg-black" />
            <div className="absolute h-[8.18%] w-[51.82%] top-[24.09%] right-[-5.91%] bottom-[67.73%] left-[54.09%] rounded-12xs bg-black [transform:_rotate(90deg)] [transform-origin:0_0]" />
          </button>
        </div>
        <img
          className="absolute h-[7.23%] w-[52.82%] top-[1.3%] right-[21.28%] bottom-[91.47%] left-[25.9%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/logo-main-screen@2x.png"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[3.91%] w-[38.21%] top-[60.78%] right-[50%] bottom-[35.31%] left-[11.79%]"
          onClick={openLoadTemplatePopup}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-deepskyblue-200 z-10 overflow-y-auto" />
          <b className="absolute h-[78.79%] w-[90.6%] top-[12.12%] left-[5.37%] text-mini inline-block font-poppins text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center z-10">
            Load Template
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[3.91%] w-[38.21%] top-[60.78%] right-[10%] bottom-[35.31%] left-[51.79%]"
          onClick={openNameTemplatePopup}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-deepskyblue-200 z-10" />
          <b className="absolute h-[78.79%] w-[90.6%] top-[12.12%] left-[5.37%] text-mini inline-block font-poppins text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center z-10" >
            Save Template
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[637px] left-[53px] w-6 h-[13px]"
          onClick={openPopUpPlanks1}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 box-border w-6 h-[13px] border-[1px] border-solid border-black" />
          <div
            className="absolute top-[2px] left-[8px] rounded-[50%] bg-gray-200 box-border w-2 h-[9px] cursor-pointer border-[1px] border-solid border-black"
            onClick={openPopUpPlanks}
          />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[786px] left-[53px] w-6 h-[13px]"
          onClick={openBurpeesPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 box-border w-6 h-[13px] border-[1px] border-solid border-black" />
          <div className="absolute top-[2px] left-[8px] rounded-[50%] bg-gray-200 box-border w-2 h-[9px] border-[1px] border-solid border-black" />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[736px] left-[52px] w-6 h-[13px]"
          onClick={openStairsPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 box-border w-6 h-[13px] border-[1px] border-solid border-black" />
          <div className="absolute top-[2px] left-[8px] rounded-[50%] bg-gray-200 box-border w-2 h-[9px] border-[1px] border-solid border-black" />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[689px] left-[53px] w-6 h-[13px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 box-border w-6 h-[13px] cursor-pointer border-[1px] border-solid border-black"
            onClick={openSitUpsPopup}
          />
          <div className="absolute top-[2px] left-[8px] rounded-[50%] bg-gray-200 box-border w-2 h-[9px] border-[1px] border-solid border-black" />
        </button>
        
      </div>
      {isExcercisePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExcercisePopUp}
        >
          <ExcercisePopUp onClose={closeExcercisePopUp} />
        </PortalPopup>
      )}
      {isExcercisePopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExcercisePopUp1}
        >
          <ExcercisePopUp onClose={closeExcercisePopUp1} />
        </PortalPopup>
      )}
      {isExcercisePopUp2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExcercisePopUp2}
        >
          <ExcercisePopUp onClose={closeExcercisePopUp2} />
        </PortalPopup>
      )}
      {isExcercisePopUp3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExcercisePopUp3}
        >
          <ExcercisePopUp onClose={closeExcercisePopUp3} />
        </PortalPopup>
      )}
      {isExcercisePopUp4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExcercisePopUp4}
        >
          <ExcercisePopUp onClose={closeExcercisePopUp4} />
        </PortalPopup>
      )}
      {isLoadTemplatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoadTemplatePopup}
        >
          <LoadTemplatePopup onClose={closeLoadTemplatePopup} onTemplateLoad={onTemplateLoad} />
        </PortalPopup>
      )}
      {isNameTemplatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNameTemplatePopup}
        >
          <NameTemplatePopup onClose={closeNameTemplatePopup} onTemplateSave={handleSaveTemplate} />
        </PortalPopup>
      )}
      {isPopUpPlanks1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUpPlanks1}
        >
          <PopUpPlanks onClose={closePopUpPlanks1} />
        </PortalPopup>
      )}
      {isPopUpPlanksOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUpPlanks}
        >
          <PopUpPlanks onClose={closePopUpPlanks} />
        </PortalPopup>
      )}
      {isBurpeesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBurpeesPopup}
        >
          <BurpeesPopup onClose={closeBurpeesPopup} />
        </PortalPopup>
      )}
      {isStairsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStairsPopup}
        >
          <StairsPopup onClose={closeStairsPopup} />
        </PortalPopup>
      )}
      {isSitUpsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSitUpsPopup}
        >
          <SitUpsPopup onClose={closeSitUpsPopup} />
        </PortalPopup>
      )}
    </>
  );

  
};

export default RefinedPlanPage1Before;
