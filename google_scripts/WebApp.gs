const doPost = (request = {}) => {
  const { parameter, postData: { contents, type } = {} } = request;
  const params = JSON.parse(contents)

  switch(params.type) {
    case 'deadzoneReport':
    appendRow(config.spreadsheetId, config.deadzoneSheet, [params.start, params.end, params.endedBy])
    break;
  }
}
