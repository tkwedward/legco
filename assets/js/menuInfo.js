//1. addEventToMenu: 按下了「第幾屆」、「所有黨派」和「議案類別」的button 後，會出現相應的 info

function addDataAttributeToMenu(){
  // addEventToMenu: 按下了「第幾屆」、「所有黨派」和「議案類別」的button 後，會出現相應的 info
  var menu = document.querySelectorAll(".dropdown-content, .dropdown-content2, .dropdown-content3");
  // console.log(menuItems);
  menu[2].querySelectorAll("a").forEach(p=>{
    p.setAttribute("data-keyword", "TAG_URL")
  })
  console.log(menu[2]);
}
addDataAttributeToMenu()
// var menuItems = addEventToMenu()


function addEventToMenu(){
  let menu = document.querySelectorAll(".dropdown-content2 a");
  menu.forEach(p=>{
    let party_name = p.innerHTML
    p.addEventListener("click", ()=>{
      $(".member_name").html(party_name)
    })
    console.log(p.innerHTML);
  })

}
addEventToMenu()


function tabMenuInfo(event){

  let target = event.target

}
