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
    src: {
      misc: ['.htaccess'],
      sass:'build/sass/**/*'
    },
    dest: {
      misc: 'dist',
      sass: 'dist/sass'
    }
  },
  uglify: {
    src: src + "/scripts/*.js",
    dest: src + "/scripts/min"
  },
  concat: {
    src: {
      loader: src + "/scripts/min/loader.js",
      amd: src + "/scripts/min/amd.*.js",
      plugin: src + "/scripts/min/plugin.*.js",
      vendor: src + "/scripts/min/vendor.*.js",
      init: src + "/scripts/init.js"
    },
    name: {
      loader: 'loader.min.js',
      amd: 'amd.min.js',
      plugin: 'plugin.min.js',
      vendor: 'vendor.min.js',
      init: 'init.min.js'
    },
    dest: dest + "/scripts"
  }
};
