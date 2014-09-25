jQuery().ready(function ($) {
    $.ajax({
        url: 'http://examen.lvlnetworks.com/',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
});