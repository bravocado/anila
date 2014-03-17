## Public Version



## Beta Version

#### 2.0.0-beta.1
- [debug] compatibility test using compass
- [fix] error on background-image mixin when using compass
- [fix] clean up code
- [improvement] restructuring folders based on Windy
- [improvement] adding letter spacing API (typography, buttons)
- [improvement] adding justify API (helpers)
- [improvement] adding anchor text-decoration on hover API (typography)
- [fix] buttons size-list incompatiblity using interpolation
- update conditional comments for available vars


## Alpha Version

#### 2.0.0-alpha.14
- [improvement] themes mixin [14.1]
- [improvement] conditional vars [14.1]
- [fix] conditional themes bug [14.1]
- [improvement] based on Tama feedback "pretty" class name change to "candy" [14.1]
- [debug] compatibility test using sass 3.3.0.rc.5 [14.1]
- merging with master [14.2]
- [fix] build #31 travis fixed [14.3]

#### 2.0.0-alpha.13
- [improvement] conditional shape for using mixin instead of list [12.1]
- [fix] split-button after adding conditional shape [12.1]
- [fix] button group, split button include buttons vars for btn global naming rules [12.1]
- [fix] table header color [12.1]
- [improvement] adding new color listing (alert, danger, success, info, unavailable), create buttonwith those extra colors. [13]
- [improvement] comments on rendered unminified CSS [12.1]
- [fix] change copyright to NRD [12.1]
- [fix] remove double import media [12.1]
- [fix] droping "-o" from vendor prefix (http://stackoverflow.com/questions/19421180/should-i-remove-vendor-prefixes) and "-moz" included after $oldie filled with true condition. removing $rem-fallback. change it to $oldie. [13]
- [fix] droping "border-radius-bottomleft", "...-topleft", "...bottomright", "…topright" on side radius mixin. droping support for FireFox 1 - 12 (https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius#Browser_notes) [13]
- [fix] droping "-ms" and "-o" keyframe from keyframe mixin (https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes#Browser_Compatibility) [13]

#### 2.0.0-alpha.12
- [improvement] change media queries to px.
- [improvement] create more section for documention. [sass, css, photoshop] exclude content.
- [fix]handlebars includes.
- [improvement] less comment on printed CSS.
- [fix] grid bug sm-#
- [fix] @import "functions" issue.
- [fix] removing bourbon dependencies.
- [improvement] adding new mixin (color-setup, theme-setup, compose-theme)
- [bump] node-sass to 0.8.1, grunt-sass to 0.10.0
- [improvement] using color-setup, theme-setup and compose-theme for components (buttons, split button, pagination, table, breadcrumb)
- [improvement] table colors.

#### 2.0.0-alpha.11
- adding a value.scss for easy update.
- change well to boxy.
- fix side-nav unit.
- adding mixin boxy radius.
- adding a description on conditional.scss which line developer can set their available vars.
- drop jquery to 1.10.2
- adding split button (with sizes, color-list, and style-list)
- adding pagination (with size, color-list, and style-list)