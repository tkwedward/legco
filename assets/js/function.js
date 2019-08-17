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
  console.log(ele_h, ele_w);
  console.log(parent_h, parent_w);
}


var v = document.querySelector("._result_box_in")
// centerBox(v)
