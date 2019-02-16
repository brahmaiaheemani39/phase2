var query=window.location.search.substring(1).split("?");
var parent;
query.map((data)=> {
let splitData=data.split("=");
parent=parseInt(splitData[1]);

});



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
  var getExact=store.get(parent);

  getExact.onsuccess=function(get) {

    console.log(get.target.result);
    // //------------
    profile(get.target.result);

  }

  var maindiv=document.querySelector(".mainDiv");
  function profile(getProfile) {

      let left=document.createElement("div")
      left.classList.add("leftDiv");
      maindiv.appendChild(left);

      let image=document.createElement("img");
      image.src="pictures/avatar.png";
      image.alt="profile image";
      left.appendChild(image);



    let name=document.createElement("h2");
    name.textContent=getProfile.name;
    left.appendChild(name);

    let branch=document.createElement("h3");
  branch.textContent=getProfile.branch;
    left.appendChild(branch);

     let roll=document.createElement("h4");
    roll.textContent=getProfile.roll;
    left.appendChild(roll);

     let email=document.createElement("h5");
    email.textContent=getProfile.email;
    left.appendChild(email);
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

 let right=document.createElement("div")
 right.classList.add("rightDiv");
 maindiv.appendChild(right);

 let cObj=document.createElement("h1");
 cObj.textContent="Career Object";
 right.appendChild(cObj);

 let cObject=document.createElement("h2");
 cObject.textContent=getProfile.co;
 right.appendChild(cObject);

 //------------------------personal info
  let pInfo=document.createElement("h1");
  pInfo.textContent="Personal Information";
  right.appendChild(pInfo);

  let nam=document.createElement("h3");
  nam.textContent="Name:"+getProfile.name;
  right.appendChild(nam);


   let rno=document.createElement("h3");
   rno.textContent="Roll Number:"+getProfile.roll;
   right.appendChild(rno);


    let pno=document.createElement("h3");
    pno.textContent="Phone Number:"+getProfile.ph;
    right.appendChild(pno);

    let em=document.createElement("h3");
    em.textContent="Email Id:"+getProfile.email;
    right.appendChild(em);

///-------------------------------- Educational info
     let eInfo=document.createElement("h1");
     eInfo.textContent="Educational Information";
     right.appendChild(eInfo);

     let li1=document.createElement("h2");
     li1.textContent=getProfile.degree;
     right.appendChild(li1);

     let ul1=document.createElement("ul");
      right.appendChild(ul1);



      let li2=document.createElement("li");
      li2.textContent="College:"+getProfile.college;
      right.appendChild(li2);


       let li3=document.createElement("li");
       li3.textContent="Branch:"+getProfile.branch;
       right.appendChild(li3);

       let li4=document.createElement("li");
       li4.textContent="CGPA:"+getProfile.cgpa;
       right.appendChild(li4);


  //----------------Intermediate info
  // let iInfo=document.createElement("h1");
  // iInfo.textContent="Intermediate/Diploma Information";
  // right.appendChild(iInfo);

    let li5=document.createElement("h2");
    li5.textContent=getProfile.idegree;
    right.appendChild(li5);

  let ul2=document.createElement("ul");
   right.appendChild(ul2);



   let li6=document.createElement("li");
   li6.textContent="College:"+getProfile.icollege;
   right.appendChild(li6);


    let li7=document.createElement("li");
    li7.textContent="Group/Branch:"+getProfile.group;
    right.appendChild(li7);

    let li8=document.createElement("li");
    li8.textContent="Marks:"+getProfile.imarks;
    right.appendChild(li8);

//----------------ssc Information-------------------
// let sInfo=document.createElement("h1");
// sInfo.textContent="SSC Information";
// right.appendChild(sInfo);
let ssc=document.createElement("h2");
ssc.textContent=getProfile.ssc;
right.appendChild(ssc);

let ul3=document.createElement("ul");

right.appendChild(ul3);


 let li9=document.createElement("li");
 li9.textContent="School:"+getProfile.school;
 right.appendChild(li9);


  let li10=document.createElement("li");
  li10.textContent="Medium:"+getProfile.medium;
  right.appendChild(li10);

  let li11=document.createElement("li");
  li11.textContent="CGPA:"+getProfile.scgpa;
  right.appendChild(li11);
  //------------------skills------------

  let skills=document.createElement("h1");
  skills.textContent="Skills";
  right.appendChild(skills);

  let skc=document.createElement("h2");
  skc.textContent=getProfile.skills;
  right.appendChild(skc);



    }


  }
