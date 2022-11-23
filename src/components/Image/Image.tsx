import React, { useState, useEffect } from "react";
import { ImageProps, EState } from "./Image.types";
const ReactImage: React.FC<ImageProps> = (props) => {
  const {
    src,
    alt,
    errorImage = "https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/error.png",
    fallback = "https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/loading.png",
    onStateChange,
    referrerPolicy,
    ...rest
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
      onStateChange && onStateChange(EState.loaded);
    };
    image.onerror = (_err) => {
      setError(true);
      onStateChange && onStateChange(EState.error);
    };
    image.src = src as string;
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    // eslint-disable-next-line
  }, [props.src]);

  const imgSrc = loaded ? src : fallback;

  return <img src={error ? errorImage : imgSrc} alt={alt} {...rest} />;
};
export default ReactImage;
