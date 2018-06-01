require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind("page.change", function() {
      $("pre").each(function() {
        $(this).css("position", "relative");
        var codeElem = $(this)[0].children[0];
        var codeContent = codeElem.innerText;
        var hasMainAndCreate = 
          codeContent.indexOf("actor Main") != -1 &&
          codeContent.indexOf("new create(env: Env) =>") != -1;

        if (hasMainAndCreate && codeElem.className == "lang-pony")
        {
          var $copyCodeButton = $("<button class='copy-code-button'>Run in playground</button>");
          $copyCodeButton.css({"position": "absolute", "top": "5px", "right": "5px", "padding": "3px", "background-color":"#313E4E", "color":"white", "border-radius": "5px" , "-moz-border-radius": "5px", "-webkit-border-radius": "5px", "border": "2px solid #CCCCCC"});
          $copyCodeButton.click(function(){
            var $codeContainer = $(this).siblings("code");
            if($codeContainer) {
              var encodedCode = encodeURIComponent($codeContainer[0].innerText);
              var newUrl = "https://playground.ponylang.org/?code=" + encodedCode;
              window.location.href = newUrl;
            }
          });
        $(this).append($copyCodeButton);
      }
      });
    });
  });
