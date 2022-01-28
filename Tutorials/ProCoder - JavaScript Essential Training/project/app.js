let counters = document.querySelectorAll(".counter");
let time = 300;

counters.forEach((counter) => {
  let updateCount = () => {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    let incremeant = target / time;

    if (count < target) {
      counter.innerText = Math.ceil(count + incremeant);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

let healthCondition = document.querySelector(".health");

setTimeout(() => {
  healthCondition.innerText = "You are Fit!";
}, 2000);
