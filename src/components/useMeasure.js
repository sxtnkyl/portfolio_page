import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

//used for viewwork button in welcome section to fill the button on hover

export default function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => ro.observe(ref.current), [ro]);
  // useEffect(() => (ro.observe(ref.current), ro.disconnect), [ro]);
  return [{ ref }, bounds];
}
