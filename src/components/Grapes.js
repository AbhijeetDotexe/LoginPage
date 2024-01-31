import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "bootstrap/dist/css/bootstrap.css";

function Grapes() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      height: "300px",
      width: "auto",
      storageManager: false,
      panels: {
        defaults: [],
      },
    });

    // You can perform additional setup or cleanup here if needed

    // Don't forget to destroy the editor when the component unmounts
    return () => {
      editor.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div className="d-flex justify-content-center">
        <div id="gjs">
          <h1>Hello World Component</h1>
        </div>
      </div>
    </>
  );
}

export default Grapes;
