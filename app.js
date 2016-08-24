$(document).ready(function() {
    $('#languageSet').click(function() {
        var loginGreet = G$('Jane', 'Doe');

        $('#languageSelect').hide();

        loginGreet.setLang($('#lang').val()).HTMLGreeting('#greeting', true);
    });
});