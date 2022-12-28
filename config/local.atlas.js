const mapboxGlAccessToken =
  'pk.eyJ1IjoiYXRsYXMtdXNlciIsImEiOiJjazFmdGx2bjQwMDAwMG5wZmYwbmJwbmE2In0.lWXK2UexpXuyVitesLdwUg';

// Set `mapbox.baseApiUrl` if your Mapbox flavored style uses a different server than `api.mapbox.com`.
const mapboxBaseApiUrl = 'https://atlas-stg.geoplatform.gov'

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

export { mapboxGlAccessToken, 
  mapboxBaseApiUrl,
  stylePresets
};