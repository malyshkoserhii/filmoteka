import { createRouter } from 'routerjs';
import homepageMarkupTpl from '../templates/homepage-section.hbs';
import libraryPageMarkupTpl from '../templates/library-section.hbs';
import watch from '../templates/libraryElementTemplate.hbs';
import queue from '../templates/libraryElementTemplate.hbs';
import detailsTemplate from '../templates/detailsTemplate.hbs';
import { toggleButtonStyleinLibrary, savedChoice } from './renderLibrary';
import {
  filmsArray,
  showFilms,
  searchFilm,
} from './searchAndPaginationHomePage';
import handleFilmDetailPage from './filmDetailPage';
import { filmPagination, filmsArrayFromPagination } from './pagination';
import { showLoader } from './errorLoader';
import filmService from './search-section';

const mainRef = document.querySelector('.main-js');
let watchedArrayFromLocalStorage = JSON.parse(
  localStorage.getItem('filmsWatched'),
);
let queueArrayFromLocalStorage = JSON.parse(localStorage.getItem('filmsQueue'));

function createHomepageMarkup() {
  const homepageMarkup = homepageMarkupTpl();
  mainRef.innerHTML = homepageMarkup;
}

function createLibraryMarkup() {
  const libraryPageMarkup = libraryPageMarkupTpl();
  mainRef.innerHTML = libraryPageMarkup;
}

function createWatchMarkup() {
  watchedArrayFromLocalStorage = JSON.parse(
    localStorage.getItem('filmsWatched'),
  );
  const libraryRef = document.querySelector('.library');
  const markupWatch = watch(watchedArrayFromLocalStorage);
  libraryRef.innerHTML = markupWatch;
}

function createQueueMarkup() {
  queueArrayFromLocalStorage = JSON.parse(localStorage.getItem('filmsQueue'));
  const libraryRef = document.querySelector('.library');
  const queueMarkup = queue(queueArrayFromLocalStorage);
  libraryRef.innerHTML = queueMarkup;
}

function getFilmInRequest(title) {
  const filmName = title.replaceAll('%20', ' ');
  if (!filmsArray) {
    return;
  }
  if (!filmsArrayFromPagination) {
    return;
  }
  if (filmService.pageStatus === 1) {
    let filteredFilm = filmsArray.find(el => {
      return el.title === filmName;
    });
    createFilmDetailPage(filteredFilm);
    handleFilmDetailPage(filteredFilm);
    return;
  }
  if (filmService.pageStatus > 1) {
    let filmFromPagination = filmsArrayFromPagination.find(el => {
      return el.title === filmName;
    });
    createFilmDetailPage(filmFromPagination);
    handleFilmDetailPage(filmFromPagination);
  }
}

function createFilmDetailPage(film) {
  let date = film.release_date.slice(0, 4);
  const markup = detailsTemplate(film);
  mainRef.innerHTML = '';
  mainRef.insertAdjacentHTML('afterbegin', markup);
  const titleRef = document.querySelector('.year');
  titleRef.textContent = date;
}

const router = createRouter()
  .get('/filmoteka', (req, context) => {
    createHomepageMarkup();
    const formRef = document.querySelector('.search-form');
    formRef.addEventListener('submit', searchFilm);

    if (filmService.query) {
      filmService.query = req.query.query;
      filmService.pageStatus = req.query.page;
    }

    filmService.query = '';
    filmService.pageStatus = 1;

    showFilms();
    filmPagination();
    req.stop();
  })
  .get('/filmoteka/library', (req, context) => {
    createLibraryMarkup();
    savedChoice();
    req.stop();
  })
  .get('/filmoteka/library/watched', (req, context) => {
    toggleButtonStyleinLibrary();
    localStorage.setItem('focused', 'watch');
    savedChoice();
    createWatchMarkup();
    req.stop();
  })
  .get('/filmoteka/library/queue', (req, context) => {
    createLibraryMarkup();
    toggleButtonStyleinLibrary();
    localStorage.setItem('focused', 'queue');
    savedChoice();
    createQueueMarkup();
    req.stop();
  })
  .get('/:title', (req, context) => {
    const title = req.get('title');
    getFilmInRequest(title);
    req.stop();
  })
  .get('/404', (req, context) => {
    showLoader();
    req.stop();
  })

  .run();

export {
  mainRef,
  createHomepageMarkup,
  createLibraryMarkup,
  createWatchMarkup,
  createQueueMarkup,
  createFilmDetailPage,
};
