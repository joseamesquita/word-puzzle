$(document).ready(function(){
    $("form#puzzle").submit(function(){
        var sentence = $("#word").val();
        console.log(sentence)

        result = "";
        for(i = 0; i <= sentence.length - 1; i++){
            if (sentence[i] === "e"){
                result += '-';
                // alert(result)
                // result.append(sentence[i]);
            }
            else if (sentence[i] === "o"){
                result += '-';
                // alert(result)
            }
            else if (sentence[i] === "u"){
                result += '-';
                // alert(result)
            }
            else if (sentence[i] === "a"){
                result += '-';
                // alert(result)
            }
            else if (sentence[i] === "i"){
                result += '-';
                // alert(result)
            }
            else if (sentence[i] === "y"){
                result += '-';
                // alert(result)
            }
            else{
                result += sentence[i];
                // alert(result)
                // result.append(sentence[i]);
            }

        }
        $(".word").text(result);


        // $(".word").text(result);
    
        event.preventDefault();
    })
});
