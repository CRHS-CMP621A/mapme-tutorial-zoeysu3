navigator.geolocation.getCurrentPosition(function(position) {
       // console.log(position);
       const latitude = position.coords.latitude;
       const longitude = position.coords.longitude;
       console.log(latitude, longitude);

    //    var map = L.map('map').setView([51.505, -0.09], 13);
       const coords= [latitude,longitude]
       var map = L.map('map').setView(coords,13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
           attribution: '&copy; <a href ="https://www.openstreetmap.org/copyright">OpenSreetMap</a> contributors'
           }).addTo(map); 
    L.marker(coords,13). addTo(map)  
            .bindPopup('A pretty CSS3 popup. <br> Easily customizable.') 
            .openPopup();
    //console.log(map)
    map.on('click', function(mapEvent){
            FormData.classList.remove('hidden');
            inputDistance.focus();
            console.log(mapEvent)
            const lat= mapEvent.latlng.lat
            const lng= mapEvent.latlng.lng
    L.marker([lat,lng]).addTo(map)
                .bindPopup(L.popup({
                    maxWidth:250,
                    minWidth:100,
                    autoClose:false,
                    closeOnClick:false,
                    className:'running-popup',
                }))
                .setPopupContent('Workout')
                .openPopup();
        })
    },
    function (){
        alert("Could not get position.")
    }
);