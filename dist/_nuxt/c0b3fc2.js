(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{186:function(t,e,o){t.exports=o.p+"img/profile.071bf4b.png"},187:function(t,e,o){var content=o(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("f6c2f56c",content,!0,{sourceMap:!1})},188:function(t,e,o){var content=o(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("692120fc",content,!0,{sourceMap:!1})},189:function(t,e,o){var content=o(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("231e854b",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("66233cce",content,!0,{sourceMap:!1})},191:function(t,e,o){"use strict";o.r(e);var n={name:"Hero",methods:{openURL:function(){window.open("https://top.gg/bot/765063751208402944/invite","_blank","noopener")},scrollToCommands:function(){console.log(document.getElementById("command-container")),document.getElementById("command-container").scrollIntoView({behavior:"smooth"})}}},r=(o(198),o(22)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"hero-container"},[n("img",{staticClass:"profile-img",attrs:{src:o(186)}}),t._v(" "),n("h1",[t._v("Astronomia")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"button-holder"},[n("button",{staticClass:"add-btn",on:{click:t.openURL}},[n("img",{staticClass:"discord-logo",attrs:{src:o(197)}}),t._v(" "),n("p",[t._v("Add to Discord")])]),t._v(" "),n("button",{staticClass:"secondary-btn",on:{click:t.scrollToCommands}},[t._v("\n        Commands\n      ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"tagline"},[this._v("\n      An open source Discord bot for "),e("strong",[this._v("Space Enthusiasts.")])])}],!1,null,"30236d9f",null);e.default=component.exports},192:function(t,e,o){"use strict";o.r(e);var n=o(193),r=o(202),c=o.n(r),d={name:"CommandContainer",components:{CommandList:n.default},data:function(){return{commands:c.a}}},l=(o(203),o(22)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",[o("div",{staticClass:"command-main"},[o("h1",[t._v("Commands List")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"command-list-grid"},t._l(t.commands,(function(t){return o("CommandList",{key:t.keyword,attrs:{command:t}})})),1),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      Universe started from a dot "),e("strong",[this._v('"."')]),this._v(" and thats our prefix\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extra-features"},[e("p",[this._v("\n        For regular news and other features create a text channel with name\n        "),e("strong",[this._v("astronomia")]),this._v(" on your server.\n      ")])])}],!1,null,"029464ba",null);e.default=component.exports;installComponents(component,{CommandList:o(193).default})},193:function(t,e,o){"use strict";o.r(e);var n={name:"CommandList",props:{command:{type:Object}}},r=(o(200),o(22)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"command-list-container"},[t.command.new?o("div",{staticClass:"new"},[o("p",[t._v("NEW")])]):t._e(),t._v(" "),o("h2",[t._v("\n    "+t._s(t.command.keyword)+" "),o("span",{staticClass:"argument"},[t._v(t._s(t.command.argument))])]),t._v(" "),o("p",[o("strong",[t._v("Description - ")]),t._v(t._s(t.command.description))]),t._v(" "),t.command.shorthands?o("p",{staticClass:"shorthand"},[o("strong",[t._v("Shorthands - ")]),t._v(t._s(t.command.shorthands)+"\n  ")]):t._e(),t._v(" "),o("p",[o("strong",[t._v("Example - ")]),t._v(t._s(t.command.example))])])}),[],!1,null,"7bc7560a",null);e.default=component.exports},194:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgMTM2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MDAgMTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNLTIzLTE0YzE1LjMsMzEuNSw0OS41LDY1LDg3LDY1YzI0LjMsMCwzNC4xLTE0LDYwLTljMjAuOCw0LDMzLjksMTYuOCw0MiwyNGM0LjgsNC4zLDc1LjUsNjYuNSwxMjgsNjYNCgljNjUuMS0wLjcsODQuNy05Ny45LDE0OC05M2MyOC4yLDIuMiwyOC43LDIxLjgsNjMsMjljNTQuNSwxMS41LDgyLjMtMzEuOSwxNDEtNDhDNzQ4LjUtOC4yLDgxMS40LDgzLjMsODYwLDUxDQoJYzQ1LjItMzAuMSw0Ny4yLTE0Ny4xLTgtMjEyYy0zMS4yLTM2LjctNjguNC00Mi4zLTI4Ni01NmMtMjgwLjQtMTcuNy0zNDMuMy0xNi4yLTM5OSwxNGMtMzkuMiwyMS4zLTY0LjksNTEuNC0xMzIsNzINCgljLTI2LDgtNDkuOSwxMS45LTYzLDMzQy00OC4yLTY1LjctMjYuMi0yMC41LTIzLTE0eiIvPg0KPC9zdmc+DQo="},195:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgMTY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MDAgMTY3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZFNzk5O30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTQxLjUsMTQ3LjVjNzAuMS03OC43LDEyNy41LTk0LjgsMTY3LTk1YzQ4LjQtMC4yLDU3LjgsMjMuNiwxNzcsNTRjOTQuOSwyNC4yLDEyOS45LDE5LjUsMTUxLDENCgljMTguNi0xNi4zLDE4LjQtMzYuMiwzOC00MmMyNi44LTgsNDEuNCwyNC45LDc4LDMyYzQ0LjEsOC42LDYzLjYtMzEuNCwxNDQtNjRjMzkuNS0xNiwxMDEuMy00MS4xLDEyOS0xOA0KCWMzMi41LDI3LjEsMjQuNSwxMjUuNy0yNywxODFjLTkwLjMsOTYuOS0yMjYuNy0zMy41LTU0OCw3Yy0xMTYuNCwxNC43LTI0NS44LDUwLjQtMjkzLTEzQy0zNi41LDE3NS43LTQwLjIsMTU5LjQtNDEuNSwxNDcuNXoiLz4NCjwvc3ZnPg0K"},196:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA4MDAgOTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGVsbGlwc2UgY3g9IjM5OC41IiBjeT0iMTg0IiByeD0iNDYyLjUiIHJ5PSIxODMiLz4NCjwvZz4NCjwvc3ZnPg0K"},197:function(t,e,o){t.exports=o.p+"img/discord.cdc55f0.png"},198:function(t,e,o){"use strict";o(187)},199:function(t,e,o){(e=o(54)(!1)).push([t.i,'main[data-v-30236d9f]{color:#fff;width:100%;height:100vh;justify-content:center;background-color:#000}.hero-container[data-v-30236d9f],main[data-v-30236d9f]{display:flex;align-items:center}.hero-container[data-v-30236d9f]{flex-flow:column nowrap}.button-holder[data-v-30236d9f]{display:flex;justify-content:center;width:100%;margin-top:3em}button[data-v-30236d9f]{border-radius:30px;outline:none;border:none;padding:.8em 1em;font-size:1rem;cursor:pointer;margin:0 1em}.discord-logo[data-v-30236d9f]{height:2rem;margin-right:.4em}.add-btn[data-v-30236d9f]{position:relative;background:linear-gradient(45deg,#f0386b,#a01940);display:flex;align-items:center;transition:all .5s ease;z-index:1}.add-btn[data-v-30236d9f]:before{position:absolute;content:"";background:linear-gradient(-45deg,#f03838,#be1010);border-radius:30px;top:0;right:0;bottom:0;left:0;z-index:-1;transition:opacity .2s linear;opacity:0}.add-btn[data-v-30236d9f]:hover:before{opacity:1}.secondary-btn[data-v-30236d9f]{background-color:transparent;border:3px solid #f0386b;color:#f0386b;transition:all .2s ease}.secondary-btn[data-v-30236d9f]:hover{border:3px solid #f03838;color:#f03838}.profile-img[data-v-30236d9f]{height:120px;margin-bottom:1.5em}h1[data-v-30236d9f]{margin:.2em 0;font-size:3em}.tagline[data-v-30236d9f]{font-size:1.5em;font-weight:300;text-align:center;margin:0 2em}',""]),t.exports=e},200:function(t,e,o){"use strict";o(188)},201:function(t,e,o){(e=o(54)(!1)).push([t.i,".command-list-container[data-v-7bc7560a]{position:relative;padding:2em;background-color:#252525;border-radius:15px;transition:all .4s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#afafaf}.command-list-container[data-v-7bc7560a]:hover{background-color:#f8b859;color:#000}.argument[data-v-7bc7560a]{color:#f13e3e}.new[data-v-7bc7560a]{padding:1em;position:absolute;display:flex;justify-content:center;align-items:center;height:30px;background-color:#f13e3e;border-radius:5px;right:-15px;color:#fff;top:-15px;transition:all .2s ease-in-out}.command-list-container:hover .new[data-v-7bc7560a]{background-color:#fff;color:#f13e3e}",""]),t.exports=e},202:function(t,e){t.exports={astronaut:{keyword:".astronaut",argument:"<astronaut name>",description:"Astronaut command without any argument will give you list of all astronauts. Astronaut command with astronaut's name will give his/her details.",shorthands:".astro, .cosmonaut",example:".astro | .astro buzz aldrin",new:!0},upcoming:{keyword:".upcoming",argument:"event",description:"Upcoming command without any argument will give you the next flight details with options to navigate to previous or next. Upcoming command with 'event' argument will give you next event.",example:".upcoming | .upcoming event",new:!0},level:{keyword:".level",argument:"<username>",description:"Displays user's current level/profile.",shorthands:".l, .lvl, .profile",example:".level | .level @astronomia",new:!0},rank:{keyword:".rank",description:"Displays top users.",shorthands:".r",example:".rank",new:!0},video:{keyword:".video",description:"Displays a random video from a curated list.",shorthands:".vid, .v",example:".vid",new:!0},sky:{keyword:".sky",argument:"<theme> <location>",description:"It takes two arguments - 'theme' which is optional and 'location'. Theme can be 'red/white/black/navy'. It gives the sky view of specified location.",shorthands:".s, .skyview",example:".sky boston | .sky white sydney",new:!0},moonphase:{keyword:".moonphase",argument:"<location>",description:"It takes one argument which is the location. It gives moon's phase based on location.",shorthands:".moon",example:".moon tokyo",new:!0},explore:{keyword:".explore",argument:"<celestial object>",description:"Displays info about a specified celestial object.",shorthands:".e",example:".e titan"},facts:{keyword:".facts",description:"Displays a random fact about our universe.",shorthands:".f, .fact",example:".f"},quotes:{keyword:".quotes",description:"Displays a random quote.",shorthands:".q, .quote, .quotation",example:".q"},apod:{keyword:".apod",description:"Displays astronomy photo of the day.",example:".apod"},wallpapers:{keyword:".wallpapers",argument:"real",description:"Displays a random wallpaper. Use real arguemnt to display realistic wallpapers.",shorthands:".w, .wallpaper",example:".w or .w real"},movies:{keyword:".movies",description:"Suggest a random movie.",shorthands:".m, .movie",example:".m"},greetings:{keyword:".hi",argument:"<language>",description:"Greet astronomia.",shorthands:".hello, .hi, .ahoy, .hii, .ciao, .hola",example:".ciao"},version:{keyword:".version",description:"Displays current version of astronomia.",shorthands:".v",example:".v"}}},203:function(t,e,o){"use strict";o(189)},204:function(t,e,o){(e=o(54)(!1)).push([t.i,"article[data-v-029464ba]{margin:0;width:100%;background-color:#ffe799;display:flex;justify-content:center}.command-main[data-v-029464ba]{width:80%;max-width:1000px;display:flex;flex-flow:column;align-items:center;padding-bottom:14em;padding-top:4em}.command-list-grid[data-v-029464ba]{margin-top:3em;display:grid;grid-template-columns:1fr 1fr;grid-gap:2em;gap:2em}.extra-features[data-v-029464ba]{text-align:center;margin-top:2em;padding:2em;background-color:#f13e3e;border-radius:15px;width:100%;transition:all .4s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#000}.extra-features>p[data-v-029464ba]{z-index:2;font-size:1.2em}@media only screen and (max-width:975px){.command-list-grid[data-v-029464ba]{grid-template-columns:1fr}}",""]),t.exports=e},205:function(t,e,o){"use strict";o(190)},206:function(t,e,o){(e=o(54)(!1)).push([t.i,'.quote-container[data-v-5d551341]{margin:20em 0;display:flex;justify-content:center}blockquote[data-v-5d551341]{font-family:"Dancing Script";font-size:clamp(1.8em,2.6vw,2.6vw);font-weight:600;text-align:center;margin:0 2em}footer[data-v-5d551341]{width:100%;background-color:#000;height:400px;color:#fff;justify-content:center}.footer-container[data-v-5d551341],footer[data-v-5d551341]{display:flex;align-items:center}.footer-container[data-v-5d551341]{width:80%;max-width:800px;justify-content:space-around;flex-flow:row wrap}.footer-container h2[data-v-5d551341]{margin:2em;text-align:center}footer a[data-v-5d551341]{color:#f13e3e}footer img[data-v-5d551341]{height:100px}.curve-three[data-v-5d551341]{width:100%;background-color:#ffe799;vertical-align:bottom;margin-bottom:-5px}',""]),t.exports=e},207:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"quote-container"},[e("blockquote",[this._v("\n      “Somewhere, something incredible is waiting to be known.” - Carl Sagan\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"curve-three"},[e("img",{attrs:{src:o(196),"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"footer-container"},[e("img",{attrs:{src:o(186),alt:"astronomia profile"}}),this._v(" "),e("h2",[this._v("\n        You can help me by\n        "),e("a",{attrs:{href:"https://top.gg/bot/765063751208402944/vote",target:"_blank",rel:"noreferrer"}},[e("span",[e("u",[this._v("voting")])])]),this._v("\n        or\n        "),e("a",{attrs:{href:"https://github.com/ayushman-git/astronomia-bot",target:"_blank",rel:"noreferrer"}},[e("span",[e("u",[this._v("contributing")])])]),this._v(".\n      ")])])])}],r=o(191),c=(o(192),{name:"App",components:{Hero:r.default}}),d=(o(205),o(22)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Hero"),t._v(" "),n("img",{attrs:{src:o(194)}}),t._v(" "),t._m(0),t._v(" "),n("img",{staticStyle:{"vertical-align":"bottom","margin-bottom":"-2px"},attrs:{src:o(195),"aria-hidden":"true"}}),t._v(" "),n("CommandContainer",{attrs:{id:"command-container"}}),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)}),n,!1,null,"5d551341",null);e.default=component.exports;installComponents(component,{Hero:o(191).default,CommandContainer:o(192).default})}}]);