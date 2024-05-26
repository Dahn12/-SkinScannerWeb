import styled from "styled-components"
import { useState } from "react"

function Result() {
  const [result, setReuslt] = useState("wait for your result...");
  //여기에 post로 받아온값 불러오기

  //가져와서 if문으로 정규화

  return (
    <ResultContainer>
      {result}
    </ResultContainer>
  )
}

const ResultContainer = styled.div`
  width: 30vh;
  height : 30vh;
`

export default Result