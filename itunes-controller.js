function ItunesController() {
    var itunesService = new ItunesService()
        //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
    }

    //Start coding here
    function draw(songList) {
        var template = ''
        for (var i = 0; i < songList.length; i++) {
            var song = songList[i];
            template += `
<div class="col-md-5 card text-center">
        <h3>${song.title}</h3>
         <img src="${song.albumArt}">
       <h4>${song.artist}</h4>
        <h6>${song.collection}</h6>
        <h5>${song.price}</h5>
        <audio controls class="audio">
        <source src="${song.preview}" type="audio/ogg" >
        </audio>
</div>
`
        }
        document.getElementById("songs").innerHTML = template
        document.addEventListener('play', function(e) {
            var audios = document.getElementsByClassName('audio');
            for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] != e.target) {
                    audios[i].pause();
                }
            }
        }, true);

    }
}