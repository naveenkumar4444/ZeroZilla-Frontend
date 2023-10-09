import React from "react";

function Loader() {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: "400px",
      }}
    >
      <span className="relative flex h-7 w-7">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-7 w-7 border-4 border-sky-400"></span>
      </span>
    </div>
  );
}

export default Loader;
