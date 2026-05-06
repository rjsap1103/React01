import React from 'react';
import Cal from './Cal';

function App() {
  const allScore = [100, 90, 80];

  return <Cal score={allScore} />;
}

export default App;

// 1인당 3과목 점수 자식한테 던짐
// 총 3명
// 세트로 묶어서 자식에세 보낸다
// 자식은 총점과 평균을 계산한다
