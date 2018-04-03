
$( document ).ready(function(){


    $(".col-7").each(function() {
      var user = $(this).text();

      $.ajax({
       type: 'GET',
       url: 'https://api.twitch.tv/kraken/streams/'+user,
       headers: {
         'Client-ID': '6wmnq80xhw5wstv13alroib7dhohro'
       },
       success: function(data) {
         if(data.stream === null) {
          var parentDiv = document.getElementById(user);
          var statusCol = parentDiv.getElementsByClassName("col-3");
          $(statusCol).text("Offline");
          $(parentDiv).removeClass().addClass("row offline");
        } else {
            var parentDiv = document.getElementById(user);
            var statusCol = parentDiv.getElementsByClassName("col-3");
            $(statusCol).text("Online");
            $(parentDiv).removeClass().addClass("row online");
          }
       }
     });
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


    $(".add").click(function() {
      var username = $("#input-text").val();
      $("#box").append('<div class="row" id='+username+'><div class="col-2"></div><div class="col-7">'+username+'</div><div class="col-3"></div></div>');
      
      $.ajax({
       type: 'GET',
       url: 'https://api.twitch.tv/kraken/streams/'+username,
       headers: {
         'Client-ID': '6wmnq80xhw5wstv13alroib7dhohro'
       },
       success: function(data) {
         if(data.stream === null) {
          var parentDiv = document.getElementById(username);
          var statusCol = parentDiv.getElementsByClassName("col-3");
          $(statusCol).text("Offline");
          $(parentDiv).removeClass().addClass("row offline");
        } else {
            var parentDiv = document.getElementById(username);
            var statusCol = parentDiv.getElementsByClassName("col-3");
            $(statusCol).text("Online");
            $(parentDiv).removeClass().addClass("row online");
          }
       }
     });
    });

});
