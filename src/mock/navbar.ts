import Mock from "mockjs"
const navbarMock = Mock.mock("mock/navTitles","get",{
  success: true,
  "navTitles":
    ['首页', '全局规则', '设计规范', '开发', '资源']
});