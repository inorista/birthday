window.onload = function() {
    var scroll = document.getElementsByClassName('scroll')[0];
    var mouse = document.getElementsByClassName('mouse')[0];
    var scroll_path = document.getElementsByClassName('scroll_path')[0];
    var mouse_path = document.getElementsByClassName('mouse_path')[0];
    var pointer = document.getElementsByClassName('pointers')[0];
    scroll_path.addEventListener('mouseover', changeClr, false);
    mouse_path.addEventListener('mouseover', changeClr, false);
    scroll_path.addEventListener('mouseout', changeClrOut, false);
    mouse_path.addEventListener('mouseout', changeClrOut, false);

    function changeClr() {
        scroll.style.fill = '#FFAFAF';
        mouse.style.fill = '#FFAFAF';
        pointer.style.color = '#FFAFAF';
    }

    function changeClrOut() {
        scroll.style.fill = '#E8D4B5';
        mouse.style.fill = '#E8D4B5';
        pointer.style.color = '#E8D4B5';
    }

    function spin() {
        anime({
            targets: '.layer3',
            translateX: function() {
                return anime.random(-500, 1000);
            },
            translateY: function() {
                return anime.random(-500, 250);
            },
            easing: 'linear',
            duration: 4000,
            complete: spin,
        })
    }

    function spinGift() {
        anime({
            targets: '.gift',
            translateY: [-25, -5],
            duration: 1500,
            direction: 'alternate',
            loop: true,
        })
    }

    function scrollDown() {
        anime({
            targets: '.scroll_path',
            translateY: -15,
            duration: 1500,
            direction: 'alternate',
            loop: true,
        })
    }
    scrollDown()
    spin()
    spinGift()
}