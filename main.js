
const popupTrigggerBtn = document.querySelector('.btn-container button')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupDimm = document.querySelector('.popup-dimm')
const popupIcon = document.querySelector('.popup-title i')

popupTrigggerBtn.addEventListener('click', () => {
  popupWrapper.classList.add('active');
  setTimeout(() => {
    popupWrapper.style.opacity = 1;
  }, 1);
})

const closePopup = () => {
  popupWrapper.style.opacity = 0;
  setTimeout(() => {
    popupWrapper.classList.remove('active');
  }, 150);
}

popupDimm.addEventListener('click', closePopup)
popupIcon.addEventListener('click', closePopup)

popupWrapper.style.opacity = 0;