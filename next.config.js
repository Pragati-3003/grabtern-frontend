const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  images: {
<<<<<<< HEAD
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
=======
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
>>>>>>> e5c7f36d22061da3e287b71e075ae56f6d871c26
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    );
    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
