
async function requestAuthorization() {
  $.getJSON("https://quicktimes.ml/json/auth.json", function(json) {
    console.log(json);
    localStorage.setItem("api_token", json.api_token)
    localStorage.setItem("client_id", json.client_id)
    localStorage.setItem("client_secret", json.client_secret)

});
}
const delay = ms => new Promise(res => setTimeout(res, ms));
    const checkItems = async () => {
        await delay(3350);
        requestAuthorization()
  }