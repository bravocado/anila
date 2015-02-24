var dest = "./dist";
var src = "./build";

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: {
      all: src + "/sass/*.{scss, sass}",
      custom: src + "/sass/**/*.{scss, sass}"
    },
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  templates: {
    src: {
      all: src + "/views/pages/*.jade",
      watch: [src + "/views/pages/*.jade", src + "/views/layouts/*.jade", src + "/views/organisms/*.jade", src + "/views/data/*.json"],
      data: '../../build/views/data/'
    },
    dest: dest
  },
  copy: {
    miscSrc: ['.htaccess'],
    miscDest: 'dist',
    sassSrc: 'build/sass/**/*',
    sassDest: 'dist/sass'
  },
  concat: {
    src: {
      plugin: src + "/scripts/plugin.*.js",
      vendor: src + "/scripts/vendor.*.js"
    },
    name: {
      plugin: 'plugin.js',
      vendor: 'vendor.js'
    },
    dest: dest + "/scripts"
  }
};
