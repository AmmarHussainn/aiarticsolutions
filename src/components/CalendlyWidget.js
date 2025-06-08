import React, { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ammarhussain0315/arctic-ai-solutions?background_color=1a1a1a&text_color=ffffff&primary_color=5d9cf5"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
