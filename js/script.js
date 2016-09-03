$('#search').keyup(function() {
    var searchField = $('#search').val();
    var keyword = new RegExp(searchField, 'i');
    $.getJSON('data/data.json', function (data) {
        var result = '<ul class="searchContent">';
        $.each(data, function (key, val) {
            if ((val.name.search(keyword) != -1) || (val.bio.search(keyword) != -1)) {
                result += '<li>';
                result += '<h2>' + val.name + '</h2>';
                result += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" />';
                result += '<p>'; +val.bio + '</p>';
                result += '</li>';
            }
        });
        result += '</ul>';
        $('#readData').html(result);
    });
});