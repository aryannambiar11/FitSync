import { useState, useCallback } from "react";
import UpdateProfilePicturePopUp from "./UpdateProfilePicturePopUp";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";

const UpdateProfilePopUp = ({ onClose, onYesButtonClick }) => {
  const [isChangePhotoPopUpOpen, setChangePhotoPopUpOpen] = useState(false);
  const navigate = useNavigate();

  const openChangePhotoPopUp = useCallback(() => {
    setChangePhotoPopUpOpen(true);
  }, []);

  const closeChangePhotoPopUp = useCallback(() => {
    setChangePhotoPopUpOpen(false);
  }, []);


  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">

      <div
        className="absolute center left-[47px] w-[310px] h-[230.1px] cursor-pointer max-w-full max-h-full overflow-auto text-left text-xl text-colors-neutral-white font-poppins"
        onClick={openChangePhotoPopUp}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-deepskyblue-200" />
        <div className="absolute h-[15.6%] w-[67.74%] top-[13.65%] left-[20.32%] font-semibold whitespace-pre-wrap inline-block">{`Confirm  Changes? `}</div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[23.08%] w-[41.94%] top-[50.24%] right-[5.48%] bottom-[26.68%] left-[52.58%]"
          onClick={onYesButtonClick}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-510.svg"
          />
          <b className="absolute h-[77.4%] w-[82%] top-[8.47%] left-[6.69%] text-base inline-block font-poppins text-colors-neutral-white text-center">
            
          </b>
          <div className="absolute h-[57.63%] w-[58.54%] top-[21.28%] right-[19.15%] bottom-[21.09%] left-[22.31%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-511.svg"
            />
            <b className="absolute h-[77.45%] w-[82%] top-[8.17%] left-[6.7%] text-base inline-block font-poppins text-colors-neutral-white text-center">
              YES
            </b>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[23.08%] w-[41.94%] top-[50.24%] right-[51.94%] bottom-[26.68%] left-[6.13%]"
          onClick={onClose}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/no-button.svg"
            onClick={onClose}
          />
          <b className="absolute h-[48.59%] w-[81.54%] top-[25.42%] left-[8.46%] text-base inline-block font-poppins text-colors-neutral-white text-center">
            NO
          </b>
        </button>
      </div>
      </div>
      {isChangePhotoPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangePhotoPopUp}
        >
          <UpdateProfilePicturePopUp onClose={closeChangePhotoPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default UpdateProfilePopUp;
