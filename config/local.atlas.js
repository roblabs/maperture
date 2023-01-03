const mapboxGlAccessToken =
  'pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg';

// Set `mapbox.baseApiUrl` if your Mapbox flavored style uses a different server than `api.mapbox.com`.
const mapboxBaseApiUrl = 'https://atlas-stg.geoplatform.gov'

// Example of setting up a gazetteer object. This is described in the `README`
// but these are the options that populate the dropdown in the UI that take you
// to specific locations or map views. You can add as many as you like here and
// create groupings (in this example, the only group is called Locations).
const gazetteer = {
  Units: [
    {
      'San Francisco, CA': {
        zoom: 6,
        center: { lng: -122.4193, lat: 37.7648 },
      },
    },
    {
      'Washington DC': {
        zoom: 6, 
        center: { lng: -77.0435, lat: 38.9098 } },
    },
  ],
};

const stylePresets = [
  {
    id: 'ck58pyquo009v01p99xebegr9',
    name: 'Park Tiles 4 Standard',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck58pyquo009v01p99xebegr9?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg'
  },
  {
    id: 'ck72fwp2642dv07o7tbqinvz4',
    name: 'Park Tiles 4 Imagery',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck72fwp2642dv07o7tbqinvz4?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg'
  },
  {
    id: 'ck5cpia2u0auf01p9vbugvcpv',
    name: 'Park Tiles 4 Light',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ck5cpia2u0auf01p9vbugvcpv?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg'
  },
  {
    id: 'ckevxkdh1k0ru07r0k2eznkzp',
    name: 'Park Tiles 4 Slate',
    type: 'mapbox-gl',
    url: 'https://atlas-stg.geoplatform.gov/styles/v1/atlas-user/ckevxkdh1k0ru07r0k2eznkzp?access_token=pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg'
  }
];

export { 
  gazetteer,
  mapboxGlAccessToken, 
  mapboxBaseApiUrl,
  stylePresets
};