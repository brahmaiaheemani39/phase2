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

     let roll=document.createElement("h3");
    roll.textContent=getProfile.roll;
    left.appendChild(roll);

     let email=document.createElement("h3");
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

 let cObject=document.createElement("h1");
 cObject.textContent=getProfile.co;
 right.appendChild(cObject);

 //------------------------personal info
  let pInfo=document.createElement("h1");
  pInfo.textContent="Personal Information";
  right.appendChild(pInfo);

  let nam=document.createElement("h2");
  nam.textContent="Name:"+getProfile.name;
  right.appendChild(nam);


   let rno=document.createElement("h2");
   rno.textContent="Roll Number:"+getProfile.roll;
   right.appendChild(rno);


    let pno=document.createElement("h2");
    pno.textContent="Phone Number:"+getProfile.ph;
    right.appendChild(pno);

    let em=document.createElement("h2");
    em.textContent="Email Id:"+getProfile.email;
    right.appendChild(em);

///-------------------------------- Educational info
     let eInfo=document.createElement("h1");
     eInfo.textContent="Educational Information";
     right.appendChild(eInfo);

     let deg=document.createElement("h2");
     deg.textContent="Name of the Degree:"+getProfile.degree;
     right.appendChild(deg);


      let cname=document.createElement("h2");
      cname.textContent="Name of the College:"+getProfile.college;
      right.appendChild(cname);


       let bname=document.createElement("h2");
       bname.textContent="Branch:"+getProfile.branch;
       right.appendChild(bname);

       let cg=document.createElement("h2");
       cg.textContent="CGPA:"+getProfile.cgpa;
       right.appendChild(cg);


  //----------------Intermediate info
  let iInfo=document.createElement("h1");
  iInfo.textContent="Intermediate/Diploma Information";
  right.appendChild(iInfo);

  let dege=document.createElement("h2");
  dege.textContent="Intermediate/Diploma:  "+getProfile.idegree;
  right.appendChild(dege);


   let coname=document.createElement("h2");
   coname.textContent="Name of the College:"+getProfile.icollege;
   right.appendChild(coname);


    let grp=document.createElement("h2");
    grp.textContent="Group/Branch:"+getProfile.group;
    right.appendChild(grp);

    let cgp=document.createElement("h2");
    cgp.textContent="Marks:"+getProfile.imarks;
    right.appendChild(cgp);

//----------------ssc Information-------------------
let sInfo=document.createElement("h1");
sInfo.textContent="SSC Information";
right.appendChild(sInfo);

let brd=document.createElement("h2");
brd.textContent="Name of the SSC Board:"+getProfile.ssc;
right.appendChild(brd);


 let sname=document.createElement("h2");
 sname.textContent="Name of the School:"+getProfile.school;
 right.appendChild(sname);


  let med=document.createElement("h2");
  med.textContent="Medium:"+getProfile.medium;
  right.appendChild(med);

  let scg=document.createElement("h2");
  scg.textContent="CGPA:"+getProfile.scgpa;
  right.appendChild(scg);
  //------------------skills------------

  let skills=document.createElement("h1");
  skills.textContent="Skills";
  right.appendChild(skills);

  let skc=document.createElement("h2");
  skc.textContent=getProfile.skills;
  right.appendChild(skc);



    }


  }
