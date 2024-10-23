import { useEffect, useState } from "react";
import Arrow from "../assets/Arrow.svg?react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(window.scrollY >= 100);
  useEffect(() => {
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-0 right-0 duration-500 ease-in-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <Arrow className="w-10 h-10 mx-3.5 my-1 fill-neutral-800 rotate-180" />
    </button>
  );
};

export default ScrollToTop;
