document.addEventListener("DOMContentLoaded", function () {
    // LINK HTML
    let youtube = document.getElementById("link-a1");
    if (youtube) {
        youtube.addEventListener("mouseover", function() {
            this.innerText = "Jangan di click";
        });
        youtube.addEventListener("mouseleave", function() {
            this.innerText = "Youtube";
        });
    }

    // TABLE HTML
    let nilaiDyo = document.getElementById("nilai-dyo");
    if (nilaiDyo) {
        nilaiDyo.addEventListener("mouseover", function () {
            this.innerText = "70";
        });
        nilaiDyo.addEventListener("mouseleave", function() {
            this.innerText = "?"
        })
    }
    let nilaiRaffi = document.getElementById("nilai-raffi");
    if (nilaiRaffi) {
        nilaiRaffi.addEventListener("mouseover", function () {
            this.innerText = "98";
        });
        nilaiRaffi.addEventListener("mouseleave", function() {
            this.innerText = "?"
        })
    }
    let nilaiRaihan = document.getElementById("nilai-raihan");
    if (nilaiRaihan) {
        nilaiRaihan.addEventListener("mouseover", function () {
            this.innerText = "80";
        });
        nilaiRaihan.addEventListener("mouseleave", function() {
            this.innerText = "?"
        })
    }
    let nilaiAdhit = document.getElementById("nilai-adhit");
    if (nilaiAdhit) {
        nilaiAdhit.addEventListener("mouseover", function () {
            this.innerText = "85";
        });
        nilaiAdhit.addEventListener("mouseleave", function() {
            this.innerText = "?"
        })
    }
    let nilaiDiko = document.getElementById("nilai-diko");
    if (nilaiDiko) {
        nilaiDiko.addEventListener("mouseover", function () {
            this.innerText = "90";
        });
        nilaiDiko.addEventListener("mouseleave", function() {
            this.innerText = "?"
        })
    }
});
