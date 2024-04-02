import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GoalPageRefinedIdea = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="w-full relative h-[844px] text-left text-5xl text-colors-neutral-white font-poppins">
      <div className="absolute h-[4.98%] w-[36.15%] top-[43.72%] left-[9.74%] text-black inline-block">
        Daily Goal:
      </div>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
      <div className="absolute h-[4.15%] w-[30%] top-[2.61%] right-[35.13%] bottom-[93.25%] left-[34.87%] text-center text-black">
        <img
          className="absolute h-full w-[99.91%] top-[0%] right-[0.09%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-4.svg"
        />
        <div className="absolute h-[71.43%] w-full top-[0%] left-[0%] inline-block">
          FitSync
        </div>
      </div>
      <div className="absolute h-[4.38%] w-[75.38%] top-[24.41%] right-[13.59%] bottom-[71.21%] left-[11.03%] text-xl">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-63.svg"
        />
        <div className="absolute h-[81.08%] w-[69.25%] top-[10.81%] left-[7.04%] inline-block [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
          Lose: 3 lbs
        </div>
      </div>
      <img
        className="absolute h-[7.23%] w-[75.38%] top-[51.78%] right-[13.59%] bottom-[41%] left-[11.03%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/long-term-goals.svg"
      />
      <img
        className="absolute h-[7.23%] w-[52.82%] top-[0.47%] right-[23.85%] bottom-[92.3%] left-[23.33%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-plan-page@2x.png"
      />
      <div className="absolute h-[4.98%] w-[36.15%] top-[18.96%] left-[11.03%] text-13xl inline-block">
        GOAL
      </div>
      <div className="absolute h-[4.98%] w-[61.03%] top-[45.73%] left-[11.03%] text-13xl inline-block">
        DAILY GOAL
      </div>
      <img
        className="absolute h-[4.15%] w-[10.77%] top-[6.4%] right-[85.13%] bottom-[89.45%] left-[4.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        alt=""
        src="/back-button2.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="absolute h-[4.62%] w-[10%] top-[60.55%] right-[78.97%] bottom-[34.83%] left-[11.03%] rounded-[50%] bg-deepskyblue-200" />
      <img
        className="absolute h-[3.55%] w-[7.44%] top-[61.14%] right-[80.26%] bottom-[35.31%] left-[12.31%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/ellipse-15@2x.png"
      />
      <div className="absolute h-[4.5%] w-[56.67%] top-[60.66%] left-[23.33%] text-xl inline-block">{`Suggestion: `}</div>
      <div className="absolute h-[4.15%] w-[42.05%] top-[63.86%] left-[23.33%] text-base inline-block">
        “Focus on Cardio”
      </div>
      <img
        className="absolute h-[4.5%] w-[10.51%] top-[5.81%] right-[2.82%] bottom-[89.69%] left-[86.67%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/pencil@2x.png"
      />
      <div className="absolute h-[5.09%] w-[48.21%] top-[71.09%] left-[26.92%] text-[25px] inline-block">
        ACHIEVEMENTS
      </div>
      <div className="absolute h-[6.99%] w-[90.77%] top-[76.07%] left-[4.62%] text-base inline-block">
        <ul className="m-0 font-inherit text-inherit pl-[21px]">
          <li className="mb-0">Beat core record</li>
        </ul>
      </div>
    </div>
  );
};

export default GoalPageRefinedIdea;
