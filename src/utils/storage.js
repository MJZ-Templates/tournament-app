// src/utils/storage.js

export const saveToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
