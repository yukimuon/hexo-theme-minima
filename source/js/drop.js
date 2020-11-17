for (let i = 0; i < Math.floor(window.innerWidth / 64); i++) {
    let tmp = document.createElement("div");
    tmp.classList.add("drop");
    tmp.style.left = Math.floor(Math.random() * 101).toString() + "%";
    // var co = +Math.floor(Math.random()*16777215).toString(16);
    // tmp.style.backgroundColor = "#"+co;
    setTimeout(() => {
      document.body.appendChild(tmp);
    }, Math.floor(Math.random() * 6000));
}  