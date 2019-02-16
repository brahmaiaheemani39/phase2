function Submit() {
 var Career =document.getElementById('Career').value;
 var Name=document.getElementById('Name').value;
 var RollNumber=document.getElementById('RollNumber').value;
 var PhoneNumber=document.getElementById('PhoneNumber').value;
 var Email=document.getElementById('Email').value;

 var Degree=document.getElementById('Degree').value;
 var College=document.getElementById('College').value;
 var Branch=document.getElementById('Branch').value;
 var CGPA=document.getElementById('CGPA').value;
 // var Career =document.getElementById('Career').value;

 var iDegree=document.getElementById('iDegree').value;
 var iCollege=document.getElementById('iCollege').value;
 var Group=document.getElementById('Group').value;
 var iMarks=document.getElementById('iMarks').value;

 var Ssc=document.getElementById('Ssc').value;
 var School=document.getElementById('School').value;
 var Medium=document.getElementById('Medium').value;
 var Branch=document.getElementById('Branch').value;
 var SCGPA=document.getElementById('SCGPA').value;
 var Skills=document.getElementById('Skills').value;


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

  store.put(
    {
     co:Career,name:Name,roll:RollNumber,ph:PhoneNumber,email:Email,degree:Degree,college:College,branch:Branch,cgpa:CGPA,
     idegree:iDegree,icollege:iCollege,group:Group,imarks:iMarks,ssc:Ssc,school:School,medium:Medium,scgpa:SCGPA,skills:Skills
  }
);

}
//onerror
request.onerror=function (e) {
  console.log("error"+e);

}
window.open("index.html","_self");


}
/*
-----------------------------------------------------------------------------------------------------------------
*/
