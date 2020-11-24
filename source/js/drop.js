for (let i = 0; i < Math.floor(window.innerWidth / 16); i++) {
    let tmp = document.createElement("div");
    tmp.classList.add("drop");
    tmp.style.left = Math.floor(Math.random() * 101).toString() + "%";
    setTimeout(() => {
      document.body.appendChild(tmp);
    }, Math.floor(Math.random() * 8000));
}  