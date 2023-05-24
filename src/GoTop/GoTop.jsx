import { useEffect, useState } from "react";
import "./GoTop.css";
import { CgArrowLongUp } from "react-icons/cg";

const GoTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div id="myBtn">
      {showButton && (
        <a href="#" onClick={scrollToTop} className="return-to-top">
          <CgArrowLongUp className="arrow-up" />
        </a>
      )}
    </div>
  );
};

export default GoTop;
