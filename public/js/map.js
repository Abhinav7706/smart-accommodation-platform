maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element in which the SDK will render the map 
  style: maptilersdk.MapStyle.STREETS,
  center: [78.9629,20.5937], // starting position [lng, lat]
  zoom : 9, // starting zoom
});


map.on("load", () => {
  // Safety check — coordinates must exist and not be [0,0]
  if (
    listing.geometry &&
    listing.geometry.coordinates &&
    listing.geometry.coordinates[0] !== 0
  ) {
    const [lng, lat] = listing.geometry.coordinates;

    // Fly to listing location
    map.flyTo({ center: [lng, lat], zoom: 10 });

    // Popup content
    const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h4 style="margin:0">${listing.title}</h4>
       <p style="margin:4px 0 0">${listing.location}, ${listing.country}</p>`
    );


    // Add marker
    new maptilersdk.Marker({ color: "#FE424D" })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(map);
  } else {
    console.warn(" No valid coordinates found for this listing.");
  }
});










// public/js/map.js

// maptilersdk.config.apiKey = mapToken;

// const map = new maptilersdk.Map({
//   container: "map",                        // matches div id="map"
//   style: maptilersdk.MapStyle.STREETS,     // or HYBRID for satellite
//   center: [77.209, 28.6139],              // default: center of India
//   zoom: 4,
// });

// Add Navigation Controls
// map.addControl(new maptilersdk.NavigationControl(), "top-right");

//Add Geocoding  Search Control
// map.addControl(
//   new maptilersdk.GeocodingControl({ apiKey: mapToken }),
//   "top-left"
// );

// Add Marker for the listing location (if coordinates exist)
// map.on("load", () => {
//   if (listing.geometry && listing.geometry.coordinates) {
//     const [lng, lat] = listing.geometry.coordinates;

//     // Update map center to listing location
//     map.setCenter([lng, lat]);
//     map.setZoom(10);

    // Add marker with popup
//     const popup = new maptilersdk.Popup({ offset: 25 })
//       .setHTML(`<h4>${listing.title}</h4><p>${listing.location}</p>`);

//     new maptilersdk.Marker({ color: "#FE424D" })
//       .setLngLat([lng, lat])
//       .setPopup(popup)
//       .addTo(map);
//   }
// });