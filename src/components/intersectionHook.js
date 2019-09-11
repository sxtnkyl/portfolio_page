import { useState, useEffect, useRef } from "react";

//https:codesandbox.io/s/7w4qvz8qw6
//custom hook to determine when an object is in view
//used as trigger for initial animations and scroll arrow button (downArrow)

export default function useIntersection(options) {
  //options are the threshold property, set to a number 0-1, reflecting % of obj showing in viewport
  //console.log(options);

  const [observerEntry, setEntry] = useState({});
  const elRef = useRef();

  useEffect(() => {
    //use the IntersectionObserver API
    //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observer = new IntersectionObserver(
      //callbacks upon entry
      entries => setEntry(entries[0]),
      options
    );
    //target to watch
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [observerEntry]);
  return { observerEntry, elRef };
}
