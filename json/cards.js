(function (){
  function loadJson(file,callback) {
    var rawFile=new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 & rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
rawFile.send(null);
}
  loadJson("json/data.json",function (text) {
    var data=JSON.parse(text);
    console.log(data);
    pro(data.profile)

  });
  function pro(Pro) {
    var mainDiv=document.querySelector(".cards11");
    for (var i = 0; i < Pro.length; i++) {
      // pro[i]

    var card=document.createElement("div");
    card.classList.add("card");
    mainDiv.appendChild(card)
     var image=document.createElement("img");

    image.src="pictures/avatar.png";
    card.appendChild(image);
    var h2=document.createElement("h2");
    h2.textContent=Pro[i].NAME;
    card.appendChild(h2);
    var h3=document.createElement("h2");
    h3.textContent=Pro[i].BRANCH;
    card.appendChild(h3);
    var h3=document.createElement("h3");
    h3.textContent=Pro[i].PHONENO;
    card.appendChild(h3);
    var h5=document.createElement("h6");
    h5.textContent=Pro[i].MAILID;
    card.appendChild(h5);
    var a=document.createElement("a");
    a.textContent="veiw resume";
    a.href="resume1.html";
    card.appendChild(a);
 }
  }
})();
