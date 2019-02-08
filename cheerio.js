const client = require('cheerio-httpcli');

client.fetch('https://tv.so-net.ne.jp/chart/40.action', (err, $, res) => {
    const result = [];
    $('.normal_list').each(function (id, el) {
        const month = $(this).find('.normal_h2').text();

        $(this).find('li').each(function (id, el) {
            result.push(month + $(this).text().replace(/\r?\n?/g, ''));
        });
    });

    console.log(result.join('\n'));
});