import styled from "styled-components";

const Child = styled.div`
  background-color: #d88;
  padding: 16px;
`;

const NestedChild = styled(Child)`
  background-color: #b44;
`;

const Parent = styled.div`
  background-color: #4b4;
  padding: 16px;

  div {
    background-color: #8d8;
  }
`;

/**
 * 上書きしたスタイルの優先度の調査用
 */
export const ExampleOverwriting: React.VFC = () => {
  return (
    <div>
      <h2>Nested selector priority</h2>
      <Child>".childClass"</Child>
      <br />
      <b>".parentClass div" vs ".childClass"</b>
      <Parent>
        <Child>".parentClass div" の勝ち。</Child>
      </Parent>
      <br />
      <b>styled コンポーネントにさらにスタイルを付けて詳細度が増えるかどうか</b>
      <Parent>
        <NestedChild>
          詳細度は増えずに別のクラスが出来上がる。そのため ".parentClass div" の勝ち。
        </NestedChild>
      </Parent>
    </div>
  );
};
