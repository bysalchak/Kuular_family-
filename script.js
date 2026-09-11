const envelope = document.getElementById("envelope");
const opening = document.getElementById("opening");
const openButton = document.getElementById("openButton");
const parents = document.getElementById("parents");

function openInvitation() {
  envelope.classList.add("open");
  opening.classList.add("opened");
}

envelope.addEventListener("click", function (event) {
  event.preventDefault();

  if (envelope.classList.contains("open")) {
    parents.scrollIntoView({
      behavior: "smooth"
    });
  } else {
    openInvitation();
  }
});

openButton.addEventListener("click", openInvitation);