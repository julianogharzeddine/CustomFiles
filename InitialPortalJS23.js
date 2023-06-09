$(document).ready(function () {

    // Wait for the card-wrapper div to render successfully
    waitForWrapperRender();

    $(document).on('click', ".dd-container a", function () {
        changeLanguage()
    })

     // Translating the Page On Load

  setTimeout(function () {
    let LSLang = localStorage.getItem('selected_language')

    switch (LSLang) {
      case 'en-US':
        $("a.dd-option label.dd-option-text:contains('Arabic')").click();
        $("a.dd-option label.dd-option-text:contains('English')").click();
        break
      case 'ar-SA':
        $("a.dd-option label.dd-option-text:contains('Arabic')").click();
        $("a.dd-option label.dd-option-text:contains('Arabic')").click();
        break
      case 'fr-FR':
        $("a.dd-option label.dd-option-text:contains('Arabic')").click();
        $("a.dd-option label.dd-option-text:contains('Français')").click();
        break
      default:
        $("a.dd-option label.dd-option-text:contains('Arabic')").click();
    
        break
    }
  }, 2000)

})


function changeLanguage() {

    setTimeout(function () {
        var lang = localStorage.getItem("selected_language")

        if (lang == "en-US") {
            translateToEnglish()
        } else if (lang == 'ar-SA') {
            translateToArabic()
        }else{
            translateToArabic()
        }
    }, 500)

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
        <a class='goToCategoryButton browseDepartmentDetails' href="https://srv-k2five/Runtime/Runtime/Form/LandingPage/" > تعرّف على القسم</a>
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
    $('.cardTitle').css('transform', 'scale(0.8)')
    $("[name='Sidebar']").css('right' , '')
    $("[name='Sidebar']").css('left' , '0')
    $(".form").css('right' , '')
    $(".form").css('left' , '32%')
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
    $('.cardTitle').css('transform', 'scale(1.05)')
    $("[name='Sidebar']").css('left' , '')
    $("[name='Sidebar']").css('right' , '0')
    $(".form").css('left' , '')
    $(".form").css('right' , '20%')

}
