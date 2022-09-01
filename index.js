// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 53.7433, lng: -2.9395 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    // The marker, positioned at Uluru
  
    const image ="images/mapmarker.png";
  const Marker = new google.maps.Marker({
    position: { lat: 53.7433, lng: -2.9395 },
    map,
    icon: image,
    });
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  
  window.initMap = initMap;

