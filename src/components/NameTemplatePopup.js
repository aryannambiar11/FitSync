const NameTemplatePopup = ({ onClose }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0">
      <div className="rounded-3xs bg-black box-border w-[336px] h-[185px] border-[1px] border-solid border-colors-neutral-white flex flex-col items-center p-4">
        <div className="text-colors-neutral-white mb-4">
          Name Workout Template:
        </div>
        <input
          className="bg-black border-[1px] border-solid border-colors-neutral-white p-2 w-full mb-4"
          placeholder="Press Here to Type"
          type="text"
        />
        <button
          className="cursor-pointer bg-transparent p-0 absolute top-2 right-2"
          onClick={onClose}
        >
          <img
            src="/group-11.svg"
            alt="Close"
            className="w-6 h-6"
          />
        </button>
        <button
          className="relative text-3xl font-poppins text-colors-neutral-white w-full h-[43.1px] mb-4 bg-green-500 flex justify-center items-center"
          onClick={onClose}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default NameTemplatePopup;
