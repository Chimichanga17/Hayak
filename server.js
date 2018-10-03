var PARAGRAPH = 'Hai this is a text.';

new Vue({
    el: '#app',
    data: {
        title: 'Hayak',
        originalText: PARAGRAPH,
        typedText: '',
        typoIndex: -1,
        timer: 60
    },
    methods: {
        startTypingSpeed: function () {

        },
        startTimer: function () {
            setInterval(function () {
                if (this.timer === 0) {
                    this.endTypingSpeed()
                    return;
                }
                this.timer--
            }, 1000)
        },
        endTypingSpeed: function () {

        }
    },
    computed: {
        outputHTML: function () {
            let newHTML = '<span class="correct">'
            if (this.typoIndex === -1) {
                // we do not have a typo index
                newHTML += this.originalText.substr(0, this.typedText.length)
                newHTML += '</span>'
                newHTML += this.originalText.substr(this.typedText.length)

                return newHTML
            }

            // else we have a typo index
            newHTML += this.originalText.substr(0, this.typoIndex)
            newHTML += '</span>'
            newHTML += '<span class="typo">'
            newHTML += this.originalText.substring(this.typoIndex, this.typedText.length)
            newHTML += '</span>'
            newHTML += this.originalText.substr(this.typedText.length)

            return newHTML
        }
    },
    watch: {
        typedText: function (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] !== this.originalText[i]) {
                    this.typoIndex = i;
                    break;
                }
                this.typoIndex = -1;
            }
        }
    }
});
