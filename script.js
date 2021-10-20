function addNewField() {
    console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('Placeholder', 'Enter here')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField() {
    console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('Placeholder', 'Enter here')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)
}

function addNewACField() {
    console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('acField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('Placeholder', 'Enter here')

    let weOb = document.getElementById("ac")
    let weAddButtonOb = document.getElementById("acAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}
//generating Cv
function generateCV(h) {

   
    let nameField = document.getElementById('nameField').value;
    let nameT = document.getElementById("nameT"+h);
    nameT.innerHTML = nameField;
    document.getElementById("name2T"+h).innerHTML = nameField;
   // let hop="0";
    //for contact
    document.getElementById("contactT"+h).innerHTML = document.getElementById('contactField').value;
    // For adress
    document.getElementById("addressT"+h).innerHTML = document.getElementById('addressField').value;
    //for face book
    document.getElementById("cdT"+h).innerHTML = document.getElementById('cdField').value;
    document.getElementById("ccT"+h).innerHTML = document.getElementById('ccField').value;
    document.getElementById("hrT"+h).innerHTML = document.getElementById('hrField').value;
    document.getElementById("fbT"+h).innerHTML = document.getElementById('fbField').value;
    document.getElementById("inT"+h).innerHTML = document.getElementById('InstaField').value;
    document.getElementById("linkedT"+h).innerHTML = document.getElementById('linkedField').value;
    // objective
    document.getElementById("objectiveT"+h).innerHTML = document.getElementById('objectiveField').value;
    //work experiance
    let wes = document.getElementsByClassName('weField')
    let str = ''
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("weT"+h).innerHTML = str;

    // Achivements
    let acs = document.getElementsByClassName('acField')
    let str3 = ''
    for (let e of acs) {
        str3 = str3 + `<li> ${e.value}</li>`;
    }
    document.getElementById('acT'+h).innerHTML = str3;



    // acadmic details
    let aqs = document.getElementsByClassName('eqField')
    let str1 = ''
    for (let a of aqs) {
        str1 = str1 + `<li> ${a.value}</li>`;
    }
    document.getElementById('aqT'+h).innerHTML = str1;

    // for image
    let file = document.getElementById("imageField").files[0]
    console.log(file);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set image as templetes
    reader.onloadend = function() {
        document.getElementById("imgTemplate"+h).src = reader.result;
    };


    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-templets').style.display = 'block'

}
 function changeFontSize(type){
      //  console.log(type); 
      let ids = ["#aqT1","#acT1","#weT1","#objectiveT1","#name2T1","#addressT1","#contactT11","#nameT1","#aqT2","#acT2","#weT2","#objectiveT2","#name2T2","#addressT2","#contactT12","#nameT2","#aqT3","#acT3","#weT3","#objectiveT3","#name2T3","#addressT3","#contactT13","#nameT3"];
      ids.forEach(id =>{
          let el =document.querySelector(id);

          let fontSize = window.getComputedStyle(el,null).getPropertyValue("font-size")
          fontSize=parseFloat(fontSize);
          if(type==="increase"){
              el.style.fontSize=(fontSize+1)+"px";
          }else{
            el.style.fontSize=(fontSize-1)+"px";
          }
      })
        }
      
function toggleHide1(){
        let btn1 = document.getElementById('btn1');
        let para = document.getElementById('cv-templets1'); 
        let para1 = document.getElementById('cv-templets2'); 
        let para2 = document.getElementById('cv-templets3'); 
        let pr1 = document.getElementById('hello1'); 
        let pr3 = document.getElementById('hello3');
        let pr2 = document.getElementById('hello2'); 
        pr2.style.display = 'none';
        pr3.style.display = 'none';
        pr1.style.display = 'block';
        para.style.display = 'block';
         para1.style.display = 'none';
        para2.style.display = 'none';
    }
    function toggleHide2(){
        let btn1 = document.getElementById('btn2');
        let para = document.getElementById('cv-templets2'); 
         let pr1 = document.getElementById('hello1'); 
         let pr3 = document.getElementById('hello3');
         let pr2 = document.getElementById('hello2'); 
        
        let para1 = document.getElementById('cv-templets1'); 
        let para2 = document.getElementById('cv-templets3'); 
        
        para.style.display = 'block';
        pr1.style.display = 'none';
         pr3.style.display = 'none';
         pr2.style.display = 'block';
        para1.style.display = 'none';
        para2.style.display = 'none';
    }
    function toggleHide3(){
        let btn1 = document.getElementById('btn3');
        let para = document.getElementById('cv-templets3'); 
        let para1 = document.getElementById('cv-templets1'); 
        let para2 = document.getElementById('cv-templets2'); 
        let pr1 = document.getElementById('hello1'); 
        let pr3 = document.getElementById('hello3');
        let pr2 = document.getElementById('hello2'); 
        pr1.style.display = 'none';
        pr2.style.display = 'none';
        pr3.style.display = 'block';
        para.style.display = 'block';
        
        para1.style.display = 'none';
        para2.style.display = 'none';
    }
//print cv
function printfCV() {
    window.print();
}