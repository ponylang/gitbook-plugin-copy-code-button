require(["gitbook", "jQuery"], function(gitbook, $) {
  
    function createGistJsonRequest(textContent) {
      let val = JSON.stringify( {
        description : "Pony tutorial sample",
        public : true,
        files :
        {
          "sample.pony" : {
            content: textContent
          } 
        }
      });
      return val;
    }
  
    gitbook.events.bind("page.change", function() {
      $("pre").each(function(){
        $(this).css("position", "relative");
  
        var $copyCodeButton = $("<button class='copy-code-button'>Run in playground</button>");
        $copyCodeButton.css({"position": "absolute", "top": "5px", "right": "5px", "padding": "3px", "background-color":"#313E4E", "color":"white", "border-radius": "5px" , "-moz-border-radius": "5px", "-webkit-border-radius": "5px", "border": "2px solid #CCCCCC"});
        $copyCodeButton.click(function(){
          var $codeContainer = $(this).siblings("code");
          if($codeContainer) {
            var text = $codeContainer[0].innerText;
            var gistApiUrl = "https://api.github.com/gists";
            var postContent = createGistJsonRequest(text);
            $.post(gistApiUrl, postContent, 
              function(serverResponse) {
                var newUrl = "http://playground.ponylang.org/?gist=" + serverResponse.id;
                //window.open(newUrl, '_blank');
                window.location.href = newUrl;
            }); 
          }
        });
        
        $(this).append($copyCodeButton);
      });
    });
  });
  