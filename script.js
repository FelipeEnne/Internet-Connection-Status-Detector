// window.addEventListener("load", (e) => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
// });

// window.addEventListener("offline", (e) => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = "Offline";
// });

// window.addEventListener("online", (e) => {
//   const statusDisplay = document.getElementById("status");
//   statusDisplay.textContent = "Online";
// });

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function serColor() {
  bgColor.classList.add("online");
}

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    ); //don´t cache

    image.src = "./images/online.png";
    statusDisplay.textContent = "You are Online";
    serColor();
  } catch (error) {
    statusDisplay.textContent = "No internet connection";
    image.src = "./images/offline.png";
    bgColor.classList.remove("online");
  }
}

// monitoring
setInterval(async () => {
  await connectionStatus();
}, 5000);

//load
window.addEventListener("load", async (e) => {
  await connectionStatus();
});
