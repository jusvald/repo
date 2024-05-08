$(document).ready(function() {
    $('#submitButton').click(function(){
        var inputCity = $('#cityInput').val();
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity+'1f4fdda1a657f841c460708612bf600d')
            .then(response => response.json())
            .then(data => {
                var tempValue = data['main']['temp'];
                var nameValue = data['name'];
                var descValue = data['weather'][0]['description'];
                $('#name').text(nameValue);
                $('.desc').text("Description " + descValue);
                $('.temp').text("Temperatura: " + tempValue);
                $('#cityInput').val('');
            })
            .catch(err => alert("Città inesistente"));
    });
});