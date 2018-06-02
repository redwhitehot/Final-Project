$(document).ready(function() {

    $("#submit").click(function() {
        event.preventDefault();

        var formData = $("form").serializeArray();

        console.log(formData);

        var nameInput = $("#name").val();
        console.log("Name input: ", nameInput);
        
        var numberInput = $("#number").val();
        console.log("Number input: ", numberInput);
    })

})

    