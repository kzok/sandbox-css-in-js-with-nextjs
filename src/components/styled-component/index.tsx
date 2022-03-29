import { ExampleNestedStyle } from "./example-nested-style";
import { ExampleOverwriting } from "./example-overwriting";

export const Page: React.VFC = () => {
  return (
    <div>
      <ExampleNestedStyle />
      <ExampleOverwriting />
    </div>
  );
};
