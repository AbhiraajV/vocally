import React from "react";
import "./index.css";
function Button({ children, onClick }) {
  return (
    <div>
      {" "}
      <button className="btn-main" children={children} onClick={onClick} />
    </div>
  );
}

export default Button;
