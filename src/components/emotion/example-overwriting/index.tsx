import { css } from "@emotion/react";

const childStyle = css`
  background-color: #d88;
  padding: 16px;
`;

const overwritingChildStyle = css`
  background-color: #b44;
`;

const parentStyle = css`
  background-color: #4b4;
  padding: 16px;

  div {
    background-color: #8d8;
  }
`;

const Child: React.FC<{ className?: string }> = (props) => (
  <div css={childStyle} className={props.className}>
    {props.children}
  </div>
);

/**
 * 上書きしたスタイルの優先度の調査用
 */
export const ExampleOverwriting: React.VFC = () => {
  return (
    <div>
      <h2>Nested selector priority</h2>
      <Child>".childStyle"</Child>
      <br />
      <div css={[childStyle, overwritingChildStyle]}>"[childStyle, overwritingChildStyle]"</div>
      <br />
      <div css={[overwritingChildStyle, childStyle]}>"[overwritingChildStyle, childStyle]"</div>
      <br />
      <Child css={overwritingChildStyle}>
        Custom ".childStyle" component styled with css props ".overwritingChildStyle"
      </Child>
      <br />
      <b>".parentStyle div" vs ".childStyle"</b>
      <div css={parentStyle}>
        <Child>".parentStyle div" の勝ち。</Child>
      </div>
      <br />
      <b>css props を配列にしてスタイルを追加すると詳細度が増えるかどうか</b>
      <div css={parentStyle}>
        <div css={[childStyle, overwritingChildStyle]}>
          詳細度は増えずに別のクラスが出来上がる。そのため ".parentStyle div" の勝ち。
        </div>
      </div>
      <br />
    </div>
  );
};
