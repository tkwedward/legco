// 1. questionBoxAddClick(): 在按 box 時，會出現 toogle 某個被按的圖 on or off
// 2. showDataInResult: 按上面題目中的 box，然後在 result box 中顯示出有何議題
// 3. motionDetail: 在Quesiton part 按議題時，彈出 result box，然後 show 出資料

function questionBoxAddClick(){
   // questionBoxAddClick(): 在按 box 時，會出現 toogle 某個被按的圖 on or off
  $(".box_1, .box_2, .box_3, .box_4, .box_5").on("click", e=>{
    e.stopPropagation();
    let target = e.target;                 // 被選中的 element
    let parent = target.parentNode;        // 選中 ele 的 parent
    let keyword = $(target).attr("id");    // 選中 ele 的 id
    let resultArea = document.querySelector("."+parent.getAttribute("data-result"))

    let type = parent.classList.contains("multiple");   // 檢查這個 box 是否可以 multiple 選擇
    let result_box = ""; // 將結果的 data 放在 result box 1, 2, 3, 4
    let data = getData(keyword, TAG_URL); // 取得 json


    if (type){// if multiple choice
      target.classList.toggle("trigger");
      if (!target.classList.contains("trigger")){
        showDataInResult(resultArea, data)
      }
    } else {// if single, 將所有 div 的 trigger remove，然後再加回去
      let box_sibling = parent.querySelectorAll("div"); // 取得被選中 box 的 sibling

      // 將所有 box 先 remove trigger，變回未選的狀態，然後被選中的就變回顏色。
      box_sibling.forEach( d=>{
        d.classList.remove("trigger")
      })
      target.classList.toggle("trigger");
      showDataInResult(resultArea, data)
    }
  })// on
}//questionBoxAddClick
questionBoxAddClick()


// to show the results in the box located at the bottom
// first question -> motion 1, motion 2, ...
function showDataInResult(target, data){
  // showDataInResult: 按上面題目中的 box，然後在 result box 中顯示出有何議題
  // target: 要 append 的 ele
  // data: 從 ajax 中返回的 data
  var html_text = ""
  data.forEach(p=>{
    let single_data = p
    let result_line_ele = document.createElement("div")
    result_line_ele.classList.add("_result")
    result_line_ele.setAttribute("data-json", JSON.stringify(p))
    result_line_ele.addEventListener("click", motionDetail)
    $(result_line_ele).append(p.simplified_name)
    target.append(result_line_ele)
  })
}// showDataInResult


function motionDetail(){
  // motionDetail: 在Quesiton part 按議題時，彈出 result box，然後 show 出資料
  let json_data = JSON.parse(this.getAttribute("data-json"))
  $("._result_motion_name span").html(json_data["motion_name"])
  $("._result_date span").html(json_data["date"])
  $("._result_note span").html(json_data["note"])
  $("._result_parties").html(json_data["parties"])
}

function putDataInResultBox(data){

}
