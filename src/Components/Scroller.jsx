import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import "./Scroller.css";

function Scroller() {
  const [showScroller, setShowScroller] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // show after scrolling down
      if (scrollTop > 200 && scrollTop + windowHeight < documentHeight - 100) {
        setShowScroller(true);
      } else {
        setShowScroller(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showScroller && (
      <div className="scroller" onClick={scrollToTop}>
        <ChevronUp size={80} strokeWidth={2.25} />
      </div>
    )
  );
}

export default Scroller;
