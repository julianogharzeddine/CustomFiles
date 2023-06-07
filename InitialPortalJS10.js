$(document).ready(function () {

    // Wait for the card-wrapper div to render successfully
    waitForWrapperRender();

    $(".dd-container a").on("click", () => changeLanguage())

})


function changeLanguage(){
    var lang = localStorage.getItem("selected_language")
  
    if(lang=="en-US"){
      translateToArabic()
    }else if(lang == 'ar-SA'){
      translateToEnglish()
    }
  }

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
        <a class='goToCategoryButton browseDepartmentDetails'> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/architecture.png" class='titleImage'>
        <p class="cardTitle" id='Architecture'>الهندسة</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>130</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails'> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/operations.png" class='titleImage'>
        <p class="cardTitle" id='Operations'>العمليات</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>42</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails'> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/research.png" class='titleImage'>
        <p class="cardTitle" id='Research'>الأبحاث</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
       <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>26</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails'> تعرّف على القسم</a>
    </div>
    <div class="cardItem">
        <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/maintenance.png" class='titleImage'>
        <p class="cardTitle" id='Maintenance'>الصيانة</p>
        <img src='https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/employeeIcon.png' class='employeeIcon'>
        <div class='empNoWrap'>
        <p class='empCountLabel' class='peopleInDepartment'>فردًا في القسم</p>
        <p class='empCount'>67</p>
        </div>
        <a class='goToCategoryButton browseDepartmentDetails'> تعرّف على القسم</a>
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

function translateToEnglish() {

    $('.browseDepartmentDetails').text('Department Info')
    $('.empNoWrap').css('flex-direction', 'row')
    $('.empCountLabel').text('members')
    $('#OurDepartments').text('Our Departments')
    $('#IT').text("IT")
    $('#Architecture').text("Architecture")
    $('#Operations').text("Operations")
    $('#Research').text("Research")
    $("#Maintenance").text("Maintenance")
    $('#LegalAffairs').text("Legal Affairs")
    $('.cardTitle').css('transform' , 'scale(0.8)')
}

function translateToArabic() {

    $('.browseDepartmentDetails').text('تعرّف على القسم')
    $('.empNoWrap').css('flex-direction', 'row-reverse')
    $('.empCountLabel').text('فردًا في القسم')
    $('#OurDepartments').text('أقسامنا المختلفة')
    $('#IT').text("تكنولوجيا المعلومات")
    $('#Architecture').text("الهندسة")
    $('#Operations').text("العمليات")
    $('#Research').text("الأبحاث")
    $("#Maintenance").text("الصيانة")
    $('#LegalAffairs').text("الشؤون القانونية")

    $('.cardTitle').css('transform' , 'scale(1.05)')

}
