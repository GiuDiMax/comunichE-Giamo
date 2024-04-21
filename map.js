function leafmap(){
	map = L.map('map',
	{
		zoomControl: false,
	}).setView([40.5753721,16.7620123], 15);
	
	//https://tile.openstreetmap.org/{z}/{x}/{y}.png
	//map/{x}-{y}-{z}.jpg
	L.tileLayer('map/{x}-{y}-{z}.jpg', {
		minZoom: 15,
		maxZoom: 17,
	}).addTo(map);
	
	var marker = L.marker([40.57368814705567, 16.756674491077295]).addTo(map);
	marker.bindPopup("<b>Kaleidoscopio Lab</b><br>Studio fotografico, <a href='"+baseUrl+"/kaleidoscopio.html'>Scopri di più</a>");


	marker = L.marker([40.5794886,16.7571049]).addTo(map);
	marker.bindPopup("<b>MuPa</b><br>Prova test 123, <a href='"+baseUrl+"/mupa.html'>Scopri di più</a>");
}



window.addEventListener("load", (event) => {
  leafmap();
});