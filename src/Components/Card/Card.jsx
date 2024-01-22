import { useState } from "react";

export default function Card({ img }) {
    const [isHover, setIsHover] = useState(false);

  return (
    <div onMouseEnter={() => setIsHover(!isHover)}>
      <img className="preview-img" src={img} alt="img" />
    </div>
  );
}
