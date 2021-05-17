import { useEffect, useRef } from "react";

const Input = (props) => {
  const element = useRef();
  useEffect(() => {
    if (props.validity) {
      element.current.setCustomValidity(props.validity);
    }
  }, []);
  return <input {...props} ref={element} />;
}
export default Input;