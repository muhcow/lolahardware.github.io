$(document).ready(function(){
    console.log("yoo wussup");
    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",{
            part: 'snippet',
            maxResults: '30',
            playlistId:'PLjxAnPQhQCWFwzG8ept7C_L0BzNyVbcZO',
            key: 'AIzaSyD1-1cB7nNtm5slTsHT53iiESqyjmEnRaY'
        },
        function(data){
            var output;
            console.log(data);
            $.each(data.items, function( index, item ) {
                var vidTitle = item.snippet.title;
                var vidID = item.snippet.resourceId.videoId;
                console.log(vidTitle);
                output = '<li>' + vidID + '</li>';
                output = '<li><iframe width=\"966\" height=\"543\" src=\"https://www.youtube.com/embed/'+vidID+'\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></li>';
                
                $('#results').append(output);
            })
        }
    );
});

