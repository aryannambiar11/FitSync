const StairsPopup = ({ onClose }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute center w-[359px] h-[387px] max-w-full max-h-full overflow-auto text-left text-13xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-dimgray-400" />
      <img
        className="absolute top-[45px] left-[16px] w-[306px] h-[169px] object-cover"
        alt=""
        src="/rectangle-80@2x.png"
      />
      <div className="absolute h-[13.95%] w-[44.85%] top-[4.65%] left-[7.52%] inline-block">
        Stairs
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[12.66%] w-[55.99%] top-[82.43%] right-[22.84%] bottom-[4.91%] left-[21.17%]"
        onClick={onClose}
      >
        <button className="cursor-pointer [border:none] p-0 bg-deepskyblue-200 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        <b
          className="absolute h-[51.02%] w-[68.16%] top-[24.49%] left-[22.89%] text-base inline-block font-poppins text-colors-neutral-white text-left cursor-pointer"
          onClick={onClose}
        >
          ADD TO PLAN
        </b>
      </button>
      <div className="absolute h-[29.72%] w-[88.86%] top-[47.8%] right-[5.29%] bottom-[22.48%] left-[5.85%] bg-gainsboro-100" />
      <div className="absolute h-[26.1%] w-[84.12%] top-[48.84%] left-[8.64%] text-sm text-black inline-block">
        Stair climbing is an effective exercise for targeting the muscles of the
        legs, buttocks, and core, while also providing a cardiovascular workout.
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[302px] w-[26px] h-[26.1px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[26px] h-[26.1px]"
          alt=""
          src="/group-1.svg"
        />
      </button>
    </div>
    </div>
  );
};

export default StairsPopup;
