const mapboxGlAccessToken =
  'pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg';

// Set `mapbox.baseApiUrl` if your Mapbox flavored style uses a different server than `api.mapbox.com`.
const mapboxBaseApiUrl = 'https://atlas-stg.geoplatform.gov';

// Example of setting up a gazetteer object. This is described in the `README`
// but these are the options that populate the dropdown in the UI that take you
// to specific locations or map views. You can add as many as you like here and
// create groupings (in this example, the only group is called Locations).
const gazetteer = {
  Units: [
    {
      'Alaska (Anchorage)': { zoom: 6, center: { lng: -150.038, lat: 61.286 } },
    },
    {
      'Intermountain (Denver & Santa Fe)': {
        zoom: 6,
        center: { lng: -105.769, lat: 38.449 },
      },
    },
    {
      'Midwest (Omaha)': {
        zoom: 6,
        center: { lng: -95.941089, lat: 41.257086 },
      },
    },
    {
      'National Capital (Washington, D.C.)': {
        zoom: 6,
        center: { lng: -77.0435, lat: 38.9098 },
      },
    },
    {
      'Northeast (Boston)': {
        zoom: 6,
        center: { lng: -71.057279, lat: 42.360256 },
      },
    },
    {
      'Pacific West (Hawaii)': {
        zoom: 6,
        center: { lng: -156.161, lat: 20.18 },
      },
    },
    {
      'Pacific West (San Francisco)': {
        zoom: 6,
        center: { lng: -122.4193, lat: 37.7648 },
      },
    },
    {
      'Southeast (Atlanta)': {
        zoom: 6,
        center: { lng: -84.390865, lat: 33.748188 },
      },
    },
    { Acadia: { zoom: 6, center: { lng: -68.358, lat: 44.343 } } },
    { 'Yosemite NP': { zoom: 6, center: { lng: -119.929, lat: 37.69 } } },
  ],
};

const stylePresets = [
  {
    id: 'ck58pyquo009v01p99xebegr9',
    name: 'Park Tiles 4 Standard',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck58pyquo009v01p99xebegr9?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg',
    attribution:
      '<a href="https://nps.gov/maps/web">@NPMap from the National Park Service</a>',
  },
  {
    id: 'ck72fwp2642dv07o7tbqinvz4',
    name: 'Park Tiles 4 Imagery',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck72fwp2642dv07o7tbqinvz4?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg',
    attribution:
      '<a href="https://nps.gov/maps/web">@NPMap from the National Park Service</a>',
  },
  {
    id: 'ck5cpia2u0auf01p9vbugvcpv',
    name: 'Park Tiles 4 Light',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck5cpia2u0auf01p9vbugvcpv?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg',
    attribution:
      '<a href="https://nps.gov/maps/web">@NPMap from the National Park Service</a>',
  },
  {
    id: 'ckevxkdh1k0ru07r0k2eznkzp',
    name: 'Park Tiles 4 Slate',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ckevxkdh1k0ru07r0k2eznkzp?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg',
    attribution:
      '<a href="https://nps.gov/maps/web">@NPMap from the National Park Service</a>',
  },
];

export { gazetteer, mapboxGlAccessToken, mapboxBaseApiUrl, stylePresets };
