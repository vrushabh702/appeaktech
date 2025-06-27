// AutoCounter.jsx
import React, { useEffect, useState, useRef } from "react";

export default function AutoCounter({ limit, step = 1, speed = 50, onDone }) {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= limit) {
          clearInterval(timerRef.current);
          if (onDone) onDone(limit);
          return limit;
        }
        return next;
      });
    }, speed);

    // cleanup on unmount
    return () => clearInterval(timerRef.current);
  }, [limit, step, speed, onDone]);

  return (
    <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
      {count}
    </span>
  );
}
