export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')
  webFontLoader.default.load({
    google: {
      families: [
        'Montserrat:wght@100..900',
      ],
    },
  })
}
