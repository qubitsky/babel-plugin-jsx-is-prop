import { pluginTester } from "babel-plugin-tester";
import isPropPlugin from "../src/index";

pluginTester({
  plugin: isPropPlugin,
  pluginName: 'jsxIsPropTransformPlugin',
  babelOptions: {
    plugins: [["@babel/plugin-syntax-jsx"]],
  },
  snapshot: true,
  tests: [
    {
      code: "<foo is={Bar} />",
    },
    {
      code: "<foo is={Bar} hello={world} />",
    },
  ],
});
