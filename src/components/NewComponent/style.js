import styled from 'styled-components';


 export const PostContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
`;

export const PostHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

export const TimeStamp = styled.span`
  font-size: 0.8rem;
  color: #555;
`;

export const PostText = styled.p`
  padding: 0 15px;
  font-size: 1rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  color: #555;
`;

export const FooterItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.9rem;
  width: 65px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  &:hover{
  background-color: #f2f2f2;
  }
`;

export const Icon = styled.span`
  margin-right: 5px;
  margin-left: 5px;
`;