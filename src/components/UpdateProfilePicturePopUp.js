const UpdateProfilePicturePopUp = ({ onClose }) => {
  return (
    <div className="w-[204px] h-32 max-w-full max-h-full overflow-auto text-left text-xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-deepskyblue-200" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[75px] left-[33px] text-xl font-semibold font-poppins text-colors-neutral-white text-left inline-block w-[138px] h-[25px]">
        Choose File
      </button>
      <div className="absolute h-[15.63%] w-[67.75%] top-[20.16%] left-[16.13%] font-semibold inline-block">{`Photo Library `}</div>
    </div>
  );
};

export default UpdateProfilePicturePopUp;
