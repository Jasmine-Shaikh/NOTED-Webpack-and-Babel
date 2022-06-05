import React from "react";
import ReactDOM from "react-dom";
import displayNotes from "./addBtn.js"
import ("./index.css");

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(<div id="entirePage"><header>
    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pen-icon-18-256.png"/> <h3>NOTED</h3 >
    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/pen-icon-18-256.png"/> </header>
<div>
<div id="inputContainer">
    <input type="text" id="notesBar" placeholder="Enter note to display"></input>
    <button id="addBtn" onClick={displayNotes}>ADD</button>
</div>
<div id="outputContainer">
    <div id="displayBox">
       <ul id="List"></ul>
    </div>
</div>

</div>

</div>
    ,

    document.getElementById("root")
    
)