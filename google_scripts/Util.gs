//modified from https://github.com/MRT-Map/sheets-api/blob/main/code.gs
/**
 * @param {string} spreadsheetId The ID of the spreadsheet to open
 * @param {string} sheetName The name of the sheet to open
 * @returns {Object}
 */
function getRowsFromSheet(spreadsheetId, sheetName) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  const sheet = spreadsheet.getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();

  //sorts the information into an array of objects
  var info = []
  var headers;
  for (let row in values) {
    if (row == 0) {//headers
      headers = values[row]
    } else {
      let newRowInfo = {}
      for (let cell in values[row]) {
        newRowInfo[headers[cell]] = values[row][cell]
      }
      info.push(newRowInfo);
    }
  }
  return info;
}

//clears a specified range in a sheet
/**
 * @param {string} spreadsheetId The ID of the spreadsheet containing the sheet
 * @param {string} sheetName The name of the sheet to clear
 * @param {string} range The range of values to clear
 * @returns {void}
 */
function clearRange(spreadsheetId, sheetName, range) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  const sheet = spreadsheet.getSheetByName(sheetName);

  sheet.getRange(range).clear()
}

//returns a 24-hour time for any given date
/**
 * @param {Date} date
 * @returns {string}
 */
function getTime(date) {
  if (!date instanceof Date) throw new TypeError('Supplied options is not a Date')
  let output = '';
  output += date.getUTCHours() > 9 ? date.getUTCHours() : '0' + date.getUTCHours();//add extra 0 if hours is less than 10
  output += ':';
  output += date.getUTCMinutes() > 9 ? date.getUTCMinutes() : '0' + date.getUTCMinutes();
  return output;
}

//clears a specified range in a sheet
/**
 * @param {string} spreadsheetId The ID of the spreadsheet containing the sheet
 * @param {string} sheetName The name of the sheet to append data to
 * @param {string} row The row to add to the sheet
 * @returns {void}
 */
function appendRow(spreadsheetId, sheetName, row) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  const sheet = spreadsheet.getSheetByName(sheetName);

  sheet.appendRow(row)
}
