# @bingumd/js-utils-math

Simple javascript math utils.

## Installation

##### Yarn

```sh
yarn add @bingumd/js-utils-math
```

##### Npm

```sh
yarn install @bingumd/js-utils-math
```

## Usage

```js
import { clamp, lerp, map, mod, norm } from '@bingumd/js-utils-math'

const clamp = clamp(5, 0, 10) // => 5
const lerp = lerp(0, 10, 0.5) // => 5
const map = map(5, 0, 10, 0, 100) // => 50
const mod = mod(-7, 3) // => 2
const norm = norm(5, 0, 10) // => 0.5
```
