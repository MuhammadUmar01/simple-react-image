import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
export enum EState {
  loading = "loading",
  loaded = "loaded",
  error = "error",
}
export interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fallback?: string;
  errorImage?: string;
  onStateChange?(state: EState): void;
}
