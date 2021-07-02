async function requestAuthorization() {
  $.getJSON("/json/auth.json", function(json) {
    console.log(json); // this will show the info i
});
}