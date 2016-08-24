;(function(global, $) {

	// Create a new object, just like jQuery.
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // An array of supported languages.
    var supportedLangs = ['en', 'es'];

    // Greetings that can be shown in the selected language.
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // Formal greetings that can be shown in the
    // selected language.
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // Console log messages.
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // Overwrite our prototype and add new functions.
    Greetr.prototype = {

    	// Get the set first name.
        firstName: function() {
            return this.firstName;
        },

        // Get the set last name.
        lastName: function() {
            return this.lastName;
        },

        // Get the set full name.
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // Validate if the selected language is there.
        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }

            return true;
        },

        // Return the greeting in the selected language and
        // then output their first name with it.
        greeting: function() {
            return greetings[this.language] + ', ' + this.firstName + '.';
        },

        // Return the formal greeting in the selected language and
        // then output their first name with it.
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '.';
        },

        // Greet with either a formal greeting (true) or
        // greet with a normal greeting in the selected language.
        greet: function(formal) {
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // Allow this function to be chainable.
            return this;
        },

        // Output to console log message in the selected language
        // and then output their full name.
        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // Allow this function to be chainable.
            return this;
        },

        // Set the language and check to see if it's there.
        setLang: function(lang) {
			
			// Validate that the language is there.
			if(this.validate()) {
				this.language = lang;
			}

            // Allow this function to be chainable.
            return this;
        },

        // jQuery required.
        // Set the selected HTML element to a greeting.
        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery not loaded';
            }

            if(!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // Assign the greeting to the element.
            $(selector).html(msg);

            // Allow this function to be chainable.
            return this;
        }

    };

    // This gets called from the top when we create the G$()
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        // Check to see if the selected language is there.
        self.validate()
    }

    // Set the prototype to save memory space.
    Greetr.init.prototype = Greetr.prototype;

    // Allow easy use with G$()
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);