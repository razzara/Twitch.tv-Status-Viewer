
$(document).ready(function(){

    function ajaxRequest(user) {
      $.ajax({
       type: 'GET',
       url: 'https://api.twitch.tv/kraken/streams/'+user,
       headers: {
         'Client-ID': '6wmnq80xhw5wstv13alroib7dhohro'
       },
        success: function(data) {
          var parentDiv = document.getElementById(user);
          var statusCol = parentDiv.getElementsByClassName("grid-status");
          if(data.stream === null) {
           $(statusCol).text("Offline");
           $(parentDiv).removeClass().addClass("grid-content offline");
          } else {
             $(statusCol).html('Online: <i>'+data.stream.game+'</i>');
             $(parentDiv).removeClass().addClass("grid-content online");
            }
        }
      })
    }

    $(".grid-username").each(function() {
    ajaxRequest($(this).text());
    });

    $(".add").click(function() {
      var user = $("#input-text").val();
      $(".container").append('<div class="grid-content" id='+user+'><div class="grid-username"><a href="http://www.twitch.tv/'+user+'" target="_blank">'+user+'</a></div><div class="grid-status"></div></div>');
        ajaxRequest(user);
    });

    $("#online").click(function(){
      $(".offline").slideUp(300);
      $(".online").slideDown(300);
    });

    $("#offline").click(function(){
      $(".online").slideUp(300);
      $(".offline").slideDown(300);
    });

    $("#all").click(function(){
      $(".offline").slideDown(300);
      $(".online").slideDown(300);
    });


    $('.add').prop('disabled',true);
    $('#input-text').keyup(function(){
      $('.add').prop('disabled', this.value == "" ? true : false);
    })

});
