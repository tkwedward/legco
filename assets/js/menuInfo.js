//1. addEventToMenu: 按下了「第幾屆」、「所有黨派」和「議案類別」的button 後，會出現相應的 info
// 2. tabMenuInfo(e, party_name):  按下民主黨後，就會從 constant 中的 PARTY_MEMEBER_LIST 取得那個黨有甚麼人，然後在下面的 box 中 show 出有甚麼人

function addDataAttributeToMenu(){
  // addEventToMenu: 按下了「第幾屆」、「所有黨派」和「議案類別」的button 後，會出現相應的 info
  var menu = document.querySelectorAll(".dropdown-content, .dropdown-content2, .dropdown-content3");
  // console.log(menuItems);

  menu[2].querySelectorAll("a").forEach(p=>{
    p.setAttribute("data-keyword", "TAG_URL")
    // p.addEventListener("click", function(){console.log(this.parentNode.querySelector("button"));})
  })
}
addDataAttributeToMenu()
// var menuItems = addEventToMenu()





function addEventToMenu(){
  // 在 menu 中的 a 中加入東西
  let menu = document.querySelectorAll(".dropdown-content2 a");
  menu.forEach(p=>{
    let party_name = p.innerHTML
    // p.addEventListener("click", function(){ tabMenuInfo(party_name)}, false)
    p.addEventListener("click", function(){
      let member_name_shell = document.querySelector(".member_name_shell")
      document.querySelector(".member_detail").remove()

      let member_detail = document.createElement("div")
      member_detail.classList.add("member_detail")
      $(member_name_shell).append(member_detail)


      let button = p.parentNode.parentNode.querySelector("button");
      button.innerHTML = party_name
      tabMenuInfo(event, party_name)


    }, false)
  })
}// addEventToMenu()
addEventToMenu()
