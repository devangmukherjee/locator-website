mapboxgl.accessToken ='pk.eyJ1IjoiZGV2YW5nMTIzNDUiLCJhIjoiY2tjeGhnZDRvMDAydTJ3b3U4cGNncTN3ayJ9.SY6OIMGgxfkjwJNhiPxKAQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 10,
    center: [72.8697, 19.1136]
});

async function getStores() {
    const res = await fetch('/api/v1/stores');
    const data = await res.json();

    console.log(data);
  
    // const stores = data.data.map(store => {
    //   return {
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [
    //         store.location.coordinates[0],
    //         store.location.coordinates[1]
    //       ]
    //     },
    //     properties: {
    //       storeId: store.storeId,
    //       icon: 'shop'
    //     }
    //   };
    // });
  
    // loadMap(stores);
  }
  
  // Load map with stores
  function loadMap(stores) {
    map.on('load', function() {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: stores,
          }
        },
        layout: {
          'icon-image': '{icon}-15',
          'icon-size': 1.5,
          'text-field': '{storeId}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.9],
          'text-anchor': 'top'
        }
      });
    });
  }
  
  getStores();

/////////////////////////////////////////////
// async function getStores() {
//     const res = await fetch('/api/v1/stores');
//     const data = await res.json();

//     console.log(res);
// }
  
//     // const stores = data.data.map(store => {
//     //   return {
//     //     type: 'Feature',
//     //     geometry: {
//     //       type: 'Point',
//     //       coordinates: [
//     //         store.location.coordinates[0],
//     //         store.location.coordinates[1]
//     //       ]
//     //     },
//     //     properties: {
//     //         pincode: store.address,
//     //         icon: 'hospital'
//     //     }
//     //   };
//     // });
  
//     // loadMap(stores);
  

// function loadMap(stores) {
//     map.on('load', function() {
//       map.addLayer({
//         id: 'points',
//         type: 'symbol',
//         source: {
//           type: 'geojson',
//           data: {
//             type: 'FeatureCollection',
//              features: stores,
//              //[
//             //     {
//             //         type: 'Feature',
//             //         geometry: {
//             //             type: 'Point',
//             //             coordinates: [72.8697, 19.1136]
//             //         },
//             //         properties: {
//             //             pincode: '400050',
//             //             icon: 'marker'
//             //         }
//             //     }
//             // ]
//           }
//         },
//         layout: {
//           'icon-image': '{icon}-15',
//           'icon-size': 2,
//           'text-field': '{pincode}',
//           'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
//           'text-offset': [0, 0.9],
//           'text-anchor': 'top'
//         }
//       });
//     });
//   }
  
//   getStores();