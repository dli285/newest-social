import React from "react";
import { Icon } from "../UI/Header/icon/icon";

interface postCommentProps  {
    commentText: string
}

export const Comment = ({commentText}: postCommentProps) => {
    return (
        <div className="CommentBlock">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="comment__description">
          <a href="#" className="comment__owner">
            Карина Савина
          </a>
          <p className="comment__text">{commentText}</p>
          <span className="reply">
            Ответить
          </span>
        </div>
        <span className="date">25 марта</span>
        <Icon name="heart" padding="2" borderRadius="10"/>
      </div>
    )
}