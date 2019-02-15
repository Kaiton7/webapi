const client = require('cheerio-httpcli');


//コールバック関数は非同期処理の際にこの処理だけはこの順番でやってほしいというのを記述するためにできた？

client.fetch('https://tv.so-net.ne.jp/chart/40.action', (err, $, res,body) => {
    const result = [];
    console.log(res.headers);
    console.log($("title").text());
    //.find('span .schedule-summary')
    $("#chartColumn[class ^= 'cell-genre']").each(function (id, el) {
        console.log(el);
        console.log($(this).text());
        if ($(this).hasClass('cell-schedule cell-genre*')) {
            $(this).text('True');
            console.log("tafderqgerq");
          } else {
            $(this).text('False');
          }
    });

    console.log(result.join('\n'));
});