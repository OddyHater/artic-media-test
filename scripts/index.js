import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { addListeners } from "./menuHandler";
import { addVideoListeners } from "./videoPlayer";

addListeners();
addVideoListeners();

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,

  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
  },
});