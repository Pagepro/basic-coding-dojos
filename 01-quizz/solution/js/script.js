(function() {
    var correctAnswers = [
            'c', 'b', 'c', 'a', 'a'
        ],
        userAnswers = [],
        $question = $('.question'),
        score;

    var checkUserAnswers = function () {
        userAnswers = [];
        $question.each(function () {
            var questionAnswer = $(this).find('input:radio:checked').val();
            userAnswers.push(questionAnswer);
        });
        scoreCount();
    }

    var checkIsChecked = function () {
        var isError = false;
        $question.each(function () {
            var $that = $(this),
                isChecked = $that.find('input:radio').is(':checked');

            if (!isChecked) {
                isError = true;
            }
        });
        if (isError) {
            alert('Fill all the fields');
        } else {
            checkUserAnswers();
        }
    }
    var scoreCount = function () {
        score = 0;
        for(var i = 0; i < correctAnswers.length; i++ ) {
            if (correctAnswers[i] === userAnswers[i]) {
                score++;
            }
        }
        $('#results').html('Your score is: ' + score);
    }
    $('input:submit').on('click', function (e) {
        e.preventDefault();
        checkIsChecked();
    });
})();


