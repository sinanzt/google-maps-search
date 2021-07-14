let personLocationList = [
    {name: "Oliver Jake	", lat: 54.624477, long: -3.093323},
    {name: "Jack Connor	", lat: 54.682134, long: -2.129352},
    {name: "Harry Callum", lat: 54.005573, long: -2.668018},
    {name: "Jacob George", lat: 52.813402, long: -3.663394},
    {name: "Charlie Kyle", lat: 52.773881, long: -2.049404},
    {name: "Thomas Joe", lat: 52.681731, long: 0.842925},
    {name: "George Reece", lat: 51.575611, long: -1.763236},
    {name: "Oscar Rhys Jacob", lat: 51.117067, long: 0.154294},
    {name: "James Charlie", lat: 50.811047, long: -4.133862},
    {name: "William Damian", lat: 55.531083, long: -2.876747}
];


function initMapWithPersonLocation(locationList = personLocationList) {
    const origin = new google.maps.LatLng(53.019686, -1.708864);
    const options = {
      center: origin,
      animation: google.maps.Animation.DROP,
      zoom: 6
    };

    const map = new google.maps.Map(document.getElementById('map'), options);

    for (const personLocation of locationList) {

      const marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {lat: personLocation.lat, lng: personLocation.long},
        map,
        icon: {
          url: './location-marker.gif',
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      marker.setMap(map);

      const iw = new google.maps.InfoWindow({
        content: personLocation.name,
      });
      google.maps.event.addListener(marker, 'click', function (e) {
        iw.open(map, this);
      });

      google.maps.event.addListener(map, 'click', function () {
        iw.close();
      });
    }
}

function searchPersonOnMap() {
    const searchText = document.getElementById("searchText").value;
    if (searchText.trim().length > 2) {
      let filteredPersonLocationList = personLocationList.filter(
        (item) =>
          item.name
            .toLowerCase()
            .indexOf(searchText) > -1
      );
      this.initMapWithPersonLocation(filteredPersonLocationList);
    }
  }

initMapWithPersonLocation();