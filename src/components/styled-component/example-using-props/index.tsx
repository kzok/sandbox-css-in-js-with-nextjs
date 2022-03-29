import styled from "styled-components";
import { memo, useState, useCallback } from "react";

type InputProps = Readonly<{
  isError?: boolean | null | undefined;
}>;

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: 36px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.isError ? "#e22" : "#666")};
  outline: none;
`;

type ToggleButtonProps = Readonly<{
  enabled: boolean;
}>;

const ToggleButton = styled.button<ToggleButtonProps>`
  box-sizing: border-box;
  height: 36px;
  width: 120px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.enabled ? "#fff" : "#0af")};
  background-color: ${(props) => (props.enabled ? "#0af" : "#fff")};
  color: ${(props) => (props.enabled ? "#fff" : "#0af")};
  text-align: center;
`;

const StatefulToggleButton: React.VFC = memo(() => {
  const [enabled, setState] = useState<boolean>(false);
  const toggle = useCallback(() => setState((enabled) => !enabled), [setState]);
  return (
    <ToggleButton enabled={enabled} onClick={toggle}>
      Toggle {enabled ? "ON" : "OFF"}
    </ToggleButton>
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
      <Input defaultValue="Hello, world!" /> <Input isError defaultValue="An error occured." />{" "}
      <StatefulToggleButton />
    </div>
  );
};
