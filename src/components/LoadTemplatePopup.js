import React from "react";
const LoadTemplatePopup = ({ onClose, onTemplateLoad }) => {
  // Retrieve saved templates from sessionStorage
  const savedTemplatesJSON = sessionStorage.getItem("templateData");
  const savedTemplates = savedTemplatesJSON ? JSON.parse(savedTemplatesJSON) : [];

  console.log("savedTemplates:", savedTemplates); // Log savedTemplates for debugging
  // Check if savedTemplates is not an array or is empty
  if (!Array.isArray(savedTemplates) || savedTemplates.length === 0) {
    alert("No saved templates found.");
    onClose();
    return null; // Return null if there are no saved templates
    
  }

  // Maximum number of templates that can fit within the popup without scrolling
  const maxTemplatesWithoutScroll = savedTemplates.length;


  // Function to handle loading a template
  const handleLoadTemplate = (templateName) => {
    // Retrieve the selected template data from storage
    const templateData = savedTemplates.find(template => template.name === templateName);

    // Perform actions to load the template data (e.g., display it in the UI)
    console.log("Loaded template:", templateData);
    
    // Update the exerciseData in sessionStorage with the loaded template data
    sessionStorage.setItem("exerciseData", JSON.stringify(templateData.exercises));

    onTemplateLoad(templateData.exercises);
    // Close the popup
    onClose();
  };
  

  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute center-[0px] left-[70px] w-[2500px] h-[382px] max-w-full max-h-full overflow-hidden text-left text-base text-colors-neutral-white font-inter">
        <div className="absolute top-[0px] left-[0px] w-[258px] h-[382px] max-w-full max-h-full overflow-auto">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black box-border w-[258px] h-[382px] border-[1px] border-solid border-colors-neutral-white">
            {/* Title */}
            <div className="absolute top-[54px] left-[32px] inline-block w-[194px] h-[38px]">
              Load Workout Template:
            </div>
            {/* Templates container with scrolling */}
            <div className="overflow-y-auto h-[calc(100% - 54px - 38px)] pt-[54px] pb-[38px]">
              {/* Render buttons for each saved template */}
              {savedTemplates.slice(0, maxTemplatesWithoutScroll).map((template, index) => (
                <button
                  key={template.name}
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[157px] left-[30px] w-[197px] h-[42.2px]"
                  style={{ top: `${157 + index * 50}px` }} // Adjust top position dynamically
                  onClick={() => handleLoadTemplate(template.name)}
                >
                  <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-[197px] h-[42.2px]"
                    alt=""
                    src="/rectangle-792.svg"
                  />
                  <b className="absolute top-[11.1px] left-[3.4px] text-base inline-block font-inter text-colors-neutral-white text-center w-[191.5px] h-[22.1px]">
                    {template.name}
                  </b>
                </button>
              ))}
            </div>
          </div>
          {/* X icon for closing the popup */}
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
      </div>
    </div>
  );
};

export default LoadTemplatePopup;
