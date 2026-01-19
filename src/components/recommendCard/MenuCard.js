import React from "react";

// MenuCard.jsx
import { useState } from "react";
import "./MenuCard.css";

export default function MenuCard() {
  const menus = ["마라탕", "치킨", "피자", "라면", "초밥", "햄버거", "국밥"];

  // const randomMenu = () => {
  //   const idx = Math.floor(Math.random() * menus.length);
  //   setMenu(menus[idx]);
  const getRandomMenu = () => {
    const idx = Math.floor(Math.random() * menus.length);
    return menus[idx];
  };

  const[menu, setMenu] = useState(getRandomMenu);

  const randomMenu = () => {
    setMenu(getRandomMenu());
  };

  return (
    <div className="card">
      <div className="header">
        <span className="icon">🍜</span>
        <span>오늘의 추천 메뉴</span>
      </div>

      <div className="menu">
        <span className="menu-icon">🥢</span>
        <span className="menu-name">{menu}</span>
      </div>

      <div className="buttons">
        <button className="btn retry" onClick={randomMenu}>
          다시 추천
        </button>
        <button className="btn like">싫어요</button>
      </div>
    </div>
  );
}

