// The button to start the search.
function search() {
//    grabs the value that the user enters.
    var searchTerm = $('#article').val().toLowerCase();
//    Turns it into an array at the spaces.
    searchTerm = searchTerm.split(' ');
//    rejoins the array into a string with pluses, which the URL needs. It can't figure out how to search with a space.
    searchTerm = searchTerm.join('+');
//    Sticks the search term into the URL so that the JSON returns with what we need.
    var search = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=iVc2P4jInkaYOv1hARvAgzyWMoWsbAtv';
    // the Ajax function that gets the API
    $.ajax({
        url: search,
        method: 'GET',
    })
    .done(function(data){
        data = showArticles(data);
        $('#output').html(output);
    })
    .fail(function(){
         $('#output').html('No articles found with that term');
     });
};
// This is the accumulator pattern for the article output.
function showArticles(data) {
    output = '';
//    Someone once made this inspired solution to the irritation of having to put tags everywhere.
    var p = '<p>';
    var cp = '</p>';
    // Loop that gathers up information for each individual article.
    for (i = 0; i < data.response.docs.length; i++){
    // Each article is a seperate div
        output += '<div>';
    // Headline
        output += `${p}<a href='${data.response.docs[i].web_url}' target='_blank'><span class="headline"><strong>${data.response.docs[i].headline.main}</strong></span></a>`;
    // News source that reported
        output += p + 'Reported by ' + data.response.docs[i].source + cp;
    // Author of the article
        output += p + 'Author: ' + data.response.docs[i].byline.original + cp;
    // Date published 
        var date = new Date(data.response.docs[i].pub_date);
    // Changing the date to a easier format
        output += '<p>Published: ' + date.toLocaleString() + '</p>';
    // A short excerpt.
        output += `${p}Excerpt: ${data.response.docs[i].snippet}`;
        output += p + 'In: ' + data.response.docs[i].section_name + cp;
        // I built a keywords section, but in testing I found that anything Reuters contributes lacks keywords, and it made the page look weird.
        // You can activate it to make sure it works. I am leaving it in.

        // var keys = '<ul>';
        // for (var j = 0; j < data.response.docs[i].keywords.length; j++) {
        //     keys += '<li>' + data.response.docs[i].keywords[j].value + '</li>';
        // }
        // output += keys + '</ul>';
        // keys = '';
        output += '<hr>';
    }
}

