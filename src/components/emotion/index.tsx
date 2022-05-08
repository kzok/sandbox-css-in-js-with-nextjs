import { ExampleNestedStyle } from "./example-nested-style";
import { ExampleOverwriting } from "./example-overwriting";
import { ExampleUsingProps } from "./example-using-props";

export const Page: React.VFC = () => {
  return (
    <div>
      <ExampleNestedStyle />
      <ExampleOverwriting />
      <ExampleUsingProps />
    </div>
  );
};
