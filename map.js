const baseUrl = "/comunichE-Giamo"

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
	
	var marker = L.marker([40.583382253095984, 16.7503409628624]).addTo(map);
	marker.bindPopup("<b>Parrocchia Gesù Risorto</b><br>Prova test 123, <a href='"+baseUrl+"/mariasantissima'>Scopri di più</a>");
	
	marker = L.marker([40.57984587469258, 16.761520409592844]).addTo(map);
	marker.bindPopup("<b>Gravina di Rivolta</b><br>Prova test 123, <a href='"+baseUrl+"/mariasantissima'>Scopri di più</a>");
}



window.addEventListener("load", (event) => {
  leafmap();
});