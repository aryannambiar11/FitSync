const NameTemplatePopup = ({ onClose }) => {
  return (
    <div className="w-[335.7px] h-[139px] max-w-full max-h-full overflow-auto text-left text-base text-colors-neutral-white font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black box-border w-[335.7px] h-[139px] border-[1px] border-solid border-colors-neutral-white" />
      <div className="absolute top-[20.4px] left-[17.1px] inline-block w-[247.8px] h-[43.1px]">
        Name Workout Template:
      </div>
      <div className="absolute top-[63.5px] left-[17.1px] bg-black box-border w-[299.2px] h-[43.1px] border-[1px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-inter text-base bg-[transparent] absolute top-[75.1px] left-[26.3px] text-dimgray-200 text-left inline-block w-[254.6px] h-[25.2px]"
        placeholder="Press Here to Type"
        type="text"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[20px] left-[290px] w-[26px] h-[26px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[26px] h-[26px]"
          alt=""
          src="/group-1.svg"
        />
      </button>
    </div>
  );
};

export default NameTemplatePopup;
