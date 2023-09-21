import React from "react";
import { Icon } from "../UI/Header/icon/icon";

export const Comment = () => {
    return (
        <div className="CommentBlock">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="comment__description">
          <a href="#" className="comment__owner">
            Карина Савина
          </a>
          <p className="comment__text">Это текст комментария...</p>
          <a href="#" className="reply">
            Ответить
          </a>
        </div>
        <span className="date">25 марта</span>
        <Icon name="like" padding="10" borderRadius="10"/>
      </div>
    )
}