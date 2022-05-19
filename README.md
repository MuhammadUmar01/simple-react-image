`simple-react-image` is a React Components of `<img>` to Gracefully Loading Large Images. additionally it accepts two optional props fallback and errorImage. fallback will be displayed when image will be loading and errorImage will be displyed when any error happend while loading image

## Install

```bash
npm install --save simple-react-image
```

or,

```bash
yarn add simple-react-image
```

| Prop         | type   | desciption     | required |
| ------------ | ------ | -------------- | -------- |
| `fallback`   | string | loading image  | `no`     |
| `errorImage` | string | image on error | `no`     |

`all img tags props`

## Usage

```jsx
import { Image } from 'simple-react-image';

  <Image
    src={"https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg"}
    />

  <Image
    src={"https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg"}
    fallback="loading image url"
    errorImage='image displyed on error'
    />

```

[Check Demo](https://codesandbox.io/s/jolly-goodall-isx64t)
