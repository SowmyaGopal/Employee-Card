console.log('Hello!');
let employees = [
    {
        Name : 'Alaikya',
        Organization : 'Nyka',
        Empid : '1101',
        PhoneNumber : 7250819791,
        Address:'Bangalore'
       },
       {
          Name : 'Sowmya',
          Organization : 'Google',
          Empid : '1102',
          PhoneNumber : 9876543209,
          Address:'Pune'
        },
        {
          Name : 'Ganga',
          Organization : 'Twitter',
          Empid : '1103',
          PhoneNumber : 9495969495,
          Address:'Mumbai'
        },
        {
          Name : 'Prerana',
          Organization : 'Puma',
          Empid : '1104',
          PhoneNumber : 8499900083,
          Address:'Chennai'
        },
        {
            Name : 'Nandini',
            Organization : 'IBM',
            Empid : '11055',
            PhoneNumber : 7866655944,
            Address:'Gujurath'
          },
          {
            Name : 'Daisy',
            Organization : 'Netflix',
            Empid : '1106',
            PhoneNumber : 7250819791,
            Address:'Bengal'
          },
          {
            Name : 'Renu',
            Organization : 'Accenture',
            Empid : '1107',
            PhoneNumber : 7250819791,
            Address:'Somalaya'
          },
]
let display=true;
function showemployesfun(){
let container=document.getElementById("container");

let div2=``;
employees.forEach((ele,index)=>{
  div2=div2+`<div id="${index}">
  <p>Name : ${ele['Name']}</p>
  <p>Organization : ${ele['Organization']}</p>
  <p>PhoneNumber : ${ele['PhoneNumber']}</p>
  <p>Empid : ${ele['Empid']}</p>
  <p>Address : ${ele['Address']}</p>
  <button id="${index}" onclick="Confirmation(${ele['Empid']})">Delete</button>

  </div>
  `
})


container.innerHTML = div2;
display=!display
if(display){
  container.style.display='none';

}else{
  container.style.display='flex';

}
}


function Confirmation(x){
    
    let condiv=`<div id="confirmpopup"><p>Sure..?</p><button onclick="Deleting(${x})">Delete</button><button id="nobtn" onclick="cancelling()">Cancel</button> </div>`

    container.innerHTML=condiv;

}

function Deleting(empid){
    let divindex=employees.findIndex((element)=>element['empid']==empid);

    employees.splice(divindex,1);
    showemployesfun();

}

function cancelling(){
    showemployesfun();
}