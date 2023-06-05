$(document).ready(function () {
   setTimeout(function(){  
       renderCards()
   }
              ,3000)
 
})
function renderCards() {
    $('#card-wrapper').append(`
<div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">إجراء ضد مؤسسة </p>
        <a class='goToCategoryButton' href=""> تعرّف على المزيد</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">إجراء مع المؤسسة</p>
        <a class='goToCategoryButton' href=""> تعرّف على المزيد</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">إجراء طلب تحقيق</p>
        <a class='goToCategoryButton' href=""> تعرّف على المزيد</a>
    </div>
    <div class="cardItem">
        <img src="https://srv-k2five/Designer/Image.ashx?ImID=110253">
        <p class="cardTitle">تقديم شكوى</p>
        <a class='goToCategoryButton' href=""> تعرّف على المزيد</a>
    </div>
    `)
}
