import React, {useState,useEffect} from "react";
import {ImageProps} from './Image.types';
const ReactImage:React.FC<ImageProps>=(props)=>{
    const {
        errorImage='https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/error.png',
    fallback='https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/loading.png'
}=props;
    const [loaded,setLoaded]=useState<boolean>(false);
    const [error,setError]=useState<boolean>(false);
    useEffect(()=>{
        setLoaded(false);
        setError(false);
        const image=new Image();
        image.onload=()=>{
            setLoaded(true);
        };
        image.onerror=(_err)=>{
            setError(true)
        }
       image.src=props.src as any;
// eslint-disable-next-line
    },[props.src]);
    const cloned={...props};
    delete cloned.src;
    delete cloned.alt;
    return <img src={error?errorImage:loaded?props.src:fallback} alt={props.alt} {...cloned} />
}
export default ReactImage;