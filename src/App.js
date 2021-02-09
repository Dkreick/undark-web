import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "Undark/Build/Undark.json",
  "Undark/Build/UnityLoader.js"
);

const App = () => {
  return <Unity unityContent={unityContent} />;
};

export default App;