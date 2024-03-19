const markRead = document.querySelector(".mark-read");
const notificationCount = document.querySelector(".notification-count");
const unread = document.querySelectorAll(".unread");
const tick = document.querySelectorAll(".tick");

markRead.addEventListener("click", (e) => {
  notificationCount.style.display = "none";
  unread.forEach((e) => {
    e.style.backgroundColor = "transparent";
  });
  tick.forEach((e) => {
    e.style.display = "none";
  });
});
