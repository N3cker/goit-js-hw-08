import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:
            
            break;
    }
});

const onPlay = function(timeupdate) {
    console.log(timeupdate);
    localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
};

player.on('timeupdate', timeupdate => {
    throttle(() => {
        onPlay(timeupdate);
        console.log(timeupdate);
    }, 1000);
});

player.on('timeupdate', throttle(onPlay, 1000));