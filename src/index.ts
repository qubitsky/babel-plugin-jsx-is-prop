import babel, { NodePath } from "@babel/core";
import { JSXAttribute } from "@babel/types";

export default function ({ types: t }: typeof babel) {
  return {
    visitor: {
      JSXAttribute(path: NodePath<JSXAttribute>) {
        if (
          t.isJSXIdentifier(path.node.name, { name: "is" }) &&
          t.isJSXExpressionContainer(path.node.value) &&
          t.isIdentifier(path.node.value.expression) &&
          t.isJSXOpeningElement(path.parent) &&
          t.isJSXIdentifier(path.parent.name)
        ) {
          const { name } = path.node.value.expression;
          path.parent.name.name = name;
          path.remove();
        }
      },
    },
  };
}