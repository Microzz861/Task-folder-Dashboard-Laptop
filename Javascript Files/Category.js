let tScore = 0;
const impScore = 5;
const nScore = 3;
let count = 6;






function getCatTasks(catID){
  //without node.createElement/fragment
  const tList = document.createElement('ul');
  tList.style.maxHeight='100%';
  tList.style.display='block';
  tList.style.flexDirection='columns';



  let taskString = '';
  let i=0;
  let c=6;
  setInterval(()=>
  {
    if(i>c) clearInterval();
    else{
      const tItem = document.createElement('li');
      tItem.style.display='block';
      tItem.style.width='100%';


      tItem.innerHTML=
      taskString= `<div class="task-card" id="js-task-card">
      <div class="cat-name">  
        <p class="pCategory-task"> Insert Name </p>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style="vertical-align: middle;" >
          <circle fill="#ffef09" stroke="none" cx="8" cy="8" r="8"/> 
          <img width="12" height="12" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1" style="position: relative; left:-14px; bottom: -2px"/>
          </svg>
          <p class="pCategory-task" style="vertical-align: middle; position: relative; margin-left: -10px; align-items: center;">Task Score: 5 </p>
      </div>
      `;
      tList.appendChild(tItem);
     
    
   


      i++;
      console.log(taskString);
    }
  },500);

  console.log(tList);
  document.getElementById('cat').appendChild(tList);
  i=0;
  setInterval(()=>{  if(i>c) clearInterval();  
    else{tList.childNodes.
    forEach(argument,()=>{document.getElementById('js-task-card').
    classList.add('task-card-enter');})}},500);

}



window.addEventListener("DOMContentLoaded", (event) => {
  console.log('Microzz is L bozo');

  console.log('lol');
  //setTimeout(()=>{document.getElementById('js-task-card2').classList.add('task-card-enter2'); console.log('lol2');},5500);
  let i=0;
  setInterval(()=>{if (i>9) clearInterval(); else{i++; console.log(i);}},1000);  
  


});
/*
 <div class="task-card task-card-enter" id="js-task-card">
        <div class="cat-name">
          <p class="pCategory-task"> Insert Name </p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style="vertical-align: middle;" >
            <circle fill="#ffef09" stroke="none" cx="8" cy="8" r="8"/> 
            <img width="12" height="12" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1" style="position: relative; left:-14px; bottom: -2px"/>
            </svg>
            <p class="pCategory-task" style="vertical-align: middle; position: relative; margin-left: -10px; align-items: center;">Task Score: 5 </p>
        </div>
      </div>
        <div class="task-card2" id="js-task-card2">
          <div class="cat-name">
            <p class="pCategory-task"> Insert Name </p>
            <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" style="vertical-align: middle;" >
              <circle fill="#ffef09" stroke="none" cx="8" cy="8" r="8"/> 
              <img width="12" height="12" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1" style="position: relative; left:-14px; bottom: -2px"/>
              </svg>
              <p class="pCategory-task" style="vertical-align: middle; position: relative; margin-left: -10px; align-items: center;">Task Score: 5 </p>
          </div>
       </div>
*/