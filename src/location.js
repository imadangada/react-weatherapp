if (navigator.geolocation) {
    this.getPosition()
    .then((position) => {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    })
    .catch((err) => {
      this.getWeather(28.67, 77.22);
      alert(
        "You have disabled location service."
      );
    });
} else {
  alert("Geolocation not available");
}