// const mapboxGlAccessToken = '';

const stylePresets = [
  {
    id: 'maplibre-demotiles',
    name: 'MapLibre',
    type: 'maplibre-gl',
    url: 'https://demotiles.maplibre.org/style.json'
  },
  {
    id: 'naturalearthtiles',
    name: 'Natural Earth Tiles',
    type: 'maplibre-gl',
    url: 'https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/naturalearthtiles.json'
  },
  {
    id: 'geography-class',
    name: 'Geography Class',
    type: 'maplibre-gl',
    url: 'https://raw.githubusercontent.com/roblabs/openmaptiles-ios-demo/master/OSM2VectorTiles/styles/geography-class.GitHub.json'
  }
];

export { stylePresets };