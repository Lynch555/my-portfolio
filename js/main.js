"use strict";

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


const ajaxSend = async (formatData) => { //создаем фукцию отправки формы
  const fetchResp = await fetch("telegram.php", { //указываем обработчик формы - telegram.php
    method: "POST", //метод,которым мы отправляем форму
    body: formatData, //содержимое input
  });

  if (!fetchResp.ok) { //если ошибка то...
    throw new Error('Ошибка по адресу ${url}, статус ошибки ${fetchResp.ststus}'); // выводим ствтус ошибки и текст
  }
  return await fetchResp.text(); //если все хорошо, возвращаем ответ сервера
};

const form = document.querySelectorAll("form"); //находим все теги form
form.forEach((form) => { //для каждой формы...
  form.addEventListener("submit", function (e) { // отслеживаем событие отправки
    e.preventDefault(); // отмена стандартной отправки формы
    const formatData = new FormData(this); //собираем все данные из формы

    ajaxSend(formatData) //передаем данные из формы в обработчик
      .then((response) => { //если все успешно, то...
        this.innerHTML = "Спасибо, <br> заявку получил"; //окно благодарности
        form.reset(); //очищаем поля формы
      })
      .catch((err) => console.error(err)); //если ошибка выводим в консоль
  });
});






// движение при клике на руку

userName.onmouseover = function () {




  let start = Date.now();
  let timer = setInterval(function () {
    let timmePassed = Date.now() - start;
    hand.style.right = timmePassed / 5 + 'px';
    if (timmePassed > 50)
      clearInterval(timer);
    hand.style.right = timmePassed / -1 + 'px';
    if (timmePassed > 500)
      clearInterval(timer);
    hand.style.top = '140px';
  }, 5);
};

userEmail.onmouseover = function () {

  let start = Date.now();
  let timer = setInterval(function () {
    let timmePassed = Date.now() - start;
    hand.style.right = timmePassed / 5 + 'px';
    if (timmePassed > 100)
      clearInterval(timer);
    hand.style.right = timmePassed / -1 + 'px';
    if (timmePassed > 500)
      clearInterval(timer);
    hand.style.top = '230px';
  }, 5);
};

userMassage.onmouseover = function () {

  let start = Date.now();
  let timer = setInterval(function () {
    let timmePassed = Date.now() - start;
    hand.style.right = timmePassed / 5 + 'px';
    if (timmePassed > 100)
      clearInterval(timer);
    hand.style.right = timmePassed / -1 + 'px';
    if (timmePassed > 500)
      clearInterval(timer);
    hand.style.top = '350px';
  }, 5);
};
// --------------------------------------------------------------------------------

// let elem = document.getElementById('feedback');
// elem.insertAdjacentText('beforebegin', 'Это я');
// console.dir(elem);

// Сделал div   id=toltip-------и вставил в конце scills--------

let div = document.createElement('feedback');
div.className = "alert";
div.id = "tooltip";
div.innerHTML = "<strong>Всем привет!</strong> Это я её оживил !";
document.body.append(div);

const h1 = document.getElementById('scills');
const h2 = document.querySelector('feedback.alert');
h1.insertAdjacentElement('afterend', h2);

// Заставил его появляться----------------------------------------------

const hand = document.getElementById('hand');
const tooltip = document.getElementById('tooltip');

hand.onmouseover = function () {
  tooltip.style.visibility = "visible";
};
hand.onmouseout = function () {
  tooltip.style.visibility = "hidden";
};



// -----------------------------------------------------------------------------

// const userName = document.getElementById('userName');
// const userEmail = document.getElementById('userEmail');
// const userMassage = document.getElementById('userMassage');

// const logger = function () {
//   let start = Date.now();
//   let timer = setInterval(function () {
//     let timmePassed = Date.now() - start;
//     hand.style.right = timmePassed / 5 + 'px';
//     if (timmePassed > 50)
//       clearInterval(timer);
//     hand.style.right = timmePassed / -1 + 'px';
//     if (timmePassed > 500)
//       clearInterval(timer);
//     hand.style.top = '140px';


//     if ('onmouseover' === userEmail) {
//       hand.style.top = '230px';
//     } else if ('onmouseover' === userMassage) {
//       hand.style.top = '350px';
//     }

//   }, 5);
// };

// userName.onmouseover = logger;
// userEmail.onmouseover = logger;
// userMassage.onmouseover = logger;

// -------------------------------------------------------------------------
anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});

// -----------------
function fitElementToParent(el, padding) {
  var timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {
      scale: 1
    });
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {
      scale: ratio
    }), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

var layeredAnimation = (function () {

  var transformEls = document.querySelectorAll('.transform-progress');
  var layeredAnimationEl = document.querySelector('.layered-animations');
  var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
  var triangleEl = layeredAnimationEl.querySelector('polygon');
  var trianglePoints = triangleEl.getAttribute('points').split(' ');
  var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

  fitElementToParent(layeredAnimationEl);

  function createKeyframes(value) {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({
      value: value
    });
    return keyframes;
  }

  function animateShape(el) {

    var circleEl = el.querySelector('circle');
    var rectEl = el.querySelector('rect');
    var polyEl = el.querySelector('polygon');

    var animation = anime.timeline({
        targets: el,
        duration: function () {
          return anime.random(600, 2200);
        },
        easing: function () {
          return easings[anime.random(0, easings.length - 1)];
        },
        complete: function (anim) {
          animateShape(anim.animatables[0].target);
        },
      })
      .add({
        translateX: createKeyframes(function (el) {
          return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
        }),
        translateY: createKeyframes(function (el) {
          return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
        }),
        rotate: createKeyframes(function () {
          return anime.random(-180, 180);
        }),
      }, 0);
    if (circleEl) {
      animation.add({
        targets: circleEl,
        r: createKeyframes(function () {
          return anime.random(32, 72);
        }),
      }, 0);
    }
    if (rectEl) {
      animation.add({
        targets: rectEl,
        width: createKeyframes(function () {
          return anime.random(64, 120);
        }),
        height: createKeyframes(function () {
          return anime.random(64, 120);
        }),
      }, 0);
    }
    if (polyEl) {
      animation.add({
        targets: polyEl,
        points: createKeyframes(function () {
          var scale = anime.random(72, 180) / 100;
          return trianglePoints.map(function (p) {
            return p * scale;
          }).join(' ');
        }),
      }, 0);
    }

  }

  for (var i = 0; i < shapeEls.length; i++) {
    animateShape(shapeEls[i]);
  }

})();
