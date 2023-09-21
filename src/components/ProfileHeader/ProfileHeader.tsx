import React, { useState } from "react";
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { UserParameter } from "../UserParameter/UserParameter";
import { ButtonsWrapper } from "../ButtonsWrapper/ButtonsWrapper";
import { AppButton } from "../AppButton/AppButton";
import { UserBackground } from "../UserBackground/UserBackground";
import { Icon } from "../UI/Header/icon/icon";

export const ProfileHeader = () => {
  const user = useSelector((state: RootState) => state.userSlice.user)
  const [avatar, setAvatar] = useState('/img/users/denis-frolov.jpeg')
  const [background, setBackground] = useState('')

  // const handleNewImageUpload = (event: React.ChangeEvent<HTMLDivElement>) => {
  //   if (event.target.files?.[0]) {
  //     const formData = new FormData()

  //     const file1 = event.target.files[0]

  //     formData.append('photo_file', file1)

  //     const reader = new FileReader();
  //     reader.readAsDataURL(file1)

  //     reader.onload= function() {
  //         setBackground(reader.result as string)
  //     }
  //     reader.onerror = function() {
  //       throw new Error('Файл не загружен')
  //     }
  //   }

  //   }

  const handleBackgroundUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData()

      const file = event.target.files[0]

      formData.append('photo_file', file)

      const reader = new FileReader();
      reader.readAsDataURL(file)

      reader.onload = function () {
        setBackground(reader.result as string)
      }
      reader.onerror = function () {
        throw new Error('Файл не загружен')
      }
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData()

      const file = event.target.files[0]

      formData.append('photo_file', file)

      const reader = new FileReader();
      reader.readAsDataURL(file)

      reader.onload = function () {
        setAvatar(reader.result as string)
      }
      reader.onerror = function () {
        throw new Error('Файл не загружен')
      }
    }
  }

  return (
    <div className="ProfileHeader">
      <Icon name="edit" borderRadius="10" padding="10"/>
      <div className="user__block">
        <UserAvatar
          userName="Old User"
          avatarUrl={''}
          onAvatarClick={handleImageUpload}
        />
        <div className="user__description">
          <h1 className="user__name">{user?.name}</h1>
          <div className="user__info">
            <UserParameter persons="Друзья" numberOfPeople={130} />
            <UserParameter persons="Подписчики" numberOfPeople={923} />
            <UserParameter persons="Подписки" numberOfPeople={246} />
          </div>
        </div>
        <ButtonsWrapper>
          <AppButton
            type="button"
            isDisabled={true}
            buttonText="Редактировать профиль"
          />
          <AppButton
            type="button"
            isDisabled={false}
            buttonText="Добавить историю"
          />
        </ButtonsWrapper>
      </div>
      <UserBackground
        backgroundUrl={''}
        onBackgroundClick={handleBackgroundUpload}
      />
    </div>
  )
}