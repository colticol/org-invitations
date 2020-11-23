var ORG = "hamtore";
var TOKEN = PropertiesService.getScriptProperties().getProperty("TOKEN");

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}
 
function doPost(e) {
  var headers = {
    'authorization': 'token ' + TOKEN,
    'accept': "application/vnd.github.v3+json"
  };
  var payload = {
    'email': e.parameter.email
  };

  var options = {
    'headers': headers,
    'method': 'post',
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
   };
  var response = UrlFetchApp.fetch('https://api.github.com/orgs/' + ORG + '/invitations', options);
  
  return ContentService.createTextOutput(response);
}
