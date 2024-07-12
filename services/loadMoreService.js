const hiddenClass = "is-hidden";

function hide(button) {
  button.classList.add(hiddenClass);
}

function show(button) {
  button.classList.remove(hiddenClass);
}

function disable(button, spinner) {
  button.disabled = true;
  spinner.classList.remove(hiddenClass);
}

function enable(button, spinner) {
  button.disabled = false;
  spinner.classList.add(hiddenClass);
}

export default { hide, show, disable, enable };
