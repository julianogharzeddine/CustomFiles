$(document).ready(function () {

    // Wait for the card-wrapper div to render successfully
    waitForWrapperRender();

})
function renderCards() {
    $('#card-wrapper').append(`
<div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/legalAffairs.png">
        <p class="cardTitle">الشؤون القانونية</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/cardImg.png">
        <p class="cardTitle">تكنولوجيا المعلومات</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/architecture.png">
        <p class="cardTitle">الهندسة</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/operations.png">
        <p class="cardTitle">العمليات</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/research.png">
        <p class="cardTitle">الأبحاث</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/maintenance.png">
        <p class="cardTitle">الصيانة</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    `)
}

function waitForWrapperRender() {
    if ($('#card-wrapper').length > 0) {
        // Call your function here
        renderCards();
    } else {
        // Retry after a delay
        setTimeout(waitForWrapperRender, 300);
    }
}
