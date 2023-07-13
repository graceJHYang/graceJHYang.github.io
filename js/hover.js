// HOME PAGE HOVER
document.getElementById("popart").onmouseover = function() { bgZone(); };
document.getElementById("popart").onmouseout = function() { mouseOut(); };

document.getElementById("pakngo").onmouseover = function() { bgVerdant(); };
document.getElementById("pakngo").onmouseout = function() { mouseOut(); };

document.getElementById("slojourn").onmouseover = function() { bgStrvnger(); };
document.getElementById("slojourn").onmouseout = function() { mouseOut(); };

document.getElementById("precision").onmouseover = function() { bgTasty(); };
document.getElementById("precision").onmouseout = function() { mouseOut(); };

document.getElementById("stoneartist").onmouseover = function() { bgEsports(); };
document.getElementById("stoneartist").onmouseout = function() { mouseOut(); };


function bgZone() {
    document.getElementById("popart-bg").style.opacity = "1";
}

function bgVerdant() {
    document.getElementById("pakngo-bg").style.opacity = "1";
}

function bgStrvnger() {
    document.getElementById("slojourn-bg").style.opacity = "1";
}

function bgTasty() {
    document.getElementById("precision-bg").style.opacity = "1";
}

function bgEsports() {
    document.getElementById("stoneartist-bg").style.display = "block";
}

function mouseOut() {
    document.getElementById("popart-bg").style.opacity = "0";
    document.getElementById("pakngo-bg").style.opacity = "0";
    document.getElementById("slojourn-bg").style.opacity = "0";
    document.getElementById("precision-bg").style.opacity = "0";
    document.getElementById("stoneartist-bg").style.opacity = "0";
}