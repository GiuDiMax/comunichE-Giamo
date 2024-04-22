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
	marker.bindPopup("<b>MuPa</b><br>Museo-Palazzo Multimediale, <a href='"+baseUrl+"/mupa.html'>Scopri di più</a>");

	marker = L.marker([40.5905576,16.6888547]).addTo(map);
	marker.bindPopup("<b>Cava di ginosa</b><a href='"+baseUrl+"/cavadiginosa.html.html'>Scopri di più</a>");

	marker = L.marker([40.57883525174568,16.7569409]).addTo(map);
	marker.bindPopup("<b>Sartoria inglese</b><br><a href='"+baseUrl+"/sartoriainglese.html'>Scopri di più</a>");

	marker = L.marker([40.5617461,16.7660327]).addTo(map);
	marker.bindPopup("<b>Museo degli attrezzi</b><br>Il museo del signor Franco <a href='"+baseUrl+"/museolocale.html'>Scopri di più</a>");

	marker = L.marker([40.584236109645275, 16.759024364097627]).addTo(map);
	marker.bindPopup("<b>Ulivo pensante</b><br>Un ulivo con una faccia munita di occhi, naso e sopraciglio <a href='"+baseUrl+"/ulivopensante.html'>Scopri di più</a>");
}



window.addEventListener("load", (event) => {
  leafmap();
});