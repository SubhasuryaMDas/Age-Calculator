const birthdate = document.querySelector("#birthday");
const result = document.querySelector("#resultAge");
const btn =document.querySelector("#btn");

function calculateAge() {
  const birthdayValue = birthdate.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}



function getAge(birthdayValue) {
    let currentDate = new Date();
    let birthDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    if(month < 0 || 
        (month === 0 && currentDate.getDate() < birthDate.getDate())
    ){
        age --;
    }
    return age;
}
btn.addEventListener("click", calculateAge);