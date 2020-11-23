module.exports =   {
  explore: {
    keyword: ".explore",
    argument: "<celestial object>",
    description: "Displays info about a specified celestial object.",
    shorthands: ".e",
    example: ".e moon",
  },
  facts: {
    keyword: ".facts",
    description: "Displays a random fact about our universe.",
    shorthands: ".f, .fact",
    example: ".f",
  },
  quotes: {
    keyword: ".quotes",
    description: "Displays a random quote.",
    shorthands: ".q, .quote, .quotation",
    example: ".q",
  },
  apod: {
    keyword: ".apod",
    description: "Displays astronomy photo of the day.",
    example: ".apod",
  },
  wallpapers: {
    keyword: ".wallpapers",
    argument: "real",
    description:
      "Displays a random wallpaper. Use real arguemnt to display realistic wallpapers.",
    shorthands: ".w, .wallpaper",
    example: ".w or .w real",
  },
  movies: {
    keyword: ".movies",
    description: "Suggest a random movie.",
    shorthands: ".m, .movie",
    example: ".m",
  },
  greetings: {
    keyword: ".hi",
    argument: "<language>",
    description: "Greet astronomia.",
    shorthands: ".hello, .hi, .ahoy, .hii, .ciao, .hola",
    example: ".ciao",
  },
   version: {
    keyword: ".version",
    description: "Displays current version of astronomia.",
    shorthands: ".v",
    example: ".v",
  },
}