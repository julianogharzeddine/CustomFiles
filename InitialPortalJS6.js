$(document).ready(function () {

    // Wait for the card-wrapper div to render successfully
    waitForWrapperRender();

})
function renderCards() {
    $('#card-wrapper').append(`
<div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">إجراء ضد مؤسسة </p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">إجراء مع المؤسسة</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">إجراء طلب تحقيق</p>
        <a class='goToCategoryButton' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">تقديم شكوى</p>
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
