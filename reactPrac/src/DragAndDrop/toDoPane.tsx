import React from "react";
import "./dragDropStyle.css";
export function ToDoPane() {
  return (
    <>
      <div className={"toDoRoot"}>
      <div className={"wipdiv"}>
        <aside className={"wip"}>
          <p>WIP</p>
        </aside>
      </div>
        <div className={"title"}>
          <p>Drag and Drop</p>
        </div>

      <div className={"donediv"}>
        <aside className={"done"}>
          <p>DONE</p>
        </aside>
      </div>
      </div>
 
 
    </>
  );
}