`simple-react-image` is a React Components of `<img>` to Gracefully Loading Large Images. additionally it accepts two optional props fallback and errorImage. fallback will be displayed when image will be loading and errorImage will be displyed when any error happend while loading image

![demo image](https://raw.githubusercontent.com/MuhammadUmar01/simple-react-image/main/src/static/simple_react_image.gif)

## Install

```bash
npm install --save simple-react-image
```

or,

```bash
yarn add simple-react-image
```

| Prop            | type     | desciption                     | required |
| --------------- | -------- | ------------------------------ | -------- |
| `fallback`      | string   | loading image                  | `no`     |
| `errorImage`    | string   | image on error                 | `no`     |
| `onStateChange` | function | called on loading state change | `no`     |

`all img tags props`

## Usage

```jsx
import { Image as Img } from 'simple-react-image';

  <Img
    src={"https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg"}
    />

  <Img
    src={"https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg"}
    fallback="loading image url"
    errorImage='image displyed on error'
    onStateChange={(state)=>{
      console.log(state)
    }}
    />

```

## Demo

[Check Demo here](https://codesandbox.io/s/jolly-goodall-isx64t)
