import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const savedTimeLocalStorage = localStorage.getItem('videoplayer-current-time');
console.log(savedTimeLocalStorage);