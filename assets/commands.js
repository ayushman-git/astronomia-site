module.exports = {
  astronaut: {
    keyword: ".astronaut",
    argument: "<astronaut name>",
    description:
      "Astronaut command without any argument will give you list of all astronauts. Astronaut command with astronaut's name will give his/her details.",
    shorthands: ".astro, .cosmonaut",
    example: ".astro | .astro buzz aldrin",
    new: true
  },
  upcoming: {
    keyword: ".upcoming",
    argument: "event",
    description:
      "Upcoming command without any argument will give you the next flight details with options to navigate to previous or next. Upcoming command with 'event' argument will give you next event.",
    example: ".upcoming | .upcoming event",
    new: true
  },
  level: {
    keyword: ".level",
    argument: "<username>",
    description:
      "Displays user's current level/profile.",
    shorthands: ".l, .lvl, .profile",
    example: ".level | .level @astronomia",
    new: true
  },
  rank: {
    keyword: ".rank",
    description:
      "Displays top users.",
    shorthands: ".r",
    example: ".rank",
    new: true
  },
  video: {
    keyword: ".video",
    description:
      "Displays a random video from a curated list.",
    shorthands: ".vid, .v",
    example: ".vid",
    new: true
  },
  sky: {
    keyword: ".sky",
    argument: "<theme> <location>",
    description:
      "It takes two arguments - 'theme' which is optional and 'location'. Theme can be 'red/white/black/navy'. It gives the sky view of specified location.",
    shorthands: ".s, .skyview",
    example: ".sky boston | .sky white sydney",
    new: true
  },
  moonphase: {
    keyword: ".moonphase",
    argument: "<location>",
    description:
      "It takes one argument which is the location. It gives moon's phase based on location.",
    shorthands: ".moon",
    example: ".moon tokyo",
    new: true
  },
  explore: {
    keyword: ".explore",
    argument: "<celestial object>",
    description: "Displays info about a specified celestial object.",
    shorthands: ".e",
    example: ".e titan"
  },
  facts: {
    keyword: ".facts",
    description: "Displays a random fact about our universe.",
    shorthands: ".f, .fact",
    example: ".f"
  },
  quotes: {
    keyword: ".quotes",
    description: "Displays a random quote.",
    shorthands: ".q, .quote, .quotation",
    example: ".q"
  },
  apod: {
    keyword: ".apod",
    description: "Displays astronomy photo of the day.",
    example: ".apod"
  },
  wallpapers: {
    keyword: ".wallpapers",
    argument: "real",
    description:
      "Displays a random wallpaper. Use real arguemnt to display realistic wallpapers.",
    shorthands: ".w, .wallpaper",
    example: ".w or .w real"
  },
  movies: {
    keyword: ".movies",
    description: "Suggest a random movie.",
    shorthands: ".m, .movie",
    example: ".m"
  },
  greetings: {
    keyword: ".hi",
    argument: "<language>",
    description: "Greet astronomia.",
    shorthands: ".hello, .hi, .ahoy, .hii, .ciao, .hola",
    example: ".ciao"
  },
  version: {
    keyword: ".version",
    description: "Displays current version of astronomia.",
    shorthands: ".v",
    example: ".v"
  }
};
