# ANILA 2.0 [![Build Status](https://travis-ci.org/bravocado/anila.png?branch=master)](https://travis-ci.org/bravocado/anila) [![Total views](https://sourcegraph.com/api/repos/github.com/bravocado/anila/counters/views.png)](https://sourcegraph.com/github.com/bravocado/anila) [![library users](https://sourcegraph.com/api/repos/github.com/bravocado/anila/badges/library-users.png)](https://sourcegraph.com/github.com/bravocado/anila)

![Anila Logo](/dist/images/logo100.png)

See [change log](https://github.com/bravocado/anila/blob/development/changelog.md)

### Note
This is a heavy starter and completely personal.
Consider it, if you want to use Anila.

#### Documentation
Up until now, there's no online documentation. Run `gulp` and check your `dist/docs/`.

## Dependecies
- SASS [documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- Libsass [install](http://libsass.org/)
- Node [install](http://nodejs.org/)


## How to use it?

### Bower

`bower install anila`


### NPM

`npm install anila`


### CLI

generally you can use `[sudo] gem install anila`. After that, you can start using Anila command line tools.

#### Available Commands
- `anila version`
- `anila new [project_folder]`
- `anila new [project_folder] --grunt`
- `anila new [project_folder] --gulp`
- `anila update`


## Structure
```
+ --- build
	+ --- images
	+ --- sass
		+ --- anila
			+ --- components [modules for HTML element or a set of HTML elements]
			+ --- extensions [an extension for mixin]
			+ --- generic [modules for general uses. like debug, reset, normalize]
			+ --- objects [modules for abstraction]
			+ --- tools [a set of module dependecies]
			- --- _conditional.scss
			- --- _values.scss
		- --- anila.scss
		+ --- docs
			- --- *.scss
	+ --- scripts
	+ --- views
		+ --- data
		+ --- layouts
		+ --- organisms
		+ --- pages
+ --- dist [compiled source files]
	+ --- assets
		+ --- css [compiled files]
		+ --- images [copied files]
		+ --- sass [minified files]
```
