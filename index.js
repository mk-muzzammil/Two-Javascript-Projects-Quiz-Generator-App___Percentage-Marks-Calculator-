const calculateform = document.querySelector(".inputGrid");
const button=document.querySelector("#calculateButton");
const resultParaEle = document.querySelector(".resultPara");

const calculateMarks = (event) => {
  event.preventDefault();
  
  const formData = new FormData(calculateform);
  const totalMarks=400;
  const data = {};

  formData.forEach((value, key) => {
    data[key] = parseInt(value); // If you need the value as a number.
  });

  const obtainedTotal =data.maths + data.hindi + data.Science + data.english;
  const percentage=Math.floor(obtainedTotal/totalMarks * 100);
  
 
  resultParaEle.innerText=`You have Obtained ${obtainedTotal} marks out of ${totalMarks} ,Your Percentage is ${percentage}% `;
 
};

// Add the event listener to the form submission
button.addEventListener('click', calculateMarks);
