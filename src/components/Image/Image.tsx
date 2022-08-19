import React, { useState, useEffect } from "react";
import { ImageProps, EState } from "./Image.types";
const ReactImage: React.FC<ImageProps> = (props) => {
  const {
    errorImage = "https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/error.png",
    fallback = "https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/loading.png",
    onStateChange,
  } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    onStateChange && onStateChange(EState.loading);
    setLoaded(false);
    setError(false);
    const image = new Image();
    image.onload = () => {
      setLoaded(true);
    };
    image.onerror = (_err) => {
      setError(true);
    };
    image.src = props.src as any;
    // eslint-disable-next-line
  }, [props.src]);

  useEffect(() => {
    if (loaded) {
      onStateChange && onStateChange(EState.loaded);
    }
    if (error) {
      onStateChange && onStateChange(EState.error);
    }
  }, [loaded, error]);

  const cloned = { ...props };
  delete cloned.src;
  delete cloned.alt;
  delete cloned.onStateChange;
  return (
    <img
      src={error ? errorImage : loaded ? props.src : fallback}
      alt={props.alt}
      {...cloned}
    />
  );
};
export default ReactImage;
