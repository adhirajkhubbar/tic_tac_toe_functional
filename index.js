let  boxElements=document.querySelectorAll(".box")

for(let i=0;i<boxElements.length;i++){
    //console.log(boxElements[i]);
    boxElements[i].addEventListener("click",handleclick)
}

let flag=true;

function handleclick(event){
    let currEle=event.target;
    let id=currEle.id;
    let text=document.createElement("p");
    if(flag==true){
    text.textContent="X";
    arr[id-1]="X"
   
   }else{
    text.textContent="0";
    arr[id-1]="0"
    
   }
   text.style.fontsize="30px";
   text.style.color="orange";
   currEle.append(text);
   flag=!flag;
   checkResults();
}

function checkResults(){
    let res1=arr[0]+arr[1]+arr[2];
    let res2=arr[3]+arr[4]+arr[5];
    let res3=arr[6]+arr[7]+arr[8];
    let res4=arr[0]+arr[3]+arr[6];
    let res5=arr[1]+arr[4]+arr[7];
    let res6=arr[2]+arr[5]+arr[8];
    let res7=arr[0]+arr[4]+arr[8];
    let res8=arr[6]+arr[4]+arr[2];
}
