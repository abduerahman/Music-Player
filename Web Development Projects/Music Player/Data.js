var data = [
    {
      name:"chandelier",
      artist: "sia",
      src:"./data/01-chandelier.mp3",
      image:"./images/chandiler.jfif"   
    },{
        name:"Ambitionz",
        artist:"2pac",
        src:"./data/2Pac   Ambitionz az a ridah [HD]-teeo0-287797149e006bb986911eb5cadcdd7d.mp3",
        image: "./images/my ambitionz.jfif"
    },{
        name:"Dear Mama",
        artist: "2pac",
        src:"./data/2Pac  Dear Mama (Official Music Video).m4a",
        image:"./images/Dear Mama.jfif"
    },{
        name:"Time",
        artist:"Hans Zimmer",
        src:"./data/Time-Hans Zimmer.mp3",
        image:"./images/Time.jfif"
    }

];

let cuurentIndex = 0;
var audio = document.querySelector('audio');
var plat = document.querySelector('#play');
var image = document.querySelector('img');
var right = document.querySelector('#right');
var left = document.querySelector('#left');
var songName = document.querySelector("#songName");
var artist = document.querySelector("#singerName");


function loading(currentSong){
    image.src= currentSong.image;
    audio.src = currentSong.src;
    songName.textContent = currentSong.name;
    artist.textContent = currentSong.artist;
    plat.classList.replace("fa-play","fa-pause");
    image.style.transform= "rotate(360deg)";
    audio.play();
}

plat.onclick = () =>{
    if(plat.classList.contains("fa-play")){
        audio.play();
        plat.classList.replace("fa-play","fa-pause");
        image.style.transform= "rotate(360deg)";
    }
    else{
        audio.pause();
        plat.classList.replace("fa-pause","fa-play");
    }
}

right.onclick =() =>{
    cuurentIndex += 1;
    if(cuurentIndex == data.length){
        cuurentIndex = 0;
    }
    loading(data[cuurentIndex]);
}

left.onclick =() =>{
    console.log(left);
    cuurentIndex -= 1;
    if(cuurentIndex == -1){
        cuurentIndex = data.length-1;
    }
    loading(data[cuurentIndex]);
}