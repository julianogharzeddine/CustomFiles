
$(document).ready(function () {

  // Wait for the card-wrapper div to render successfully
   waitForLegalWrapperRender()

})


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
              <p class="reqCreatorLabel labelTitle">انشا من قبل</p>
            </div>
            <div class="card-rows">
              <p class="reqCreator labelVal">${investStatus}</p>
              <p class="reqCreatorLabel labelTitle">حالة التحقيق</p>
            </div>
            <div class="card-rows">
              <p class="reqSubject labelVal">${subject}</p>
              <p class="reqSubjectLabel labelTitle">الموضوع</p>
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
      <p class="counterLabel">المكتملة</p>
  </div>
  <div class="Active counterCard">
      <p id="activeCounter" class="counterCircle">${activeNo}</p>
      <p class="counterLabel">النشطة</p>
  </div>
  <div class="New counterCard">
      <p id="newCounter" class="counterCircle">${newNo}</p>
      <p class="counterLabel">الجديدة</p>
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
      <p class="cardTitle" id='actionAgainstCompany'>إجراء ضد مؤسسة</p>
      <a class='goToCategoryButton knowMore' href="">تعرّف على المزيد</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/cardImg.png" class='titleImage'>
      <p class="cardTitle" id='actionWithCompany'>إجراء مع المؤسسة</p>
      <a class='goToCategoryButton knowMore' href="">تعرّف على المزيد</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/architecture.png" class='titleImage'>
      <p class="cardTitle" id='actionCreateInvestigation'>إجراء طلب تحقيق</p>
      <a class='goToCategoryButton knowMore' href="">تعرّف على المزيد</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/operations.png" class='titleImage'>
      <p class="cardTitle" id='actionCreateComplaint'>تقديم شكوى</p>
      <a class='goToCategoryButton knowMore' href="">تعرّف على المزيد</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/research.png" class='titleImage'>
      <p class="cardTitle" id='actionConflictOfInterest'>إجراء تضارب المصالح</p>
      <a class='goToCategoryButton knowMore' href="">تعرّف على المزيد</a>
  </div>
  <div class="cardItem">
      <img src="https://cdn.jsdelivr.net/gh/julianogharzeddine/CustomFiles@main/maintenance.png" class='titleImage'>
      <p class="cardTitle" id='actionCreateStudy'>إجراءات دراسة العقود</p>
      <a class='goToCategoryButton knowMore' href="">تعرّف على المزيد</a>
  </div>
  `)
}

function waitForLegalWrapperRender() {
  if ($("[name='LegalServicesDL']").length > 0) {
    // Call your function here
    renderLegalServicesCards()
  } else {
    // Retry after a delay
    setTimeout(waitForLegalWrapperRender, 600);
  }
}
