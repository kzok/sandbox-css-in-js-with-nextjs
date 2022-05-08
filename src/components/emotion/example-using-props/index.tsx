import { css, SerializedStyles } from "@emotion/react";
import { memo, useState, useCallback } from "react";

const inputStyle = (isError: boolean): SerializedStyles => css`
  box-sizing: border-box;
  height: 36px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${isError ? "#e22" : "#666"};
  outline: none;
`;

const toggleButtonStyle = (enabled: boolean): SerializedStyles => css`
  box-sizing: border-box;
  height: 36px;
  width: 120px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${enabled ? "#fff" : "#0af"};
  background-color: ${enabled ? "#0af" : "#fff"};
  color: ${enabled ? "#fff" : "#0af"};
  text-align: center;
`;

const StatefulToggleButton: React.VFC = memo(() => {
  const [enabled, setState] = useState<boolean>(false);
  const toggle = useCallback(() => setState((enabled) => !enabled), [setState]);
  return (
    <button css={toggleButtonStyle(enabled)} onClick={toggle}>
      Toggle {enabled ? "ON" : "OFF"}
    </button>
  );
});

/**
 * props の使い方の調査用
 */
export const ExampleUsingProps: React.VFC = () => {
  return (
    <div>
      <h2>Using props</h2>
      <p>props の値によって新しいスタイルが生成されるようです。</p>
      <input css={inputStyle(false)} defaultValue="Hello, world!" />{" "}
      <input css={inputStyle(true)} defaultValue="An error occured." /> <StatefulToggleButton />
    </div>
  );
};
