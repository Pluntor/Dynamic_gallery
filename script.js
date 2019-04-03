//pobranie przycisku, modala, obrazów i wrapa 

let modalWrap = document.querySelector(".modal-wrap");
let wrap = document.querySelector(".wrap");
let btnForLoop = document.querySelector("button");
let images = document.querySelectorAll("img");

btnForLoop.addEventListener("click", function () {

  modalWrap.classList.add("active");
  wrap.classList.add("blur");

  let modal = document.querySelector(".modal");

  for (let i = 0; i < images.length; i++) {

    // dodanie klasy active do modala i aktywacja blur na tle


    if (images[i].naturalWidth > 200 || images[i].naturalHeight > 200) {
      images[i].style.width = ((images[i].naturalWidth) / 6) + "px";
      images[i].style.height = ((images[i].naturalHeight) / 6) + "px";
    }

    let maxTopPosition = modal.clientHeight - images[i].height;
    let maxLeftPosition = modal.clientWidth - images[i].width;
    let randomHeightNumber = (Math.floor(Math.random() * maxTopPosition)) + 1;
    let randomWidthNumber = (Math.floor(Math.random() * maxLeftPosition)) + 1;

    images[i].style.top = (maxTopPosition - randomHeightNumber) + "px";
    images[i].style.left = (maxLeftPosition - randomWidthNumber) + "px";
  }

})

// pobranie div.close, zamknięcie modala i usunięcie klasy active oraz blur

let divClose = document.querySelector(".close");

divClose.addEventListener("click", function () {
  modalWrap.classList.remove("active");
  wrap.classList.remove("blur");
})