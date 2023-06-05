$(document).ready(function () {

    // Wait for the card-wrapper div to render successfully
    waitForWrapperRender();

})
function renderCards() {
    $('#card-wrapper').append(`
<div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">الشؤون القانونية</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">تكنولوجيا المعلومات</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">الهندسة</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">العمليات</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">الأبحاث</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">الأبحاث</p>
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
