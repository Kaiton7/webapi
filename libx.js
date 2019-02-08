const request = require('request')
const libxmljs = require('libxmljs')

request('https://tv.so-net.ne.jp/chart/40.action', (e, response, body) => {
  if (e) {
    console.error(e)
  }

  try {
    const xmlDoc = libxmljs.parseHtmlString(body)
    const latestDate = xmlDoc.get("(//*[@id='cell-140960201902010430-2630'])");
    //console.log(latestDate);
    const center = xmlDoc.get("/div");


    console.log(center);
    console.log(latestDate)
    console.log("=======");
    console.log(typeof(body))
    console.log(typeof(xmlDoc))
    for(value in xmlDoc){
        //console.log(value);
        console.log(typeof(value))

        //console.log(key)
    }
    //console.log(`最新の新着情報の日付は${latestDate}です。`)
  } catch (e) {
    console.error(e)
  }
})