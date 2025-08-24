import { useEffect, useState } from "react";

export default function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="bg-white shadow rounded-lg p-8 hover:scale-105 transition text-center">
      <h4 className="text-pink-600 text-4xl font-extrabold mb-2">
        {count.toLocaleString()}
      </h4>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
