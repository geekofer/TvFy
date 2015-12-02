$(function() {

    var $urlAPI = 'http://api.tvmaze.com/shows';
        
        $tvShowsContainer = $('#shows-container');
        
        template = 
        '<div class="col-sm-6 col-md-4">'+
            '<div class="thumbnail thumbail-show">'+
              '<div class="image-show">'+
                '<img src=":img:" alt=":title-alt:">'+
              '</div>'+
              '<div class="caption caption-show">'+
                '<h3>:title:</h3>'+
              '</div>'+
            '</div>'+
        '</div>';
        


    function renderShows(data){
       data.forEach(function(data){
            var article = template
                .replace(':img:', data.image.medium)
                .replace(':title:', data.name)
                .replace(':title-alt:', data.name + "image")

            $tvShowsContainer.append($(article))
        })//.#forEach
       $('#loadingmessage').remove();
    }//.#Render Shows

    
    if(!localStorage.data){
        $.ajax($urlAPI)
         .then(
             function(data,textStatus, xhr){
                localStorage.data = JSON.stringify(data);
                renderShows(data);
              }
        );//.#RequestAJAX
    }else{
        renderShows(JSON.parse(localStorage.data));
    }

});//End