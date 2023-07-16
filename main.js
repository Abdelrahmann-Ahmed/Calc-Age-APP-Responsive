but = document.getElementsByClassName("button")[0];
input_1 = document.getElementsByClassName("input_1")[0];
input_2 = document.getElementsByClassName("input_2")[0];
input_3 = document.getElementsByClassName("input_3")[0];
span_1 = document.getElementsByTagName("span")[0];
span_2 = document.getElementsByTagName("span")[1];
span_3 = document.getElementsByTagName("span")[2];
head_1 = document.getElementsByClassName("head")[0];
head_2 = document.getElementsByClassName("head")[1];
head_3 = document.getElementsByClassName("head")[2];
over_1 = document.getElementsByClassName("over")[0];
over_2 = document.getElementsByClassName("over")[1];
over_3 = document.getElementsByClassName("over")[2];

ondblclick;
let date = new Date();

but.addEventListener("dblclick", function () {
    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
    head_1.style.color = "black";
    head_2.style.color = "black";
    head_3.style.color = "black";
    over_1.innerHTML = " ";
    over_2.innerHTML = " ";
    over_3.innerHTML = " ";
    span_1.innerHTML = "--";
    span_2.innerHTML = "--";
    span_3.innerHTML = "--";
    but.style.backgroundColor = "black";
});

but.addEventListener("click", function () {
  if (input_1.value == 0 || input_2.value == 0 || input_3.value == 0) {
    if (input_1.value == 0) {
      head_1.style.color = "red";
      over_1.innerHTML = `This Field Is required`;
      over_1.style.color = "red";
      over_1.style.fontSize = "10px";
      over_1.style.marginTop="-35px"
    }
    if (input_2.value == 0) {
      head_2.style.color = "red";
      over_2.innerHTML = `This Field Is required`;
      over_2.style.color = "red";
      over_2.style.fontSize = "10px";
      over_2.style.marginTop="-35px"
    }
    if (input_3.value == 0) {
      head_3.style.color = "red";
      over_3.innerHTML = `This Field Is required`;
      over_3.style.color = "red";
      over_3.style.fontSize = "10px";
      over_3.style.marginTop="-35px"
    }
  } else if (
    input_1.value <= 30 &&
    input_2.value <= 12 &&
    input_3.value <= date.getFullYear()
  ) {
    let years = date.getFullYear() - input_3.value;
    let months = date.getMonth() - input_2.value;
    let days = +input_1.value + date.getDay();
    if (months<0) {
      months+=12
      years-=1
    }
    span_1.innerHTML = `${years}`;
    span_2.innerHTML = `${months}`;
    span_3.innerHTML = `${days}`;
    but.style.backgroundColor = "hsl(261, 45%, 44%)";
    head_1.style.color = "black";
    head_2.style.color = "black";
    head_3.style.color = "black";
    over_1.innerHTML = " ";
    over_2.innerHTML = " ";
    over_3.innerHTML = " ";
  }
  if (input_1.value > 30 ||input_2.value > 12 ||input_3.value > date.getFullYear()) {
    if (input_1.value > 30) {
      head_1.style.color = "red";
      over_1.innerHTML = `must be avalid day`;
      over_1.style.color = "red";
      over_1.style.fontSize = "10px";
      over_1.style.marginTop="-35px"
    }
    if (input_2.value > 12) {
      head_2.style.color = "red";
      over_2.innerHTML = `must be avalid month`;
      over_2.style.color = "red";
      over_2.style.fontSize = "10px";
      over_2.style.marginTop="-35px"
    }
    if (input_3.value > date.getFullYear()) {
      head_3.style.color = "red";
      over_3.innerHTML = `must be avalid year`;
      over_3.style.color = "red";
      over_3.style.fontSize = "10px";
      over_3.style.marginTop="-35px"
    }
  }
});
