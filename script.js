const audio = document.getElementById("heylisten");

function mouseOver() {
    audio.play();
};

const itens = document.querySelectorAll('.tecnology-ul li');
let selectedindex = 0;

const progressBarContent = document.querySelector('.progress-bar-content');

function progressBar() {
    const barWidth = 120/itens.length;
    const completeBar = barWidth * (selectedindex + 1);

    progressBarContent.style.width = `${completeBar}px`;
}

function leftButton() {
    if (selectedindex === 0) {
        itens[selectedindex].className = "tecnology-item";
        selectedindex = itens.length - 1;
        itens[selectedindex].className = "tecnology-item-selected";
        progressBar();
        return;
    }

    itens[selectedindex].className = "tecnology-item";
    selectedindex-=1;
    itens[selectedindex].className = "tecnology-item-selected";
    progressBar();
}

function rigthButton() {
    if (selectedindex === itens.length - 1) {
        itens[selectedindex].className = "tecnology-item";
        selectedindex = 0;
        itens[0].className = "tecnology-item-selected";
        progressBar();
        return;
    }

    itens[selectedindex].className = "tecnology-item";
    selectedindex+=1;
    itens[selectedindex].className = "tecnology-item-selected";
    progressBar();
}

window.onload = progressBar();