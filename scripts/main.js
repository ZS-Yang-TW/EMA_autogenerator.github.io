/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

var myImage = document.querySelector('img');
//var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

function setUserName() {
    let myName = prompt('輸入你的名字!');
    if(!myName || myName === null){
        alert('你好像沒輸入名字喔~ 檢查一下')
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '歡迎來找獺獺玩, ' + myName;
    }
  }

function btn_event() { 
    document.getElementById("name").innerHTML = "你好棒，成功了...";
    //將html檔案中叫做"name"的元素內容，改成"Goodbye"。"
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-image.png') {
      myImage.setAttribute ('src','images/my-image-2.png');
    } else {
      myImage.setAttribute ('src','images/my-image.png');
    }
}

myButton.onclick = function() {
    setUserName();
  }