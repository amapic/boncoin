const withImages = require('next-images')
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    disableStaticImages: true
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  ...withImages()

}