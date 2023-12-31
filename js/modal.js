'use-strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const country = document.querySelector('.country');
const countryContent = document.querySelector('.country__content');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

export default {
  openModal,
  closeModal,
  modal,
  overlay,
  btnCloseModal,
  country,
  countryContent
};
