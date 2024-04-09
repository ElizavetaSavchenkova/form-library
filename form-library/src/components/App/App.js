import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="page">
      <form className="form" validate id="form">
        <h1 className="form__title">Поиск по системному номеру</h1>
        <div className="form__main-info">
          <span className="form__main-description">Уважаемые пользователи!</span>
          <h2 className="form__main-description">Для поиска ... укажите данные ниже.</h2>
        </div>
      
        <fieldset className="form__fieldset">
          <section className="form__section">
            <div className="form__cont">
              <h4 className="form__main-description form__main-description_sign">Введите свой адрес электронной почты в домене @rsl.ru</h4>
              <label className='form__label'>
                <span className="form__input-name form__input-name_contact">Введите свой адрес электронной почты в домене @rsl.ru<span className="req-color"> *</span></span>
                <input className="form__input form__input_three"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Email"
                  required
                />
              </label>

              <label className='form__label'>
                <span className="form__input-name form__input-name_contact">Введите системный номер<span className="req-color"> *</span></span>
                <input className="form__input form__input_three"
                  id="surname"
                  type="text"
                  name="surname"
                  placeholder="Системный номер"
                  required
                />
              </label>

            </div>
          </section>
        </fieldset>
      </form>

    </div >
  );
}

export default App
