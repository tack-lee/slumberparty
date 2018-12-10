/*
    HANDLE SIGN UPS 
        
    Google Sheet: 
    https://script.google.com/macros/s/AKfycbwBKm7dFu14YxvSj3XJLRmsUOnQLuPYQBLmrDNAUsIYCmlMf2E/exec
*/
$(document).ready(function () {
    $('#signup-submit').click(function (e) {
        e.preventDefault();
        document.getElementById("loading").style.display = "block";
        var form = $("#signup-form").serialize();
        var url = 'https://script.google.com/macros/s/AKfycbwBKm7dFu14YxvSj3XJLRmsUOnQLuPYQBLmrDNAUsIYCmlMf2E/exec';

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: form,
            timeout: 6000,
            success: function (data) {
                document.getElementById("loading").style.display = "none";
                $("#thankyou-modal").modal('show');
            }
        });
    });
});

