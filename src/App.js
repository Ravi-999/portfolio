import { useState } from "react";
import "./App.css";
import powerIcon from "./assests/powerIcon copy.svg";
import AppleLoader from "./AppleLoader";

function App() {
  const [clicked, setClicked] = useState(false);

  const startApplication = () => {
    setClicked(true);
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  if (!clicked)
    return (
      <>
        <div className="bg-[black] w-[100vw] h-[100vh] flex items-center justify-center">
          <div
            className="cursor-pointer text-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out"
            onClick={startApplication}
          >
            <img className="w-32 h-32 mb-4" src={powerIcon} />
            <p className="text-[white] font-medium">Click to load</p>
          </div>
        </div>
      </>
    );

  return (
    <div className="App">
      <AppleLoader />
    </div>
  );
}

export default App;
