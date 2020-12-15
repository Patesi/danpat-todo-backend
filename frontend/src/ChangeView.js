import React, { useEffect, useState } from "react";

const colors = {
  MainLight: "#e2f5f9",
  MainDark: "#bbdce3",
};

const ChangeView = () => {
  const [color, setColor] = useState(colors.MainLight);
  useEffect(() => {
    document.body.style.background = color;
  }, [color]);

  return (
    <>
      <button
        style={{ backgroundColor: colors.MainLight }}
        className={"vittu"}
        value={color}
        onClick={(e) => setColor(colors.MainDark)}
      ></button>
    </>
  );
};

export default ChangeView;
