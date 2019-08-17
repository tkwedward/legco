// 這裏有的 function 是︰
// 1. getData: 用於向 database 取得 data
// 2. centerBox: 用於將 element 置中
function getData(keyword, url){
  // getData: 用於向 database 取得 data
  var json_data;
  $.ajax({
    async:false,
    url: url+keyword,
    type: "GET",
    dataType: "json",
    success: (data) =>{
        json_data = data
    },//success
    error:(err)=>{
      if (err){
        throw err
      }
    }
  });// ajax
  return json_data
}


function centerBox(ele){
  // centerBox: 用於將 element 置中
  let parent = ele.parentNode
  let ele_w = ele.clientWidth;
  let ele_h = ele.clientHeight;
  let parent_w = parent.clientWidth
  let parent_h = parent.clientHeight
  let leftOffset = (parent_w-ele_w)/2
  let topOffset = (parent_h-ele_h)/2
  ele.style.top = topOffset
  ele.style.left = leftOffset

}

var loopEachMember = function(list, container){
  // loop 每個 list 中的 member, 例如︰
  // ["長毛", "曾"] => 在 container 中顯示相關資料
  list.forEach(m=>{
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = m;

    let img = document.createElement("img")
    img.src = "pictures/member/5th/"+m+".jpg"
    img.style.width = "90px"

    // 分流︰將每個 figure 上加上 click event
    if (container.attr("class")=="member_name" ){
      figure.addEventListener("click", function(){
        addEventToMemberFigure(event, m)
      }, false)
    } else {

    }

    $(figure).append(img)
    $(figure).append(figcaption)
    $(container).append(figure)
  })// for Each
}// loopEachMember

function motionLineForEachMemeber(p, container, field){

  let motion_name =  document.createElement("div")
  // let date =  document.createElement("div")
  // let note =  document.createElement("div")
  let decision =  document.createElement("div")

  motion_name.classList.add("member_motion_name")
  // date.classList.add("date")
  // note.classList.add("note")
  decision.classList.add("decision")

  $(container).append(motion_name)
  // $(container).append(date)
  // $(container).append(note)
  $(container).append(decision)

  $(motion_name).append("議案: " + p["motion_name"])
  // $(date).html("日期︰ " + p["date"])
  // $(note).html("備註: " + p["note"])
  $(decision).append("投票記錄: " + p["decision"])
}

// var v = document.querySelector("._result_box_in")
// centerBox(v)

// document.addEventListener("click", function(){console.log("I clicked: "+ event.target)})
