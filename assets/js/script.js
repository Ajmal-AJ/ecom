
$(window).scroll(function() {    

  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
      $(".navbar-scroll").addClass("fixed-top");
  }else {
      $(".navbar-scroll").removeClass("fixed-top");
  }
});



(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 500;

  console.log(hour)
  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
}());


filterSelection("men")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product-item");
  if (c == "men") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("categories");
var btns = btnContainer.getElementsByClassName("category-item-nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


$('.banner-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,

      loop: false
    }
  }
})

$('.brand-box .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 5,

      loop: false
    }
  }
})
$('.testimonials-box .owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 2,

      loop: false
    }
  }
})