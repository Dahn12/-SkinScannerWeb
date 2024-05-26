import styled from "styled-components"
import { useState } from "react";
import Result from "./components/Result";
import noneImg from "./image/none.png";

function App() {
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e) => {
    const { files } = e.target; // 이벤트 객체로부터 files를 받아옴
    if (files && files.length > 0) { // files가 존재하고 배열에 파일이 있을 경우
        const uploadFile = files[0]; 
        const reader = new FileReader(); // 데이터를 비동기적으로 읽는데 도움을 주는 웹 API 객체
        reader.readAsDataURL(uploadFile); // 선택한 파일을 데이터 URL로 변환
        reader.onloadend = () => {
            setUploadImgUrl(reader.result); // 선택한 이미지를 서버에 보낼 때 uploadImgUrl 값으로 보냄
        }; // 읽기 동작이 발생하면 성공 여부와 상관없이 호출되는 이벤트 핸들러
    } else {
        // files가 없거나 파일이 없는 경우 처리
        console.error('파일이 선택되지 않았습니다.');
        setUploadImgUrl(noneImg);
        console.log(uploadImgUrl);
          }
};


  return (
    <Container>
      <Title>Skin Scanner</Title>
      <Wrapper>
        <ImgWrapper>
          <h3>⏬ Put your skin Image here!</h3>
          <img src = {uploadImgUrl} alt='피부이미지' img = "img"/>
          <label for="file">
            <FileUploadBtn>upload</FileUploadBtn>
          </label>
          <input style={{display:"none"}} type = "file" name="file" accept = "image/*"  onChange = {onchangeImageUpload}/>
        </ImgWrapper>
        <ResultWrapper>
          <h3>🩻 Your Skin has been scanned</h3>
          <Result/>
        </ResultWrapper>
      </Wrapper>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2`
  font-weight: 700;
  font-size: 4.5rem;
  margin: 2rem auto;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10vh;
`
const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 30vh;
  }
  h3{
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem auto;
  }
`

const FileUploadBtn = styled.div`
  width: 20vh;
  height: 5vh;
  background-color: aliceblue;
  color:  #191f2c;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 10px;
  margin: 1rem auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgb(77,77,77);
    color: #fff;
  }
`

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3{
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem auto;
  }
`

export default App;
