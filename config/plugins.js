// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "cloudinary",
//       providerOptions: {
//         cloud_name: env("CLOUDINARY_NAME"),
//         api_key: env("CLOUDINARY_KEY"),
//         api_secret: env("CLOUDINARY_SECRET"),
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit",
      providerOptions: {
        publicKey: env("IMAGEKIT_PUBLIC_KEY"),
        privateKey: env("IMAGEKIT_PRIVATE_KEY"),
        urlEndpoint: env("IMAGEKIT_URL_ENDPOINT"),
        folder: env("IMAGEKIT_FOLDER", "/"),
      },
    },
  },
});
