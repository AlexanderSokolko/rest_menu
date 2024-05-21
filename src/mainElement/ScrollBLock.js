import React, { useRef, useEffect } from "react";
import "./Main.css";
import "./Footer.css";

export default function ScrollBlock({ children, className }) {
  const blockRef = useRef(null);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "-50px 0px 0px 0px",
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (blockRef.current) observer.observe(blockRef.current);

    return () => {
      if (blockRef.current) observer.unobserve(blockRef.current);
    };
  }, [blockRef.current]);
  return (
    <div ref={blockRef} className="scroll_block">
      {children}
    </div>
  );
}
