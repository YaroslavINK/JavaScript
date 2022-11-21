// export
const callbackPrompt = {
  message: 'Input your phone number please',
  showPrompt() {
    const number = prompt(this.message);
    console.log(number);
  },

  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

// callbackPrompt.showPrompt();
// callbackPrompt.showDeferredPrompt(2000);
