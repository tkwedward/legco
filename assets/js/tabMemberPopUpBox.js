// add event to 每一個 member 的 figure
/////
var tabMenuInfo = function(e, party_name){
// tabMenuInfo(e, party_name):  按下民主黨後，就會從 constant 中的 PARTY_MEMEBER_LIST 取得那個黨有甚麼人，然後在下面的 box 中 show 出有甚麼人
  e.preventDefault()
  let target = e.target
  let partyArray = PARTY_MEMEBER_LIST[party_name]
  console.log(name);
  $(".member_name").empty()
  $(".member_detail").empty()
  loopEachMember(partyArray, $(".member_name"))
}// tabMenuInfo

function motionLineForEachMemeber(p, container){
  // 輸入政黨議員的名單，然後就將他們的照片放在 container 中
  let motion_name =  document.createElement("div")
  let decision =  document.createElement("div")
  motion_name.classList.add("member_motion_name")
  decision.classList.add("decision")

  $(container).append(motion_name)
  $(container).append(decision)

  $(motion_name).append("議案: " + p["motion_name"])
  // $(date).html("日期︰ " + p["date"])
  // $(note).html("備註: " + p["note"])
  $(decision).append("投票記錄: " + p["decision"])
}


/////
var addEventToMemberFigure = function (e, name, tag){
  // 當某個議員的相片中被點中，隱藏其他的圓，show 出這個議員的資料
  let target = e.target;
  $(target).css("pointer-events","none")
  // target.removeEventToMemberFigure("click", addEventToMemberFigure);
  let siblings = Array.from(target.parentNode.querySelectorAll("figure"))
                       .filter(p=>p!=target)
  siblings.forEach(p=>{
    p.classList.add("hidden")
    // console.log(p, p.classList);
  })

  let return_button = document.createElement("img")
  return_button.classList.add("return")
  return_button.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
  return_button.addEventListener("click", function(){backToAllMember(event, target)
  console.log(target);})
  $(".member_name").append(return_button)

  // 將資料放入 member detail 中，即每個議案投了甚麼票
  let data_array = getData(MEMBER_MAPPING[name], MEMBER_URL)
  console.log(name);
  console.log(data_array);
  data_array.forEach(p=>motionLineForEachMemeber(p, $(".member_detail")))

  // 將 detail show 出來
  document.querySelector(".member_detail").classList.remove("hidden")

}

/////
var backToAllMember = function (e, figure){
  // 按下 return button，返回某政黨的議員頁面
  //e: event, img: 沒有 hidden 的 image
  let target_button = e.target;
  console.log(figure);
  $(figure).css("pointer-events","auto")

  let figure_array = figure.parentNode.querySelectorAll("figure")
  figure_array.forEach(p=>{
    if (p.classList.contains("hidden")){
      p.classList.remove("hidden")
    }
  })//forEach

  // 將 button 和 memeber detail 都收起來
  target_button.remove()
  document.querySelector(".member_detail").classList.add("hidden")
}

var test = function(){console.log(123)}
