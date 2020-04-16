// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';


// 每当运行 jest 或者 cnpm run test时会先运行改文件
// 实际上该文件是一个全局通用的配置，通过这样的方式，能够在代码中使用一些其他的测试api