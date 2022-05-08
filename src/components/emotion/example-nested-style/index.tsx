import { css } from "@emotion/react";

const childStyle = css`
  padding: 16px;
`;

const redStyle = css`
  background-color: #b44;
  padding: 16px;

  .css-${childStyle.name} {
    background-color: #d88;

    &::after {
      content: "This is red style.";
    }
  }
`;

const greenStyle = css`
  background-color: #4b4;
  padding: 16px;

  .css-${childStyle.name} {
    background-color: #8d8;

    &::after {
      content: "This is green style.";
    }
  }
`;

/**
 * ネストしたスタイルがどのようになっているかの調査用
 */
export const ExampleNestedStyle: React.VFC = () => {
  return (
    <div>
      <h2>Overwriting</h2>
      <div css={redStyle}>
        <code>{"<div css={redStyle}>"}</code>
        <div css={childStyle} />
      </div>
      <div css={greenStyle}>
        <code>{"<div css={greenStyle}>"}</code>
        <div css={childStyle} />
      </div>
      <div css={[greenStyle, redStyle]}>
        <code>{"<div css={[greenStyle, redStyle]}>"}</code>
        <div css={childStyle} />
      </div>
      <div css={[redStyle, greenStyle]}>
        <code>{"<div css={[redStyle, greenStyle]}>"}</code>
        <div css={childStyle} />
      </div>
    </div>
  );
};
