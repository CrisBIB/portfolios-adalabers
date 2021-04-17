"use strict";

const fr = new FileReader();

//Photo
const uploadPhotoBtn = document.querySelector(".js__photo-trigger");
const photoFile = document.querySelector(".js__upload-photo");
const photoPreview = document.querySelector(".js__photo-preview");

let photo = "";

function getPhoto(ev) {
  ev.preventDefault();
  const myFile = ev.currentTarget.files[0];
  fr.addEventListener("load", writePhoto);
  fr.readAsDataURL(myFile);
}

function writePhoto() {
  photo = fr.result;
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
  fr.addEventListener("load", writeBackground);
  fr.readAsDataURL(myFile);
}

function writeBackground() {
  background = fr.result;
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
