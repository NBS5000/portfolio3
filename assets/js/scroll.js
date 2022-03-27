

var el = document.getElementById("displayList");
el.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) el.scrollLeft += 80;
    else el.scrollLeft -= 80;
});
