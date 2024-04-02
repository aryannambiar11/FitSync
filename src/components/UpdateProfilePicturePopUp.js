const UpdateProfilePicturePopUp = ({ onClose }) => {
  return (
    <div className="w-[390px] h-[360px] max-w-full max-h-full overflow-auto">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-black" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[14.72%] w-[58.97%] top-[21.94%] right-[20.51%] bottom-[63.33%] left-[20.51%]"
        onClick={onClose}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/no-button.svg"
          onClick={onClose}
        />
        <b className="absolute h-[49.06%] top-[24.53%] left-[calc(50%_-_109px)] text-base inline-block font-poppins text-colors-neutral-white text-center w-[221px]">
          Take a Picture
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[14.72%] w-[58.97%] top-[49.72%] right-[20%] bottom-[35.56%] left-[21.03%]"
        onClick={onClose}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/no-button.svg"
          onClick={onClose}
        />
        <b className="absolute h-[49.06%] top-[24.53%] left-[calc(50%_-_115px)] text-base inline-block font-poppins text-colors-neutral-white text-center w-[221px]">
          Choose from Library
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[14.75%] w-[33.33%] top-[77.78%] right-[33.85%] bottom-[7.47%] left-[32.82%]"
        onClick={onClose}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/no-button.svg"
          onClick={onClose}
        />
        <b className="absolute h-[48.59%] w-[81.54%] top-[25.42%] left-[8.46%] text-base inline-block font-poppins text-colors-neutral-white text-center">
          Cancel
        </b>
      </button>
    </div>
  );
};

export default UpdateProfilePicturePopUp;
