$("#button").click(function() { 
    var send = $("#message").val(); 
    $("#messageBox").append("<p>" + send + "</p>");
    $("#message").val("");
});
$("#message").keydown(function(e){
   var send = $("#message").val(); 
    var x = e.which;
    if (x === 13){
     $("#messageBox").append("<p>" + send + "</p>");
     $("#message").val("");
    }
});
$("#").each( function() 
{
   // certain browsers have a bug such that scrollHeight is too small
   // when content does not fill the client area of the element
   var scrollHeight = Math.max(this.scrollHeight, this.clientHeight);
   this.scrollTop = scrollHeight - this.clientHeight;
});