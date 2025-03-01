// Seting the date we have to count to :
var CountDownDate = new Date("March 21, 2025 , 17:00:00").getTime();
// update the counter every 1 second :
var x = setInterval(function() {
    // get today's date and time :
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance =  CountDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id=" " 
    document.getElementById("days").innerHTML = days + "\nDays"
    document.getElementById("hours").innerHTML = hours + "\nHours"
    document.getElementById("minutes").innerHTML = minutes + "\nMinutes"
    document.getElementById("seconds").innerHTML = seconds + "\nSeconds"
}, 1000)

//  Displaying video when user clicks on Reveal Button :
function video() {
    var DisplayVideo = document.getElementById("ThemeVideo");
    if (DisplayVideo.style.display === "none") {
        DisplayVideo.style.display = "block";
        DisplayVideo.play(); //start playing the video when shown
    }
    
}