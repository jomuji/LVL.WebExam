jQuery().ready(function ($) {
    $.ajax({
        url: 'http://webdev.local',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    });
});