// document.querySelector('#eng').style.display=`none`;

// for(let one=0; one<document.querySelectorAll('#eng').length; one++){
//   console.log(one);
//   document.querySelectorAll('#eng')[one].style.display=`none`;
// }
// console.log('OK');
function checkButton(){
  // console.log('check');
  if(document.querySelector('#che').checked){
    // console.log('Checked!!!!!!!!!!!!!!1');
    for(let two=0; two<document.querySelectorAll('#eng').length; two++){
      document.querySelectorAll('#eng')[two].style.display=`block`;
      document.querySelectorAll('#rus')[two].style.display=`none`;
    }
  }else{
    for(let one=0; one<document.querySelectorAll('#eng').length; one++){
      // console.log(one);
      document.querySelectorAll('#eng')[one].style.display=`none`;
      document.querySelectorAll('#rus')[one].style.display=`block`;
    }
  }
}

document.querySelector('#che').addEventListener('click',checkButton);
