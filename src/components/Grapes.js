import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "bootstrap/dist/css/bootstrap.css";
import "../grapes.css"
import 'grapesjs/dist/css/grapes.min.css';


function Grapes() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs", 
      fromElement: true,
      height: "90vh", 
      width: "90%", 
      storageManager: false,
      panels: {
        defaults: [],
      },
    });

  }, []); 

  return (
    <>
      <div >
      <div id="gjs" className="d-flex justify-content-center">
      </div>
      </div>
    </>
  );
}

export default Grapes;
