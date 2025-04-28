import React, { useState } from 'react'
import { 
  FooterItem, 
  Icon, 
  PostContainer, 
  PostFooter, 
  PostHeader, 
  PostImage, 
  PostInfo, 
  PostText, 
  ProfileImage, 
  TimeStamp, 
  UserName,
  ActionButtons,
  FooterStats,
  LikeCount,
  ActionButton,
  ShareButton,
  CommentButton,
  ProfileBadge,
  PostImageOverlay,
  ProfileWrapper,
  LocationTag,
  EngagementBar,
  OptionsButton,
  PostCard,
  ReactionBubble,
  ImageContainer,
  PostTags,
  Tag
} from './style';

import { HeartOutlined, HeartFilled, MessageOutlined, ShareAltOutlined, EnvironmentOutlined, EllipsisOutlined } from '@ant-design/icons';

function NewComponent({ 
  profileImage, 
  userName, 
  timeStamp, 
  text, 
  postImage, 
  likes, 
  shares, 
  location = "Địa điểm du lịch",
  tags = ["travel", "adventure", "explore"] 
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showReaction, setShowReaction] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setShowReaction(true);
      setTimeout(() => setShowReaction(false), 1000);
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <PostCard>
      <PostContainer>
        <PostHeader>
          <ProfileWrapper>
            <ProfileImage src={profileImage} alt={userName} />
            <ProfileBadge />
          </ProfileWrapper>
          <PostInfo>
            <UserName>{userName}</UserName>
            <TimeStamp>
              <span>{timeStamp}</span>
              <LocationTag><EnvironmentOutlined /> {location}</LocationTag>
            </TimeStamp>
          </PostInfo>
          <OptionsButton>
            <EllipsisOutlined />
          </OptionsButton>
        </PostHeader>

        <PostText>{text}</PostText>

        <ImageContainer>
          <PostImage src={postImage} />
          <PostImageOverlay />
          {showReaction && <ReactionBubble>❤️</ReactionBubble>}
        </ImageContainer>

        <PostTags>
          {tags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </PostTags>

        <EngagementBar>
          <FooterStats>
            <LikeCount>
              {likeCount} lượt thích • {shares} chia sẻ
            </LikeCount>
          </FooterStats>
          <ActionButtons>
            <ActionButton isActive={isLiked} onClick={handleLike}>
              {isLiked ? <HeartFilled /> : <HeartOutlined />} Thích
            </ActionButton>
            <CommentButton>
              <MessageOutlined /> Bình luận
            </CommentButton>
            <ShareButton>
              <ShareAltOutlined /> Chia sẻ
            </ShareButton>
          </ActionButtons>
        </EngagementBar>
      </PostContainer>
    </PostCard>
  );
}

export default NewComponent