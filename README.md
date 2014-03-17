# ANILA 2.0 [![Build Status](https://travis-ci.org/bravocado/anila.png?branch=master)](https://travis-ci.org/bravocado/anila) [![Total views](https://sourcegraph.com/api/repos/github.com/bravocado/anila/counters/views.png)](https://sourcegraph.com/github.com/bravocado/anila) [![library users](https://sourcegraph.com/api/repos/github.com/bravocado/anila/badges/library-users.png)](https://sourcegraph.com/github.com/bravocado/anila)

See [change log](https://github.com/bravocado/anila/blob/development/changelog.md)

### Note
This is a heavy starter and completely personal.
Consider it, if you want to use Anila.

#### Documentation
Up until now, there's no online documentation. Run `grunt` and check your `dist/docs/`.

## Dependecies
- SASS [SASS documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- Libsass [install](http://libsass.org/)
- Node [install](http://nodejs.org/)


## How to use it?
- install gem `[sudo] gem install anila`
- now you can play with it. `anila new [project/path]`
- By default you will have Compass project. You can switch to libsass compiler by running `anila new [project/path] --libsass`.


## Structure
```
+ --- build
	+ --- doc
	+ --- fonts
	+ --- icons
	+ --- js
	+ --- scss
		+ --- anila
			+ --- components [modules for HTML element or a set of HTML elements]
			+ --- extensions [an extension for mixin]
			+ --- generic [modules for general uses. like debug, reset, normalize]
			+ --- objects [modules for abstraction]
			+ --- tools [a set of module dependecies]
			- --- _conditional.scss
			- --- _values.scss
		- --- anila.scss
+ --- dist [compiled source files]
	+ --- assets
		+ --- css [compiled files]
		+ --- fonts [copied files]
		+ --- js [minified files]
		+ --- scss [copied scss files from build/]
		- --- bower.json
	+ --- docs [when you need an offline documentation, please open this folder]
```


## To Do List
- Using Block Element Modifier for CSS classes [reference](http://www.sitepoint.com/css-sass-styleguide/) (release on different version, waiting until libsass support for it [reference](https://github.com/hcatlin/libsass/issues/278))
- Moving to SASS 3.3 (release on different version, we're waiting until libsass support it [reference](https://github.com/hcatlin/libsass/issues/278))
