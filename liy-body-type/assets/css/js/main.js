window.onload = function() {
    
    var bodyType   = null;
    
    var InputBust  = document.getElementById("InputBust"),
        InputWaist = document.getElementById("InputWaist"),
        InputHips  = document.getElementById("InputHips"),
        Results    = document.getElementById("Results"),
        ResButton  = document.getElementById("ResButton");
    
    ResButton.addEventListener("click", getResults);
    
    function getResults() {
        if (InputBust.value > 0 && InputWaist.value > 0 && InputHips.value > 0) {
            if (InputBust.value / InputHips.value >= 0.95 && InputBust.value / InputHips.value <= 1.05) {
                if (InputWaist.value / InputBust.value > 0.75 && InputWaist.value / InputHips.value > 0.75) {
                    bodyType = "BANANA";
                } else {
                    bodyType = "HOURGLASS";
                }
            } else {
                if (InputBust.value > InputHips.value) {
                    bodyType = "APPLE";
                } else {
                    bodyType = "PEAR";
                }
            }
        } else {
            bodyType = "UNSPECIFIED";
        }
        
        Results.innerHTML = "<h2>" + bodyType + " BODY</h2>";
    }
    
};
