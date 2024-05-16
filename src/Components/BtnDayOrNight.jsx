import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoSun } from "react-icons/go";

function BtnDayOrNigth() {
  const [theme, setTheme] = useState(() => {
    //Con window.matchMedia, puedo encontrar el valor predeterminado de la conf de la computadora del cliente, si esta claro o oscuro
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "ligth";
  });

  const switchLigthOrDark = () => {
    setTheme((changed) => (changed === "ligth" ? "dark" : "ligth"));
  };

  useEffect(() => {
    //agregar o quitar la clase 
    if (theme === "dark") {
      document
        .querySelector("body")
        .classList.add("dark:bg-slate-800", "text-white");
    }
    if (theme === "ligth") {
      document
        .querySelector("body")
        .classList.remove("dark:bg-slate-800", "text-white");
    }
  }, [theme]);

  return (
    <div>
      <button onClick={switchLigthOrDark} className="text-3xl mb-3">
        {theme === "dark" ? <GoSun /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
}

export default BtnDayOrNigth;
