var express = require('express');
var app = express();

// Top 25 iTunes Albums (2015-02-03)
var albumList = {albums: [
	{albumName: "1989 (Deluxe)", albumArtist: "Taylor Swift"},
	{albumName: "Built On Glass", albumArtist: "Chet Faker"},
	{albumName: "1000 Forms of Fear", albumArtist: "Sia"},
	{albumName: "1989", albumArtist: "Taylor Swift"},
	{albumName: "x (Deluxe Edition)", albumArtist: "Ed Sheeran"},
	{albumName: "Title (Deluxe)", albumArtist: "Meghan Trainor"},
	{albumName: "Down To Earth", albumArtist: "Flight Facilities"},
	{albumName: "Hozier (Bonus Tracks Version)", albumArtist: "Hozier"},
	{albumName: "In the Lonely Hour (Deluxe Edition)", albumArtist: "Sam Smith"},
	{albumName: "This Is All Yours", albumArtist: "alt-J"},
	{albumName: "Aerial Love - EP", albumArtist: "Daniel Johns"},
	{albumName: "Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)", albumArtist: "Various Artists"},
	{albumName: "PRISM (Deluxe)", albumArtist: "Katy Perry"},
	{albumName: "So Fresh – The Hits of Summer 2015 + Best Of 2014", albumArtist: "Various Artists"},
	{albumName: "2015 GRAMMY Nominees", albumArtist: "Various Artists"},
	{albumName: "Hold Back the River - EP", albumArtist: "James Bay"},
	{albumName: "MEGMAC - EP", albumArtist: "Meg Mac"},
	{albumName: "FOUR (Deluxe Version)", albumArtist: "One Direction"},
	{albumName: "Blue Planet Eyes", albumArtist: "The Preatures"},
	{albumName: "20.", albumArtist: "Chet Faker"},
	{albumName: "Dream Your Life Away", albumArtist: "Vance Joy"},
	{albumName: "Sadnecessary", albumArtist: "Milky Chance"},
	{albumName: "American Beauty / American Psycho", albumArtist: "Fall Out Boy"},
	{albumName: "Vulnicura", albumArtist: "Björk"},
	{albumName: "Ministry of Sound Chillout Sessions XVII", albumArtist: "Various Artists"}
]};

app.get('/', function(req, res){
	res.send("Album Service\nUsage: /albums/top/:count (>=1, <=25)");
});

app.get('/albums/top/:count', function(req, res){
	var albumsOut = albumList.albums.slice(0, req.params.count);
	res.send(JSON.stringify(albumsOut));
});

app.listen(3000);

