// Seleziona tutti gli elementi con la classe 'myClass'
var elements = document.getElementsByClassName('fixed-top');

// Aggiungi la classe 'newClass' a tutti gli elementi selezionati
for(var i = 0; i < elements.length; i++) {
    elements[i].classList.add('header-inner-pages');
}