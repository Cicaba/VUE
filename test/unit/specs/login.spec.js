import Vue from 'vue';
import login from '@/View/login';
//创建测试套件
describe('测试login套件', () => {
  //创建测试用例
  it('测试b显示的内容', () => {
    const Constructor = Vue.extend(login);
    const vm = new Constructor().$mount();
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.vue').contentText)
        .to.equal('Vue单元测试');
    });
  });
});