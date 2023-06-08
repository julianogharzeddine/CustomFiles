var dictionary;

$(document).ready(function () {


  $(document).click(function(){
    translate()
  })
  
  dictionary = [
    { "English": "Legal Affairs", "Arabic": "الشؤون القانونية", "French": "Aff. Juridiques" },
    { "English": "Proceed Against Institution", "Arabic": "إجراء ضد مؤسسة", "French": "Procéder Contre Inst." },
    { "English": "Proceed With Institution", "Arabic": "إجراء مع المؤسسة", "French": "Procéder Avec Inst." },
    { "English": "Request Investigation", "Arabic": "إجراء طلب تحقيق", "French": "Demander Enquête" },
    { "English": "Conflict Of Interest Procedure", "Arabic": "إجراء تضارب المصالح", "French": "Procédure Conflit Intérêt" },
    { "English": "Contract Study Procedures", "Arabic": "إجراءات دراسة العقود", "French": "Procédures Étude Contrats" },
    { "English": "Click Here", "Arabic": "إضغط هنا", "French": "Cliquer" },
    { "English": "Conduct Investigation", "Arabic": "إجراء تحقيق", "French": "Mener Enquête" },
    { "English": "Investigation Requests", "Arabic": "طلبات التحقيق", "French": "Demandes D'Enquête" },
    { "English": "Submit Complaint", "Arabic": "تقديم شكوى", "French": "Soumettre Plainte" },
    { "English": "New", "Arabic": "الجديدة", "French": "Nouveau" },
    { "English": "Active", "Arabic": "النشطة", "French": "Actif" },
    { "English": "Completed", "Arabic": "المكتملة", "French": "Terminé" },
    { "English": "Created By", "Arabic": "انشا من قبل", "French": "Créé Par" },
    { "English": "Investigation Status", "Arabic": "حالة التحقيق", "French": "Statut Enquête" },
    { "English": "Subject", "Arabic": "الموضوع", "French": "Sujet" }
  ];


  // Wait for the card-wrapper div to render successfully

  setTimeout(function () {
    renderLegalServicesCards()
  }, 2000)

  // Language change listener

  $(document).on('click', ".dd-container a", function () {
    translate()
  })

  // Showing Investigation Options

  $(document).on('click', '#createInvestigationButton', function () {
    $("[name='showTalabatTahkik hiddenButton']").trigger('click')

    // Rendering Investigation buttons which shows the actions that can be taken
    renderInvestOptions()
  })

  // Showing all the investigations in the custom cards

  $(document).on('click', '#showAllInvestigations', function () {
    $("[name='showAllInvestigations hiddenButton']").trigger('click')

    // Creating the request counters
    createReqCounters()

    // Hiding the custom cards

    $('#card-wrapper').css('visibility', 'visible')
    $('#card-wrapper').css('height', 'fit-content')

 

    renderInvestCards()

  })

  // Hiding everything else when showing tasks

  $('[name="MyTasks ButtonNoBorder"]').click(function () {
    $('#card-wrapper').css('visibility', 'hidden')
    $('#card-wrapper').css('height', '0')
  })

})

function renderInvestOptions() {

  $('#InvestigationCards').html("")
  $('#InvestigationCards').append(`
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/cardImg.png" class='titleImage'>
      <p class="cardTitle translatable">طلبات التحقيق</p>
      <a class='goToCategoryButton translatable' id='showAllInvestigations'>إضغط هنا</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/architecture.png" class='titleImage'>
      <p class="cardTitle translatable">إجراء طلب تحقيق</p>
      <a class='goToCategoryButton translatable' href='https://srv-k2five/Runtime/Runtime/Form/Submit.Form/'>إضغط هنا</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/operations.png" class='titleImage'>
      <p class="cardTitle translatable">تقديم شكوى</p>
      <a class='goToCategoryButton translatable' href='https://srv-k2five/Runtime/Runtime/Form/InitialForm.Form/'>إضغط هنا</a>
  </div>
  
  `)
}

function renderInvestCards() {
  var cardWrapper = $("#card-wrapper");
  if (cardWrapper.length === 0) {
    var gridBody = $('div[name="RequestsInventory"]');
    $('<div id="card-wrapper"></div>').insertAfter(gridBody);
    cardWrapper = $("#card-wrapper");
  }

  cardWrapper.html("")
  var rowObjects = fetchRowValues();

  rowObjects.forEach(function (row) {

    var creatorName = row[0] !== undefined ? row[0] : '';
    var creationDate = row[1] !== undefined ? row[1] : '';
    var investStatus = row[2] !== undefined ? row[2] : '';
    var subject = row[3] !== undefined ? row[3] : '';
    var investNo = row[4] !== undefined ? row[4] : '';
    var statusColor = row[5] !== undefined ? row[5] : '';

    cardWrapper.append(`
        <div class="cardItem">
          <div class="cardHeader">
          <div class="investNoStatusWrap">
          <div class="status" style="background-color: ${statusColor};"></div>
            <div class="investNo"><a href='https://srv-k2five/Runtime/Runtime/Form/RO.Form/?RefNo=${investNo}'>${investNo}</a></div>
          </div>
          <div class='dateWrapper'> 
          <div class="date">${creationDate}</div>
          <img src='https://srv-k2five/Designer/Image.ashx?ImID=110252' />
          </div>
          </div>
          <div class="cardBody">
            <div class="card-rows">
              <p class="reqCreator labelVal">${creatorName}</p>
              <p class="reqCreatorLabel labelTitle translatable">انشا من قبل</p>
            </div>
            <div class="card-rows">
              <p class="reqCreator labelVal">${investStatus}</p>
              <p class="reqCreatorLabel labelTitle translatable">حالة التحقيق</p>
            </div>
            <div class="card-rows">
              <p class="reqSubject labelVal">${subject}</p>
              <p class="reqSubjectLabel labelTitle translatable">الموضوع</p>
            </div>
          </div>
        </div>
      `);
  });
}

function fetchRowValues() {

  let rowObjects = []

  let rows = $('div[name="RequestsInventory"]').find('.grid-body-content').find('.grid-content-table').find('tbody').find('tr')

  rows.each(function () {

    let tds = $(this).find('td').find('.runtime-list-item-wrap')
    let emptyObj = {}
    let index = 0

    tds.each(function () {

      if ($(this).text() == ".") {
        emptyObj[index] = $(this).css("background-color")
      } else {
        emptyObj[index] = $(this).text()
      }

      index++
    })

    rowObjects.push(emptyObj)
  })

  return rowObjects
}

function fetchReqStatuses() {

  let activeNo = $("span[name='Active']").text()
  let newNo = $("span[name='New']").text()
  let completedNo = $("span[name='Completed']").text()

  $("span[name='Active']").css("visibility", "hidden !important");
  $("span[name='New']").css("visibility", "hidden !important");
  $("span[name='Completed']").css("visibility", "hidden !important");


  return [activeNo, newNo, completedNo]
}

function createReqCounters() {

  let [activeNo, newNo, completedNo] = fetchReqStatuses()

  let content = `
  <div class="Complete counterCard">
      <p id="completeCounter" class="counterCircle">${completedNo}</p>
      <p class="counterLabel translatable">المكتملة</p>
  </div>
  <div class="Active counterCard">
      <p id="activeCounter" class="counterCircle">${activeNo}</p>
      <p class="counterLabel translatable">النشطة</p>
  </div>
  <div class="New counterCard">
      <p id="newCounter" class="counterCircle">${newNo}</p>
      <p class="counterLabel translatable">الجديدة</p>
  </div>
  `
  $("#reqCounter").html("")
  $("#reqCounter").append(content)
}

function renderLegalServicesCards() {
  $('#legalservices-card-wrapper').html("")
  $('#legalservices-card-wrapper').append(`
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/legalAffairs.png" class='titleImage'>
      <p class="cardTitle translatable">إجراء ضد مؤسسة</p>
      <a class='goToCategoryButton translatable'>إضغط هنا</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/cardImg.png" class='titleImage'>
      <p class="cardTitle translatable">إجراء مع المؤسسة</p>
      <a class='goToCategoryButton translatable'>إضغط هنا</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/architecture.png" class='titleImage'>
      <p class="cardTitle translatable">إجراء طلب تحقيق</p>
      <a class='goToCategoryButton translatable' id='createInvestigationButton'>إضغط هنا</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/research.png" class='titleImage'>
      <p class="cardTitle translatable">إجراء تضارب المصالح</p>
      <a class='goToCategoryButton translatable'>إضغط هنا</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/maintenance.png" class='titleImage'>
      <p class="cardTitle translatable">إجراءات دراسة العقود</p>
      <a class='goToCategoryButton translatable'>إضغط هنا</a>
  </div>
  `)
}

function waitForLegalWrapperRender() {
  if ($("[name='LegalServicesDL']").length > 0) {
    // Call your function here
    renderLegalServicesCards()
  } else {
    // Retry after a delay
    setTimeout(waitForLegalWrapperRender, 200);
  }
}


function translate() {
  let LSLang = localStorage.getItem('selected_language')
  let targetLang = ""

  switch (LSLang) {
    case 'en-US':
      targetLang = 'English'
      $('[name="Sidebar"]').css('right' , '')
      $('[name="Sidebar"]').css('left' , '0')
      $('.runtime-form').css('left' , '')
      $('.runtime-form').css('left' , '20%')
      $('.counterCard').css('flex-direction' , 'row-reverse')
      $('.card-rows').css('flex-direction' , 'row-reverse')
      $('.cardHeader').css('flex-direction' , 'row')
      $('.dateWrapper').css('flex-direction' , 'row')
      $('#legalservices-card-wrapper').css('direction' , 'ltr')
      $('#card-wrapper').css('direction' , 'ltr')
      break
    case 'ar-SA':
      targetLang = 'Arabic'
      $('[name="Sidebar"]').css('left' , '')
      $('[name="Sidebar"]').css('right' , '0')
      $('[name="Sidebar"]').css('left' , '')
      $('.runtime-form').css('left' , '5%')
      $('.counterCard').css('flex-direction' , 'row')
      $('.dateWrapper').css('flex-direction' , 'row-reverse')
      $('.card-rows').css('flex-direction' , 'row-reverse')
      $('.cardHeader').css('flex-direction' , 'row-reverse')
      $('#legalservices-card-wrapper').css('direction' , 'rtl')
      $('#card-wrapper').css('direction' , 'rtl')
      break
    case 'fr-FR':
      targetLang = 'French'
      $('[name="Sidebar"]').css('right' , '')
      $('[name="Sidebar"]').css('left' , '0')
      $('.runtime-form').css('left' , '')
      $('.runtime-form').css('left' , '20%')
      $('.counterCard').css('flex-direction' , 'row-reverse')
      $('.card-rows').css('flex-direction' , 'row-reverse')
      $('.cardHeader').css('flex-direction' , 'row')
      $('.dateWrapper').css('flex-direction' , 'row')
      $('#legalservices-card-wrapper').css('direction' , 'ltr')
      $('#card-wrapper').css('direction' , 'ltr')
      break
  }

  let toTranslate = $('.translatable')

  toTranslate.each(function () {
    $(this).text(getFromDictionary(($(this).text().trim()), targetLang))
  })
}

function getFromDictionary(text, toLanguage) {
  for (var i = 0; i < dictionary.length; i++) {

    var entry = dictionary[i];

    if (entry.English === text) return entry[toLanguage];
    if (entry.Arabic === text) return entry[toLanguage];
    if (entry.French === text) return entry[toLanguage];

  }

  return 'Translation not found';
}