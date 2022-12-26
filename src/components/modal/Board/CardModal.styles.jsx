import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform: translateX(-50%);
`;

const Modal = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 720px;
  width: 80%;
  padding: 1rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  `;
  
const TitleSection = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 0.2rem;

`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.grey_400};
  border-bottom: 1px solid ${(props) => props.theme.color.grey_400};
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.grey_900};
`;
  
const NickName = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey_800};
`;

const Date = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey_700};
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 1rem;
`;

const Content = styled.div`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${(props) => props.theme.color.grey_900};
`;

const CancelBtn = styled.button`
  border: transparent;
  background: #fff;
  `;

const LikeBtn = styled.button`
  border: transparent;
  background: #fff;
`;

const ModalInput = styled.input`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  border: 0;
  border-radius: 1rem;
  line-height: 2rem;
  background-color: ${(props) => props.theme.color.light_200};
`;

export { 
  Wrapper, 
  Modal, 
  TitleSection, 
  ContentSection, 
  ButtonSection,
  ImageSection, 
  Title, 
  NickName,
  Date,
  Content, 
  Image,
  CancelBtn,
  ModalInput, 
  LikeBtn, 
};