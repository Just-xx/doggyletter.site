
const popupTrigggerBtn = document.querySelector('.btn-container button')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupDimm = document.querySelector('.popup-dimm')
const popupIcon = document.querySelector('.popup-title i')
const popupSubmitEl = document.querySelector('.popup-submit')

const popupInput = document.querySelector('.popup-input');

const msgMailEl = document.querySelector('.mail');
const submitMsgEl = document.querySelector('.submit-msg');

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

const submitPopup = () => {
  submitMsgEl.classList.add('active-msg');
  msgMailEl.textContent = popupInput.value;

  setTimeout(() => submitMsgEl.style.transform = 'translateY(0)', 1);

  setTimeout(() => submitMsgEl.style.transform = 'translateY(-100%)', 8000)
  setTimeout(() => submitMsgEl.classList.remove('active-msg'), 8100)
}
 
popupDimm.addEventListener('click', closePopup)
popupIcon.addEventListener('click', closePopup)

popupSubmitEl.addEventListener('click', () => {
  submitPopup();
  closePopup();
})

popupWrapper.style.opacity = 0;