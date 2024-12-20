import { useEffect } from "react";

const WallOfLove = () => {
  useEffect(() => {
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://widget.senja.io/js/iframeResizer.min.js");

    let frame = document.getElementById("senja-frame-902012ea");
    if (frame) {
      frame.setAttribute("src", "https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648");
    }
    document.body.appendChild(script);
  });

  return (
    <div className="md:h-[800px] h-screen w-full">
      <iframe
        id="senja-frame-902012ea"
        title="wall of love"
        src=""
        data-src="https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648"
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        className="md:w-9/12  h-full py-4 px-6 mx-auto"
      ></iframe>
    </div>
  );
};

export default WallOfLove;
