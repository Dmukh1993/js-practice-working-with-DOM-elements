// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    poster = document.querySelector(".promo__bg)"),
    movieList = document.querySelector(".promo__interactive-list"),
    inputFilm = document.querySelector(".form.add"),
    addInput = inputFilm.querySelector(".adding__input"),
    checkbox = inputFilm.querySelector('[type="checkbox"]');

  inputFilm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorit = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}... `;
      }
      if (favorit) {
        console.log("Добовляем любимый фильм");
      }
    }
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    creatListMovie(movieDB.movies, movieList);
  });

  const deleteAdv = (arr) => {
    adv.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    poster.style.backgroundImage = 'url("/img/bg.jpg")';

    genre.textContent = "драма";
  };

  movieList.innerHTML = "";
  const sortArr = (arr) => {
    arr.sort();
  };
  movieDB.movies.sort();

  function creatListMovie(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
      movieList.innerHTML += `<li class="promo__interactive-item">${
        i + 1
      }${film}
      <div class="delete"></div>`;
    });
  }
  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      movieDB.movies.splice(i, 1);

      creatMovieList(films, parent);
    });
  });
  creatListMovie(films, parent);
  deleteAdv(adv);
  makeChanges();
});
