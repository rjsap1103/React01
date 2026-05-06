import React from 'react';

function Cal(props) {
  const first = props.score[0];
  const second = props.score[1];
  const third = props.score[2];
  const total = first + second + third;
  // const total = props.score[0] + props.score[1] + props.score[2];
  const average = total / 3;
  return (
    <>
      <h2>성적표</h2>
      <p>국어{first}점</p>
      <p>수학{second}점</p>
      <p>영어{third}점</p>
      {/* <p>국어{props.score[0]}점</p>
      <p>수학{props.score[1]}점</p>
      <p>영어{props.score[2]}점</p> */}
      <hr />
      <p>
        <strong>총점: {total}</strong>
        {/* strong 굵은 글씨 폰트가 다르면 다르게 보임 */}
      </p>
      <p>평균: {average}</p>
    </>
  );
}

export default Cal;
