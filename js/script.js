let drink = `<div class="row menu-drink" id="drinks">
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-01.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Drinks 1</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-02.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Drinks 2</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-03.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Drinks 3</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
</div>`;

let lunch = `<div class="row menu-lunch" id="lunch">
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-04.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Lunch 1</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-05.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Lunch 2</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-06.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Lunch 3</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
</div>`;

let dinner = `<div class="row menu-dinner" id="dinner">
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-07.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Dinner 1</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-08.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Dinner 2</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
<div class="special-grid drinks">
    <div class="gallery-single fix">
        <img src="img/img-09.jpg" class="img-fluid">
        <div class="why-text">
            <h4>Special Dinner 3</h4>
            <p>Sed id magna vitae eros sagittis euismod.</p>
            <h5> $7.79</h5>
        </div>
    </div>
</div>
`;

window.onload = () => {
    showAll();
}

function removeActive() {
    let list = document.querySelectorAll('.nav-link');
    for (let item of list) {
        item.classList.remove('active');
    }
} 

function showAll() {
    removeActive();
    document.querySelector('.img-menu').innerHTML = drink + lunch + dinner;
    document.querySelector('#all').classList.toggle('active');
}

function showDrink() {
    removeActive();
    document.querySelector('.img-menu').innerHTML = drink;
    document.querySelector('#menu-drinks').classList.toggle('active');
}

function showLunch() {
    removeActive();
    document.querySelector('.img-menu').innerHTML = lunch;
    document.querySelector('#menu-lunch').classList.toggle('active');
}

function showDinner() {
    removeActive();
    document.querySelector('.img-menu').innerHTML = dinner;
    document.querySelector('#menu-dinner').classList.toggle('active');
}