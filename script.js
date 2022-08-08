console.log("welcome to spotify");

//  Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    { songName: " Sage", filepath:     "songs/1.mp3",        coverPath: "image/Nucleya and ritviz .jpeg" },
    { songName: " Ari Arie", filepath: "songs/2.mp3", coverPath: "image/Nucleya and ritviz .jpeg" },
    { songName: " Baaraat", filepath:  "songs/3.mp3", coverPath: "image/Nucleya and ritviz .jpeg" },
    { songName: " Roz", filepath:      "songs/4.mp3",     coverPath: "image/Nucleya and ritviz .jpeg" },
    { songName: " sath", filepath:     "songs/5.mp3",                    coverPath: "image/Nucleya and ritviz .jpeg" },
]
songItems.forEach(function (element, i) {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    const newLocal = element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//  audioElement.play;
//Hendle play/pause click
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
// Listen to Events

audioElement.addEventListener("timeupdate", () => {

    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
})

myProgressBar.addEventListener("change", function () {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click" , (e)=>{
            console.log(e.target);
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play(); 
            gif.style.opacity = 1;         
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add("fa-circle-pause");

            
    })
})

document.getElementById("next").addEventListener("click" , ()=>{
    if(songIndex>=4){
        songIndex= 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();          
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add("fa-circle-pause");

   
})

document.getElementById("previous").addEventListener("click" , ()=>{
    if(songIndex<=0){
        songIndex= 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();          
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add("fa-circle-pause");

   
})