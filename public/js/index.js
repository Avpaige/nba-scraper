$("#scrape").on("click", event => {
    alert("alert button was clicked")
    event.preventDefault();
    $.get("/scrape").then(function () {
       console.log("sent to scrape")
    })
});

$("#scrape").on("click", event => {
    alert("alert button was clicked")
    event.preventDefault();
    $.get("/").then(function () {
       console.log("sent to scrape")
    })
});