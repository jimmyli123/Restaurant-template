
document.querySelector('#bacon').addEventListener('mouseover', showPrice)

document.querySelector('#bacon').addEventListener('mouseout', returnToDefault)

let baconItem = document.querySelector('#bacon')

function showPrice() {
    baconItem.className = 'opacityClass'


}

function returnToDefault() {
    baconItem.className = 'defaultOpacity'

}