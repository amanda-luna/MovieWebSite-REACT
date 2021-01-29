const api = "http://localhost:3001";

export const getAll = () =>
  fetch(`${api}/movies`).then((response) => response.json());

export const addToList = (id) =>
  fetch(`${api}/movies/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ my_list: true }),
  }).then((res) => res.json());

export const removeFromList = (id) =>
  fetch(`${api}/movies/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ my_list: false }),
  }).then((res) => res.json());

export const genres = () =>
  fetch(`${api}/genres`).then((response) => response.json());

export const getMoviesFromList = () =>
  fetch(`${api}/movies?my_list=true`).then((response) => response.json());
