



//browser check
 var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;
 // ternary operator
 indexedDB?console.log("success"):console.log("browser not supported");

//creating database

var request=indexedDB.open("DBMS",1);
console.log(request);

//upgradeneeded

request.onupgradeneeded=function(e){
result=e.target.result;
store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}

//onsuccess
request.onsuccess=function (e) {
  console.log("reached successfully")
  result=e.target.result;
  var tx=result.transaction("resume","readwrite");
  store=tx.objectStore("resume");

  var gettingData=store.getAll();


  gettingData.onsuccess=function(getData) {
    console.log(getData.target.result);
    profile(getData.target.result);

  }
  var cards=document.querySelector(".cards");
  function profile(getProfile) {
    for(i in getProfile){

      let card=document.createElement("div")
      card.classList.add("card");
      cards.appendChild(card);

      let image=document.createElement("img");
      image.src="pictures/avatar.png";
      image.alt="profile image";
      card.appendChild(image);

    let a=document.createElement("a");
    a.href="resume.html?Id="+getProfile[i].Id;
    card.appendChild(a);

    let name=document.createElement("h2");
    name.textContent=getProfile[i].name;
    a.appendChild(name);

    let branch=document.createElement("h3");
  branch.textContent=getProfile[i].branch;
    card.appendChild(branch);

     let roll=document.createElement("h3");
    roll.textContent=getProfile[i].roll;
    card.appendChild(roll);

     let email=document.createElement("h3");
    email.textContent=getProfile[i].email;
    card.appendChild(email);
 //
 // var maindiv=document.querySelector(".mainDiv");
 // let leftdiv=document.createElement("leftdiv")
 // leftdiv.classList.add("leftdiv");
 // maindiv.appendChild(leftdiv);
 //
 // let image=document.createElement("img");
 // image.src="pictures/avatar.png";
 // image.alt="profile image";
 // leftdiv.appendChild(image);
    }

  }
}
