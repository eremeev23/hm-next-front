const path = require('path')

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "image.hm.com"
      },
      {
        hostname: "images.unsplash.com"
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
