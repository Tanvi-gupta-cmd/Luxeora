import { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {

    const move = (e) =>
      setPosition({ x: e.clientX, y: e.clientY });

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll(
      "button,a,.product-card,.collection-card"
    );

    targets.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {

      window.removeEventListener("mousemove", move);

      targets.forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });

    };

  }, []);

  return (
    <div
      className={`cursor ${hover ? "hover" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}