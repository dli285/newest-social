import React, { useState } from "react";
import { PostMenu } from "./PostMenu";
import { format } from "date-fns";
import { useUploadFileMutation } from "../../store/api/fileApi";
import { Icon } from "../UI/Header/icon/icon";
import { Comment } from "../CommentApi/Comment";

interface PostProps {
  userName: string
  postDate: string
  photos: Array<{ id: number, photo_url: string}>
  postText: string
  postId: string
  commentsText: Array<string>
  onAddComment: (postId: string) => void
}

export const Post = ({
  userName,
  postDate,
  postText,
  photos,
  postId,
  commentsText,
  onAddComment
 }: PostProps) => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)

  const [uploadFile] = useUploadFileMutation()

  const onPostFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData()

      const file = event.target.files[0]

      
      formData.append('post_id', postId)
      formData.append('photo_file', file)

      
      // uploadFile(formData)
    }
  }
  const formattedDate = format(
    new Date(postDate),
    'eeee MM/dd/yyyy hh:mm'
  )

  return (
    <div className="Post _liked _marked">
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <a href="#" className="main__text">
            {userName}
          </a>
          <p className="secondary__text">{formattedDate}</p>
        </div>
      </div>
      <p className="Post__text">{postText}</p>
     {photos.length && <div className="media-container">
       {photos.map((photo) =>(<img
          className="media__item"
          src={photo.photo_url}
          alt="Post Item"
        />))}
      </div>}
      <div className="PostControls">
        <div className="icon-wrapper like">
          <span className="count likes-count">-500</span>
          <Icon name="like" padding="10" borderRadius="10"/>
        </div>
        <div className="icon-wrapper comment" onClick={() => onAddComment(postId)}>
          <span className="count comments-count">500</span>
          <Icon name="comment" padding="10" borderRadius="10"/>
        </div>
        <div className="icon-wrapper repost">
          <Icon name="repost" padding="10" borderRadius="10"/>
        </div>
        <div className="icon-wrapper mark">
          <Icon name="mark" padding="10" borderRadius="10"/>
        </div>
      </div>
      <div className="CommentBlock">
        {
          commentsText.length && commentsText.map((comment, idx)=>
          (<Comment key={`comment-${comment}-${idx}`} commentText={comment}/>
          ))
        
        }
      </div>
      <span onClick={() => toggleMenu(!isMenuOpen)}>
          <Icon name="more" padding="10" borderRadius="10"/>     
      </span>
        {isMenuOpen && <PostMenu onUploadClick={onPostFileUpload}/>}
    </div >
  )
}