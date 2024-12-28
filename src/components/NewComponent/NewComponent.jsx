import React from 'react'
import { FooterItem, Icon, PostContainer, PostFooter, PostHeader, PostImage, PostInfo, PostText, ProfileImage, TimeStamp, UserName } from './style';



function NewComponent({ profileImage, userName, timeStamp, text, postImage, likes, shares }) {
  return (
    <PostContainer>
      <PostHeader>
        <ProfileImage src={profileImage} />
        <PostInfo>
          <UserName>{userName}</UserName>
          <TimeStamp>{timeStamp}</TimeStamp>
        </PostInfo>
      </PostHeader>
      <PostText>{text}</PostText>
      <PostImage src={postImage} />
      <PostFooter>
        <FooterItem>
          <Icon>👍</Icon> {likes} lượt thích
        </FooterItem>
      </PostFooter>
    </PostContainer>
  );
}

export default NewComponent