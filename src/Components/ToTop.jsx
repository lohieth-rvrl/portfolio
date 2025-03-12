import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btn btn-dark position-fixed bottom-0 end-0 m-4 rounded-circle p-2 ${isVisible ? "d-block" : "d-none"}`}
      onClick={scrollToTop}
    >
      &nbsp;<FontAwesomeIcon icon={faArrowUp} size="lg" />&nbsp;
    </button>
  );
}
