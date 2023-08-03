const questionEle=document.querySelector(".questionText");
const inputForm=document.querySelector(".inputForm");

const score = document.querySelector("#score");





let storedAnswer;
let result=localStorage.getItem("score");

const generateRandomNumber=(min,max) =>{
  return Math.floor((Math.random()*(max-min +1 )+min));

}

const generateRandomQuestions = ()=>{
  const randomNum1=generateRandomNumber(1,10);
  const randomNum2=generateRandomNumber(1,10);

  const questionType=generateRandomNumber(1,4);

  let firstNum;
  let secondNum;

  if(randomNum1 > randomNum2 && questionType > 2){
    firstNum=randomNum1;
    secondNum=randomNum2;

  }
  else{
    firstNum=randomNum2;
    secondNum=randomNum1;

  }

  let question;
  let answer;


  switch (questionType) {
    case 1:
      {
        question=`Q. What is ${firstNum} multiply by ${secondNum} ?`;

        answer=firstNum * secondNum;

        break;
      }
      case 2:
      {
        question=`Q. What is ${firstNum} divided by ${secondNum} ?`;

        answer=firstNum / secondNum;
        break;
      }
      case 3:
      {
        question=`Q. What is ${firstNum} subtract from ${secondNum} ?`;

        answer=firstNum - secondNum;
        break;
      }
      case 4:
      {
        question=`Q. What is ${firstNum} addition by ${secondNum} ?`;

        answer=firstNum + secondNum;
        break;
      }
  
    default:
      console.log("Sorrry Not valid ");
      break;
  }

  const randomQuestion={question,answer};

  return randomQuestion;
}

const showQuestion = () => {

  const Question=generateRandomQuestions();
  const {question,answer}=Question;
  storedAnswer=answer;
  
  questionEle.innerText=question;
  score.innerText=result;
  
}
showQuestion();

const verifyAnswer = (event)=>{
  event.preventDefault();

  const formData=new FormData(inputForm);

  const answer = parseInt(formData.get("answer"));
  
  if(answer === storedAnswer){
    result += 2;
    Toastify({
      text: `You answer is correct and Score is ${score} `,
      className: "info",
      gravity:"bottom",
      position:"center",

      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    
  }
  else{
    result -= 1;
    Toastify({
      text: `You answer is wrong and Score is ${score} `,
      className: "info",
      gravity:"bottom",
      position:"center",

      style: {
        background: "linear-gradient(toright, #e33217, #ff001e)"
        ,
      }
    }).showToast();
    
  }
  
  score.innerHTML=result;
  localStorage.setItem("score",result);
  event.target.reset();
  showQuestion();
}
verifyAnswer();


