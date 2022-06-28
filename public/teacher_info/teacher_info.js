var x = screen.height;
x = x - 110;
document.getElementById("content").style.height = `${x}px`;

function display(a) {
  if (a.style.display == "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const weekUse = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; 

var today = new Date();
var today_day = today.getDay();
var hours = today.getHours();
var min = today.getMinutes();
var second = today.getSeconds();
var after_sec = ((24 - hours) * 60 - min) * 60 - second;

for (let index = 0; index < 49; index++) {
  if (
    document.getElementsByClassName("checkclass")[index].innerHTML != "No Class"
  ) {
    document.getElementsByClassName("checkclass")[index].style.backgroundColor =
      "#9cadfd";
    document.getElementsByClassName("checkclass")[index].style.color = "black";
  }
}

for (let index = 0; index < 8; index++) {
  if (
    today_day != 0 &&
    document.getElementsByClassName(`${weekday[today_day - 1]}`)[index]
      .innerHTML != "No Class"
  ) {
    document.getElementsByClassName(`${weekday[today_day - 1]}`)[
      index
    ].style.backgroundColor = "#105652";
    document.getElementsByClassName(`${weekday[today_day - 1]}`)[
      index
    ].style.color = "white";
  }

  if (
    today_day == 0 &&
    document.getElementsByClassName(`${weekday[6]}`)[index].innerHTML !=
      "No Class"
  ) {
    document.getElementsByClassName(`${weekday[6]}`)[
      index
    ].style.backgroundColor = "#105652";
    document.getElementsByClassName(`${weekday[6]}`)[index].style.color =
      "white";
  }
}

setTimeout(() => {
  let today = new Date();
  let today_day = today.getDay();

  for (let index = 0; index < 7; index++) {
    document.getElementsByClassName("weekday")[index].style.backgroundColor =
      "#84DFFF";
    document.getElementsByClassName("weekday")[index].style.color = "black";
  }

  for (let index = 0; index < 49; index++) {
    if (
      document.getElementsByClassName("checkclass")[index].innerHTML !=
      "No Class"
    ) {
      document.getElementsByClassName("checkclass")[
        index
      ].style.backgroundColor = "#9cadfd";
      document.getElementsByClassName("checkclass")[index].style.color =
        "black";
    }
  }

  for (let index = 0; index < 8; index++) {
    if (
      today_day != 0 &&
      document.getElementsByClassName(`${weekday[today_day - 1]}`)[index]
        .innerHTML != "No Class"
    ) {
      document.getElementsByClassName(`${weekday[today_day - 1]}`)[
        index
      ].style.backgroundColor = "#105652";
      document.getElementsByClassName(`${weekday[today_day - 1]}`)[
        index
      ].style.color = "white";
    }

    if (
      today_day == 0 &&
      document.getElementsByClassName(`${weekday[6]}`)[index].innerHTML !=
        "No Class"
    ) {
      document.getElementsByClassName(`${weekday[6]}`)[
        index
      ].style.backgroundColor = "#105652";
      document.getElementsByClassName(`${weekday[6]}`)[index].style.color =
        "white";
    }
  }
}, after_sec * 1000);

if (
  hours > 8 &&
  hours < 16 &&
  document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8]
    .innerHTML != "No Class" &&
  document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8]
    .innerHTML != "Lunch Time"
) {
  document.getElementsByClassName(`${weekUse[today_day]}`)[
    hours - 8
  ].style.backgroundColor = "#F6F631";
  document.getElementsByClassName(`${weekUse[today_day]}`)[
    hours - 8
  ].style.color = "black";
  document.getElementsByClassName(`${weekUse[today_day]}`)[
    hours - 8
  ].style.fontWeight = "900";
}

setTimeout(() => {
  if (
    hours > 8 &&
    hours < 16 &&
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8]
      .innerHTML != "No Class" &&
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 8]
      .innerHTML != "Lunch Time"
  ) {
    document.getElementsByClassName(`${weekUse[today_day]}`)[
      hours - 8
    ].style.backgroundColor = "#105652";
    document.getElementsByClassName(`${weekUse[today_day]}`)[
      hours - 8
    ].onclick = "";
    document.getElementsByClassName(`${weekUse[today_day]}`)[
      hours - 8
    ].style.cursor = "auto";

    document.getElementsByClassName(`${weekUse[today_day]}`)[
      hours - 8
    ].style.color = "white";
    document.getElementsByClassName(`${weekUse[today_day]}`)[
      hours - 8
    ].style.fontWeight = "400";
  }

  let newhours = new Date().getHours();
  let newtoday_day = new Date().getDay();

  if (
    newhours > 8 &&
    newhours < 16 &&
    document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8]
      .innerHTML != "No Class" &&
    document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8]
      .innerHTML != "Lunch Time"
  ) {
    document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
      newhours - 8
    ].style.backgroundColor = "#F6F631";
    document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
      newhours - 8
    ].style.color = "black";
    document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
      newhours - 8
    ].style.fontWeight = "900";
  }

  setInterval(() => {
    if (
      newhours > 8 &&
      newhours < 16 &&
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8]
        .innerHTML != "No Class" &&
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8]
        .innerHTML != "Lunch Time"
    ) {
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
        newhours - 8
      ].style.backgroundColor = "#105652";
      document.getElementsByClassName(`${weekUse[today_day]}`)[
        hours - 8
      ].onclick = "";
      document.getElementsByClassName(`${weekUse[today_day]}`)[
        hours - 8
      ].style.cursor = "auto";
      document.getElementsByClassName(`${weekUse[today_day]}`)[
        hours - 8
      ].style.color = "white";
      document.getElementsByClassName(`${weekUse[today_day]}`)[
        hours - 8
      ].style.fontWeight = "400";
    }

    newhours = new Date().getHours();
    newtoday_day = new Date().getDay();
    if (
      newhours > 8 &&
      newhours < 16 &&
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8]
        .innerHTML != "No Class" &&
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[newhours - 8]
        .innerHTML != "Lunch Time"
    ) {
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
        newhours - 8
      ].style.backgroundColor = "#F6F631";
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
        newhours - 8
      ].style.color = "black";
      document.getElementsByClassName(`${weekUse[newtoday_day]}`)[
        newhours - 8
      ].style.fontWeight = "900";
    }
  }, 3600000);
}, (60 - min) * 60000);

if (min < 50) {
  setTimeout(() => {
    let newtoday_day1 = new Date().getDay();
    let newhours1 = new Date().getHours();
    let newmin1 = new Date().getMinutes();

    if (
      newhours1 > 8 &&
      newhours1 < 15 &&
      newmin1 >= 50 &&
      document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
        newhours1 - 7
      ].innerHTML != "No Class" &&
      document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
        newhours1 - 7
      ].innerHTML != "Lunch Time"
    ) {
      document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
        newhours1 - 7
      ].style.backgroundColor = "#F8485E";
    }
    setInterval(() => {
      newtoday_day1 = new Date().getDay();
      newhours1 = new Date().getHours();
      newmin1 = new Date().getMinutes();

      if (
        newhours1 > 8 &&
        newhours1 < 15 &&
        newmin1 >= 50 &&
        document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
          newhours1 - 7
        ].innerHTML != "No Class" &&
        document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
          newhours1 - 7
        ].innerHTML != "Lunch Time"
      ) {
        document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
          newhours1 - 7
        ].style.backgroundColor = "#F8485E";
      }
    }, 3600000);
  }, (50 - min) * 60000);
} else {
  if (
    hours > 8 &&
    hours < 15 &&
    min >= 50 &&
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 7]
      .innerHTML != "No Class" &&
    document.getElementsByClassName(`${weekUse[today_day]}`)[hours - 7]
      .innerHTML != "Lunch Time"
  ) {
    document.getElementsByClassName(`${weekUse[today_day]}`)[
      hours - 7
    ].style.backgroundColor = "#F8485E";
  }

  setTimeout(() => {
    let newtoday_day1 = new Date().getDay();
    let newhours1 = new Date().getHours();
    let newmin1 = new Date().getMinutes();

    if (
      newhours1 > 8 &&
      newhours1 < 15 &&
      newmin1 >= 50 &&
      document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
        newhours1 - 7
      ].innerHTML != "No Class" &&
      document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
        newhours1 - 7
      ].innerHTML != "Lunch Time"
    ) {
      document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
        newhours1 - 7
      ].style.backgroundColor = "#F8485E";
    }
    setInterval(() => {
      newtoday_day1 = new Date().getDay();
      newhours1 = new Date().getHours();
      newmin1 = new Date().getMinutes();

      if (
        newhours1 > 8 &&
        newhours1 < 15 &&
        newmin1 >= 50 &&
        document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
          newhours1 - 7
        ].innerHTML != "No Class" &&
        document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
          newhours1 - 7
        ].innerHTML != "Lunch Time"
      ) {
        document.getElementsByClassName(`${weekUse[newtoday_day1]}`)[
          newhours1 - 7
        ].style.backgroundColor = "#F8485E";
      }
    }, 3600000);
  }, (60 - min + 50) * 60000);
}
