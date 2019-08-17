//1. box hover: hover 於question part 的 box 時，會令到它變成黃色
//2. tabChange: 轉變上面那個「問題」和「議員」的 tab
//

$(document).ready(function() {
  $(".box").hover(
      function(){//令到hover時，個box會轉做黃色
        $(this).css("background-color", "yellow");
      }, // 進入 hover
      function(){
        if($(this).hasClass('selected')== false){
          $(this).css("background-color", "#cabaa1");
      }// 離開 hover
    })//end of ready funciton

  // 第一個 box
})//end of ready funciton


//轉變上面那個「問題」和「議員」的 tab
function tabChange(event){
  event.stopPropagation()
  let target = event.target;
  let parent = target.parentNode.parentNode
  let li_array = parent.querySelectorAll("li")
  let target_tab = document.querySelectorAll("#"+target.dataset['id'])
  let tab_array = [document.querySelector("#tab1"),  document.querySelector("#tab2")]

  // toogle 顏色
  if (!target.classList.contains("trigger")){
    li_array.forEach(p=>p.classList.toggle("trigger"))
  }
  // 轉換 tab
  tab_array.forEach(p=>p.classList.toggle("hidden"))
}
