function exportDeadzones() {
  var discordPayload = {
    content: "**Deadzones that ended in the last 24 hours (All times in UTC):**\n"
  };
  const deadzones = getRowsFromSheet(config.spreadsheetId, config.deadzoneSheet);

  var deadzoneTotal = 0;
  deadzones.forEach(d => {
    if(d.end != "") {
      let start = new Date(d.start);
      let end = new Date(d.end)

      discordPayload.content += `<t:${start.getTime()}:t> - <t:${end.getTime()}:t> (Ended by ${d.endedBy})\n`;
      deadzoneTotal++;
    }
  })

  if(deadzoneTotal > 0) {
    clearRange(config.spreadsheetId, config.deadzoneSheet, `A2:C${1 + deadzoneTotal}`)
  } else {
    discordPayload.content += 'None :)'
  }
  


  UrlFetchApp.fetch(config.deadzoneStatisticsWebhookUrl, {
    method: 'post',
    payload: JSON.stringify(discordPayload),
    contentType: 'application/json'
  })
}
