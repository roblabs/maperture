// const mapboxGlAccessToken = '';  /* Token is Not used in the MapLibre demos */

// Example of setting up a gazetteer object. This is described in the `README`
// but these are the options that populate the dropdown in the UI that take you
// to specific locations or map views. You can add as many as you like here and
// create groupings (in this example, the only group is called Locations).
const gazetteer = {
  Locations: [
    {
      'San Francisco, CA': {
        zoom: 6,
        center: { lng: -122.4193, lat: 37.7648 },
      },
    },
    {
      'Washington DC': {
        zoom: 6,
        center: { lng: -77.0435, lat: 38.9098 },
      },
    },
  ],
};

const stylePresets = [
  {
    id: 'world-imagery',
    name: 'World Imagery',
    type: 'maplibre-gl',
    url: 'https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/arcgis-world-imagery.json',
  },
  {
    id: 'usda-naip',
    name: 'USDA NAIP',
    type: 'maplibre-gl',
    url: 'https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/usda-naip.json',
  },
];

export { gazetteer, stylePresets };
