import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CreatePlanButton = () => {
  const navigate = useNavigate();

  const onCreatePlanButtonClick = useCallback(() => {
    navigate("/refined-plan-page-1-before");
  }, [navigate]);

  return (
    <div
      className="absolute h-[6.75%] w-[86.41%] top-[78.79%] right-[6.41%] bottom-[14.45%] left-[7.18%] cursor-pointer text-center text-xl text-colors-neutral-white font-poppins"
      onClick={onCreatePlanButtonClick}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-561.svg"
      />
      <img
        className="absolute h-[68.42%] w-[10.39%] top-[15.79%] right-[78.04%] bottom-[15.79%] left-[11.57%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/create-plan-icon.svg"
      />
      <b className="absolute h-[75.44%] w-[56.68%] top-[24.56%] left-[25.52%] inline-block">
        CREATE PLAN
      </b>
    </div>
  );
};

export default CreatePlanButton;
