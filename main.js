document.addEventListener("DOMContentLoaded", function(event) {
    
    document.getElementById("submit_button").onclick = function() {
        var name =  document.getElementById("name_input").value;
        document.getElementById("name_span").innerHTML=name;
    }
});
