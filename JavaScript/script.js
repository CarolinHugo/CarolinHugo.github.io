// type machine effect
var title = document.querySelector('.title');
var split_text = title.innerText.split('');
title.innerHTML = '';
i = 0
setInterval(function(){AddLetter()}, 125)

function AddLetter() {
    if (i < split_text.length) {
        title.innerHTML += split_text[i];
        i++;
    }
}

// move div in corner
const div = document.querySelector(".title");
let interval;
let count = 0;
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        interval = setInterval(move_div, 40);
        function move_div() {
            if (count === 4) {
                clearInterval(interval)
            } else {
                div.style.top = div.offsetTop - 21 + "px";
                div.style.left = div.offsetLeft - 38 + "px";
                count++;
            }
        }
    }
});

// disappear/appear
document.querySelector(".about").style.display = "none";
document.querySelector(".background").style.display = "none";
document.querySelector(".drop").style.display = "none";
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("disappear").style.display = "none";
        document.querySelector(".drop").style.display = "block";
        document.querySelector(".background").style.display = "block";
        document.querySelector(".about").style.display = "block";
    }
});

// change color
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("core").style.backgroundColor = "black";
        document.querySelector(".title").style.color = "white";
    }
});

// click a-Python
const disp = document.querySelectorAll(".card");
disp.forEach(function(disp) {disp.style.display = "none"});
const toggleCardsButton = document.getElementById("python");
        toggleCardsButton.addEventListener("click", function() {
            const cards = document.querySelectorAll(".card");
            cards.forEach(function(card) {
                if (card.style.display === "none") {
                    card.style.display = "inline-block";
                } else {
                    card.style.display = "none";
                }
            });
});

// click a-C
const buttonOff = document.querySelectorAll(".button");
buttonOff.forEach(function(buttonOff) {buttonOff.style.display = "none"});
const toggleButton = document.getElementById("language-C");
        toggleButton.addEventListener("click", function() {
            const button = document.querySelectorAll(".button");
            button.forEach(function(button) {
                if (button.style.display === "none") {
                    button.style.display = "inline-block";
                } else {
                    button.style.display = "none";
                }
            });
});

// switch python to c
toggleButton.addEventListener("click", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.style.display = "none";
    });
    cgraph.forEach(function(cgraph) {
        cgraph.style.display = "none";
    });
    cep.forEach(function(cep) {
        cep.style.display = "none";
    });
    cusp.forEach(function(cusp) {
        cusp.style.display = "none";
    });
    document.querySelector(".about").style.display = "none";
})

//switch c to python
toggleCardsButton.addEventListener("click", function() {
    const button = document.querySelectorAll(".button");
    button.forEach(function(button) {
        button.style.display = "none";
    });
    cgraph.forEach(function(cgraph) {
        cgraph.style.display = "none";
    });
    cep.forEach(function(cep) {
        cep.style.display = "none";
    });
    cusp.forEach(function(cusp) {
        cusp.style.display = "none";
    });
    document.querySelector(".about").style.display = "none";
});

//switch to title
div.addEventListener("click", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.style.display = "none";
    });
    const button = document.querySelectorAll(".button");
    button.forEach(function(button) {
        button.style.display = "none";
    });
    cgraph.forEach(function(cgraph) {
        cgraph.style.display = "none";
    });
    cep.forEach(function(cep) {
        cep.style.display = "none";
    });
    cusp.forEach(function(cusp) {
        cusp.style.display = "none";
    });
    document.querySelector(".about").style.display = "block";
})

// Graphical Programming
const graph = document.getElementById("b1");
graph.addEventListener("click", function() {
    const button = document.querySelectorAll(".button");
            button.forEach(function(button) {
                if (button.style.display === "inline-block") {
                    button.style.display = "none";
                }
            });
})

// Cards Graphical Programming
const cgraph = document.querySelectorAll(".card-gp");
cgraph.forEach(function(disp) {disp.style.display = "none"});
const cgraphb = document.getElementById("b1");
        cgraphb.addEventListener("click", function() {
            const cards = document.querySelectorAll(".card-gp");
            cards.forEach(function(card) {
                if (card.style.display === "none") {
                    card.style.display = "inline-block";
                }
            });
});

// Elementary Programming
const elem = document.getElementById("b2");
elem.addEventListener("click", function() {
    const button = document.querySelectorAll(".button");
            button.forEach(function(button) {
                if (button.style.display === "inline-block") {
                    button.style.display = "none";
                }
            });
});

// Cards Elementary Programming
const cep = document.querySelectorAll(".card-ep");
cep.forEach(function(disp) {disp.style.display = "none"});
const cepb = document.getElementById("b2");
        cepb.addEventListener("click", function() {
            const cards = document.querySelectorAll(".card-ep");
            cards.forEach(function(card) {
                if (card.style.display === "none") {
                    card.style.display = "inline-block";
                }
            });
});

// Unix System Programming
const unp = document.getElementById("b3");
unp.addEventListener("click", function() {
    const button = document.querySelectorAll(".button");
            button.forEach(function(button) {
                if (button.style.display === "inline-block") {
                    button.style.display = "none";
                }
            });
})

// Cards Unix System Programming
const cusp = document.querySelectorAll(".card-usp");
cusp.forEach(function(disp) {disp.style.display = "none"});
const cuspb = document.getElementById("b3");
        cuspb.addEventListener("click", function() {
            const cards = document.querySelectorAll(".card-usp");
            cards.forEach(function(card) {
                if (card.style.display === "none") {
                    card.style.display = "inline-block";
                }
            });
});
