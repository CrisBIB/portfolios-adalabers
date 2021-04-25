"use strict";

const frP = new FileReader();
const frB = new FileReader();

//Photo
const uploadPhotoBtn = document.querySelector(".js__photo-trigger");
const photoFile = document.querySelector(".js__upload-photo");
const photoPreview = document.querySelector(".js__photo-preview");

let photo = "";

function getPhoto(ev) {
  ev.preventDefault();
  const myFile = ev.currentTarget.files[0];
  frP.addEventListener("load", writePhoto);
  frP.readAsDataURL(myFile);
}

function writePhoto() {
  photo = frP.result;
  updatePhoto();
  saveDataInLS();
}

function updatePhoto() {
  photoPreview.style.backgroundImage = `url(${photo})`;
}

function fakeFileClickPhoto(ev) {
  ev.preventDefault();
  photoFile.click();
}

uploadPhotoBtn.addEventListener("click", fakeFileClickPhoto);
photoFile.addEventListener("change", getPhoto);

//Background
const uploadBackgroundBtn = document.querySelector(".js__background-trigger");
const backgroundFile = document.querySelector(".js__upload-background");
const backgroundPreview = document.querySelector(".js__background-preview");

let background = "";

function getBackground(ev) {
  ev.preventDefault();
  const myFile = ev.currentTarget.files[0];
  frB.addEventListener("load", writeBackground);
  frB.readAsDataURL(myFile);
}

function writeBackground() {
  background = frB.result;
  updateBackground();
  saveDataInLS();
}

function updateBackground() {
  backgroundPreview.style.backgroundImage = `url(${background})`;
}

function fakeFileClickBg(ev) {
  ev.preventDefault();
  backgroundFile.click();
}

uploadBackgroundBtn.addEventListener("click", fakeFileClickBg);
backgroundFile.addEventListener("change", getBackground);
