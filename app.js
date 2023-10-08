let box = document.querySelectorAll(".box");
let error = 0;
let randomArray = [];
box.forEach((boxs) => {
  boxs.innerHTML += '<i class="fa-solid fa-question"></i>';
});
for (let i = 0; i <= 16; i++) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  randomArray.push(randomNumber);
}
box.forEach((boxss) => {
  boxss.addEventListener("click", (e) => {
    let randomLocalArray = Math.floor(Math.random() * 16 + 0);
    boxss.classList.add("active");
    boxss.innerHTML = randomArray[randomLocalArray];
    saveLocalStorage(randomArray[randomLocalArray]);
  });
});
const saveLocalStorage = (index) => {
  let indexOne = localStorage.getItem("indexOne");
  let indexTwo = localStorage.getItem("indexTwo");
  if (indexOne == null) {
    localStorage.setItem("indexOne", index);
  }
  if (indexOne != null) {
    localStorage.setItem("indexTwo", index);
    cardControl();
  }
};
const cardControl = () => {
  let indexOne = localStorage.getItem("indexOne");
  let indexTwo = localStorage.getItem("indexTwo");
  console.log(indexOne + " : " + indexTwo);
  if (indexOne != null && indexTwo != null) {
    if (indexOne == indexTwo) {
      alert("beni yıkaladın");
      localStorage.clear();
    } else {
      error++;
      alert("Hatalandın !!");
      localStorage.clear();
    }
  }
};
