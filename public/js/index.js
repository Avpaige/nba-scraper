$("#scrape").on("click", function (event) {
    alert("alert button was clicked")
    event.preventDefault();
    $.get("/scrape").then(function () {
       console.log("sent to scrape")
    })
});