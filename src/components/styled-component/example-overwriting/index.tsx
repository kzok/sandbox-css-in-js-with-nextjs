import styled from "styled-components";

const Child = styled.div`
  padding: 16px;
`;

const Original = styled.div`
  background-color: #b44;
  padding: 16px;

  ${Child} {
    background-color: #d88;
    &::after {
      content: "This is original style.";
    }
  }
`;

const Overwriting = styled(Original)`
  background-color: #4b4;

  ${Child} {
    background-color: #8d8;
    &::after {
      content: "This is overwrited style.";
    }
  }
`;

/**
 * ネストしたスタイルがどのようになっているかの調査用
 */
export const ExampleOverWriting: React.VFC = () => {
  return (
    <div>
      <h2>Overwriting</h2>
      <Original>
        <Child />
      </Original>
      <Overwriting>
        <Child />
      </Overwriting>
    </div>
  );
};
