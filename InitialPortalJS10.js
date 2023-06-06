$(document).ready(function () {

    // Wait for the card-wrapper div to render successfully
    waitForWrapperRender();

})
function renderCards() {

    $('#card-wrapper').html("")
    $('#card-wrapper').append(`
<div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/legalAffairs.png" class='titleImage'>
        <p class="cardTitle" id='LegalAffairs'>الشؤون القانونية</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>36</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails' href="https://srv-k2five/Designer/Runtime/Form/LandingPage/" > تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/cardImg.png" class='titleImage'>
        <p class="cardTitle" id='IT'>تكنولوجيا المعلومات</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>24</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/architecture.png" class='titleImage'>
        <p class="cardTitle" id='Architecture'>الهندسة</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>130</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/operations.png" class='titleImage'>
        <p class="cardTitle" id='Operations'>العمليات</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>42</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/research.png" class='titleImage'>
        <p class="cardTitle" id='Research'>الأبحاث</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
       <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>26</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails' href=""> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/maintenance.png" class='titleImage'>
        <p class="cardTitle" id='Maintenance'>الصيانة</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>67</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails' href=""> تعرّف على القسم</a>
    </div>
    `)
}

function waitForWrapperRender() {
    if ($('#card-wrapper').length > 0) {
        // Call your function here
        renderCards();
    } else {
        // Retry after a delay
        setTimeout(waitForWrapperRender, 500);
    }
}
