# azi-check-update

check if a website is update available

# Install

```shell
    npm i azi-check-update

    # or

    yarn add azi-check-update

    # or

    pnpm add azi-check-update (recommended)
```

# Usage

```js
import checkUpdate from "azi-check-update";

const isProd = process.env.NODE_ENV === "production";

checkUpdate(isProd, 5 * 1000, () => {
  console.log("update available");
});
```

# LICENSE

`MIT`
