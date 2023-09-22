import { CodeBlock } from "./code-block";
import { Equation } from "./equation";

export const Components = {
  div: ({ children, ...props }) => {
    if (props["data-rehype-pretty-code-fragment"] === "") return <CodeBlock {...props} children={children} />;
    return <div {...props}>{children}</div>;
  },
  Equation: (props) => <Equation {...props} />,
};
