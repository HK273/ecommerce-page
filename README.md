# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6)

## Useful resources

- [Manage images in Next and tailwind](https://stackoverflow.com/questions/72069858/next-image-shrinking-inside-flexbox-with-tailwind)

- [NextJS responsive images](https://dev.to/felixhaeberle/responsive-fix-for-the-next-js-image-component-1351)

- [Nesting plugin for tailwind](https://tailwindcss.com/docs/using-with-preprocessors#nesting)
  When using css nesting (custom syntax like @apply and @screen) add the above and update your postcss.config.js to the below

  ```javascript
  module.exports = {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  ```

Was getting this error when refreshing the page in dev mode...

```
> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, stat '/Users/hectorkurtyanek/Desktop/JavaScript/ecommerce-page/.next/cache/webpack/client-development/18.pack.gz'
```

Found a resolution [here](https://github.com/vercel/next.js/issues/47394) to remove node_modules and package-lock.json and re-install dependencies. Also had to remove the .next folder to get this back working [info](https://stackoverflow.com/questions/73306304/w-webpack-cache-packfilecachestrategy-caching-failed-for-pack-error-unable)
