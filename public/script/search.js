$(document).ready(function () {
    var originalRowContent = $('#initial').clone();
    $('#initial').hide()
    $('#searchButton').on('click', function () {
        var searchTerm = $('#searchInput').val().toLowerCase();
        if (!searchTerm) {
            $('#searchResults').empty();
            $('#searchResults').html(originalRowContent.clone().html()).hide().fadeIn(400);
            return;
        }
        $('#initial').hide();
        $('#searchResults').empty();
        originalRowContent.find('.card').each(function () {
            var title = $(this).find('.card-title').text().toLowerCase();
            var author = $(this).find('.line').text().toLowerCase();
            var description = $(this).find('.desc').text().toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm) || author.includes(searchTerm)) {
                var newDiv = $('<div class="col mb-4"></div>');
                var clonedCard = $(this).clone()
                newDiv.append(clonedCard);
                $('#searchResults').append(newDiv);
                newDiv.hide().fadeIn(400);
            }
        });
        if ($('#searchResults').is(':empty')) {
            var noResultsImage = $('<img class="not-found" src="https://wizzy.ai/blog/wp-content/uploads/2020/10/No-Result-Found-1024x604.jpg" alt="No Results">');
            $('#searchResults').append(noResultsImage);
            setTimeout(function () {
                $('#searchInput').val("")
                $('#searchResults').empty();
                $('#initial').fadeIn(400);
            }, 1000);
        }
    });
    $('#searchResults').html(originalRowContent.clone().html());
    $('#searchButton').trigger('click');
});