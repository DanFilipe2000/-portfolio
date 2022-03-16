let audio = document.getElementById("heylisten");

function mouseOver() {
    audio.play();
};

let itens = document.querySelectorAll('.tecnology-ul li');
let selectedindex = 0;

function leftButton() {
    if (selectedindex === 0) {
        itens[selectedindex].className = "tecnology-item";
        selectedindex = itens.length - 1;
        itens[selectedindex].className = "tecnology-item-selected";
        return;
    }

    itens[selectedindex].className = "tecnology-item";
    selectedindex-=1;
    itens[selectedindex].className = "tecnology-item-selected";
}

function rigthButton() {
    if (selectedindex === itens.length - 1) {
        itens[selectedindex].className = "tecnology-item";
        selectedindex = 0;
        itens[0].className = "tecnology-item-selected";
        return;
    }

    itens[selectedindex].className = "tecnology-item";
    selectedindex+=1;
    itens[selectedindex].className = "tecnology-item-selected";
}
