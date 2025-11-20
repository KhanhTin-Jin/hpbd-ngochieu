$(function () {
    var james = $('#bond');
    var modal = $('#myModal');
    var audioEl = document.getElementById('birthday-audio');
    var audioUnlocked = false;

    var right = function () {
        james.animate({ left: '5px' }, 600, left);
    };

    var left = function () {
        james.animate({ left: '0px' }, 600, right);
    };

    right();

    function playBirthdayAudio() {
        if (!audioEl) {
            return;
        }
        if (audioUnlocked && !audioEl.paused) {
            return;
        }
        var playPromise = audioEl.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function (err) {
                console.warn('Audio playback blocked:', err);
            });
        } else {
            audioUnlocked = true;
        }
    }

    james.on('click', 'img', function () {
        playBirthdayAudio();
    });

    modal.on('shown.bs.modal', function () {
        audioUnlocked = true;
        playBirthdayAudio();
    });
});