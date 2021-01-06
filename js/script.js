mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZ3VudyIsImEiOiJja2o0Mjl3bTUydjV3MnJxajIwbnh0OHRqIn0.hKR9Bu0wDqY9LCGWMmSQ0A';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [101.47281, 0.52], // starting position [lng, lat]
    zoom: 11.3 // starting zoom
});

var places =
{
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.44652129730957, 0.5159384096511939]
        },
        "properties": {
            "title": "Perpustakaan Soeman HS",
            "description": "Perpustakaan modern dan futuristik dengan desain bangunan yang megah dan unik.",
            "icon": "url(https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/07/wisata-pekanbaru.jpg)",
            "tour": "Budaya"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.4508623845303, 0.5267342941449785]
        },
        "properties": {
            "title": "Masjid Agung An Nur",
            "description": "Masjid ini diberi julukan sebagai Taj Mahalnya Riau karena keindahan masjidnya yang memukau.",
            "icon": "url(https://www.itrip.id/wp-content/uploads/2019/07/Masjid-Agung-An-Nur.jpg)",
            "tour": "Religi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.47618807559458, 0.5852471591662143]
        },
        "properties": {
            "title": "Danau Buatan Khayangan",
            "description": "Pengunjung bisa mengelilingi danau dengan menggunakan sampan atau speedboat serta mendaki bukit sekitar danau.",
            "icon": "url(https://www.itrip.id/wp-content/uploads/2019/07/Danau-Buatan-Lembah-Sari.jpg)",
            "tour": "Bahari"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.50055626217166, 0.4934543338338194]
        },
        "properties": {
            "title": "Taman Wisata Alam Mayang",
            "description": "Cocok untuk berkumpul bersama keluarga di akhir pekan. Menyediakan tempat memancing, outbond, area mandi bola, tempat bermain anak-anak, dll.",
            "icon": "url(https://dolanyok.com/wp-content/uploads/alam-mayangn-patung-besar.jpg)",
            "tour": "Alam"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.50271592865737, 0.5938102965294517]
        },
        "properties": {
            "title": "Desa Wisata Okura",
            "description": "Kawasan agrowisata yang dilewati aliran Sungai Siak.",
            "icon": "url(https://wisato.id/wp-content/uploads/2019/07/3-7.jpg)",
            "tour": "Alam"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.47750595195296, 0.4466545096717619]
        },
        "properties": {
            "title": "Riau Fantasi",
            "description": "Taman rekreasi terbesar di Sumatera yang menyediakan wahana basah dan wahana kering.",
            "icon": "url(https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/07/wisata-pekanbaru-12-Okezone.jpg)",
            "tour": "Bahari"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.43605473155394, 0.5351600591868417]
        },
        "properties": {
            "title": "Masjid Senapelan",
            "description": "Salah satu masjid tertua di Riau yang merupakan peninggalan kesultanan Siak.",
            "icon": "url(https://1.bp.blogspot.com/-JiNq4YjFlX8/XRHCUuKnnmI/AAAAAAAADGo/-5JhBiL3Gloq_E3zhT-2iwlEdnbFJOU7wCLcBGAs/s1600/04a.jpg)",
            "tour": "Religi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.5032257677227, 0.46115544496039784]
        },
        "properties": {
            "title": "Agrowisata Tenayan Raya",
            "description": "Memiliki konsep agro-edukasi, pengunjung dapat bercocok tanam, menangkap ikan, memanen sayuran, memetik buah, dan juga outbond.",
            "icon": "url(https://berwissata.com/wp-content/uploads/2020/06/Taman-Agrowisata-Tenayan-Raya-360x300.jpg)",
            "tour": "Edukasi"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.45400355646632, 0.49429722674142634]
        },
        "properties": {
            "title": "Museum Sang Nila Utama",
            "description": "Melihat peninggalan bersejarah provinsi Riau seperti pakaian adat, alat musik, dan benda-benda kerajinan lainnya.",
            "icon": "url(https://kebudayaan.kemdikbud.go.id/bpnbkepri/wp-content/uploads/sites/39/2017/08/Museum.jpg)",
            "tour": "Budaya"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.45588802519562, 0.4782276542847735]
        },
        "properties": {
            "title": "Anjungan Seni Idrus Tintin",
            "description": "Tempat penampilan pertunjukan seni. Para wisatawan dapat berfoto-foto atau duduk santai menikmati keindahan arsitektur tempat ini.",
            "icon": "url(https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/07/wisata-pekanbaru-21-Wikipedia.jpg)",
            "tour": "Budaya"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.44828724491734, 0.5139104572187899]
        },
        "properties": {
            "title": "Taman Putri Kaca Mayang",
            "description": "Ruang terbuka hijau dengan jogging track, area bermain untuk anak dan arena teater.",
            "icon": "url(https://www.halloriau.com/foto_berita/31rth_kaca_mayang.jpg)",
            "tour": "Alam"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.45309656752359, 0.5151712676711772]
        },
        "properties": {
            "title": "Balai Adat Melayu Riau",
            "description": "Tempat pertunjukan seni adat Riau. Para wisatawan dapat berfoto-foto di tempat ini.",
            "icon": "url(https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2018/07/wisata-pekanbaru-23-Situs-Busaya.jpg)",
            "tour": "Budaya"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.46086448736895, 0.581217100127963]
        },
        "properties": {
            "title": "Rainbow Hills",
            "description": "Pemandangan bukit yang jika tampak jauh akan terlihat berwarna-warni. Uniknya, warna yang ada dalam bukit tersebut bisa berubah setiap hari.",
            "icon": "url(https://i0.wp.com/tiketresmi.com/wp-content/uploads/2020/07/rainbow-hills-rumbai-pekanbaru.jpg)",
            "tour": "Alam"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.44394082704811, 0.5385833086594094]
        },
        "properties": {
            "title": "Pasar Bawah",
            "description": "Pasar tertua di Pekanbaru. Menjual berbagai macam aksesoris dan pernak-pernik hingga camilan khas Pekanbaru.",
            "icon": "url(https://4.bp.blogspot.com/-2pTMaT1E33Q/WGHmzmqWyaI/AAAAAAAAB6k/oz97hLKfFCQl0FtEFZTXXWjze33s0EwfACK4B/s640/pasar_bawah_pekanbaru.JPG)",
            "tour": "Belanja"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.4523672963596, 0.5220847526043513]
        },
        "properties": {
            "title": "Dekranasda",
            "description": "Menawarkan berbagai souvenir khas melayu seperti kain songket, batik, tenun, dan kerajinan tangan berbahan dasar kayu.",
            "icon": "url(https://sultansyarifkasim2-airport.co.id/userdata/pariwisata/ads59f813c4c86e4.jpg)",
            "tour": "Belanja"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.50892641847251, 0.5074962851800499]
        },
        "properties": {
            "title": "Asia Farm",
            "description": "Tempat wisata edukasi dengan konsep agrowisata, mall, dan waterpark dengan nuansa ala Eropa.",
            "icon": "url(https://4.bp.blogspot.com/-APms3NyLjVk/XOJfRPFSR7I/AAAAAAAAECU/Xbgbv9v6A2wkOoddFrVs1RpDFfDR-6DdACLcBGAs/s1600/IMG-20190520-WA0008.jpg)",
            "tour": "Edukasi"
        }
    }
]};

// filter group
var filterGroup = document.getElementById('filter-group');
var tourTypes = []; // stores types of tourist spot
var markerList = []; // stores element for each feature

// add markers to map
places.features.forEach(function(marker) {
    // element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = marker.properties.icon;
    el.style.fontSize = 0;
    el.textContent = marker.properties.tour;

    // popup
    var popup = new mapboxgl.Popup({
                        offset: 50,
                        closeButton: false})
                .setHTML('<strong>' + marker.properties.title + '</strong><p>' + marker.properties.description + '</p>');

    // popup on hover
    el.addEventListener('mouseenter', () => {
        popup.addTo(map);
        el.style.width = '80px';
        el.style.height = '80px';
        el.style.zIndex = '10';    
    });
    el.addEventListener('mouseleave', () => {
        popup.remove();
        el.style.width = '40px';
        el.style.height = '40px';  
        el.style.zIndex = '0';    
    });

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    
    markerList.push(el);

    if(!(tourTypes.includes(marker.properties.tour))){
        tourTypes.push(marker.properties.tour);

        // add checkbox and label elements 
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = true;
        filterGroup.appendChild(input);

        var label = document.createElement('label');
        label.textContent = marker.properties.tour;
        filterGroup.appendChild(label);

        label.addEventListener('click', (e) => {
            var vis = input.checked? "hidden" : "visible";
            for (let i = 0; i < markerList.length; i++) {
                if(!(label.textContent.localeCompare(markerList[i].textContent))){
                    markerList[i].style.visibility = vis;
                }
            }
            input.checked = !input.checked; 
        });
    }
});

// hotel
var hotel = 'https://gist.githubusercontent.com/anggunw/1a9cf3fbbb3974510fa6c82ecb49198f/raw/26e318ee5e7775a3f4efb703c64925c41eabd5ff/hotel.geojson';

map.on('load', function(){
    map.addLayer({
        id: 'hotel',
        type: 'symbol',
        source: {
            type: 'geojson',
            data: hotel
        },
        layout: {
            'icon-image': 'lodging-15',
            'icon-allow-overlap': true
        }
    });

    // nearest tourist place
    map.addSource('nearest', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [

            ]
        }
    });
});

var popupHotel = new mapboxgl.Popup({
                    offset: 20,
                    closeButton: false});

// hover hotel
map.on('mousemove', function(e){
    var features = map.queryRenderedFeatures(e.point, {layers: ['hotel']});
    if(!features.length){
        popupHotel.remove();
        return;
    }
    var feature = features[0];
    popupHotel.setLngLat(feature.geometry.coordinates)
        .setHTML('<strong>' + feature.properties.title + '</strong><p>' + feature.properties.description + '</p>')
        .addTo(map);
    
    map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});

// find nearest tourist place from hotel
map.on('click', function(e){
    var hotelFeatures = map.queryRenderedFeatures(e.point, { layers: ['hotel']});
    if(!hotelFeatures.length){
        return;
    }
    var hotelFeature = hotelFeatures[0];

    var nearest = turf.nearest(hotelFeature, places);

    //console.log(nearest.properties.tour);
    //console.log(filterGroup.children[1].textContent);

    // if nearest tourist place found
    if(nearest !== null){
        // update the nearest place data source
        map.getSource('nearest').setData({
            type: 'FeatureCollection',
            features: [
                nearest
            ]
        });
        
        // create a new circle layer from the nearest data source
        map.addLayer({
            id: 'nearest',
            type: 'circle',
            source: 'nearest',
            paint: {
                'circle-radius': 30,
                'circle-color': '#486de0'
            }
        });

        // remove circle layer for nearest tourist location after 3s
        setTimeout(function(){
            map.removeLayer('nearest');
        }, 3000);
    }
});

// driving direction
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        language: 'id-ID'
    }),
    'top-left'
);