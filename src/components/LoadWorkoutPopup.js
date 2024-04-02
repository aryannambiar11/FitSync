const LoadWorkoutPopup = ({ onClose }) => {
  return (
    <div className="w-[331.5px] h-[382px] max-w-full max-h-full overflow-auto text-left text-base text-colors-neutral-white font-inter">
      <div className="absolute top-[0px] left-[0px] w-[331.5px] h-[382px] max-w-full max-h-full overflow-auto">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black box-border w-[253px] h-[382px] border-[1px] border-solid border-colors-neutral-white" />
        <div className="absolute top-[44.6px] left-[24px] inline-block w-[307.5px] h-[57.2px]">
          Load Workout Template:
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[104px] left-[21px] w-[195.4px] h-[41.6px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[195.4px] h-[41.6px]"
          alt=""
          src="/rectangle-79.svg"
        />
        <b className="absolute top-[9.9px] left-[3.4px] text-base inline-block font-inter text-colors-neutral-white text-center w-[190px] h-[21.8px]">
          Monday Workouts
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[210px] left-[23px] w-[195px] h-[42.2px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[195px] h-[42.2px]"
          alt=""
          src="/rectangle-791.svg"
        />
        <b className="absolute top-[10.1px] left-[3.4px] text-base inline-block font-inter text-colors-neutral-white text-center w-[189.6px] h-[22.1px]">
          Lazy Day
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[263px] left-[22px] w-[197px] h-[42.2px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[197px] h-[42.2px]"
          alt=""
          src="/rectangle-792.svg"
        />
        <b className="absolute top-[10.1px] left-[3.4px] text-base inline-block font-inter text-colors-neutral-white text-center w-[191.5px] h-[22.1px]">
          Jog around the park
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[316px] left-[24px] w-[197px] h-[42.2px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[197px] h-[42.2px]"
          alt=""
          src="/rectangle-792.svg"
        />
        <b className="absolute top-[10.1px] left-[3.4px] text-base inline-block font-inter text-colors-neutral-white text-center w-[191.5px] h-[22.1px]">
          Testing Template
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[157px] left-[21px] w-[195px] h-[42.2px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[195px] h-[42.2px]"
          alt=""
          src="/rectangle-791.svg"
        />
        <b className="absolute top-[11.1px] left-[3.4px] text-base inline-block font-inter text-colors-neutral-white text-center w-[189.6px] h-[22.1px]">
          Leg Workout
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[13px] left-[217px] w-[26px] h-[26.1px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[26px] h-[26.1px]"
          alt=""
          src="/group-12.svg"
        />
      </button>
    </div>
  );
};

export default LoadWorkoutPopup;
