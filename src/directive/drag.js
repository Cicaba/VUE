// 当绑定元素插入到 DOM 中。拖动元素指令(v-drag)
  //思路:
  // 1. 鼠标点击时记录鼠标位置,记录元素偏移位置!
  // 2. 鼠标移动时动态计算移动距离! 并移动元素!
  // 3. 计算, 并限制位置
  // 4. 鼠标抬起, 取消移动!
  export default function(el, binding, vnode) {
    let X, Y;
    let oldOffsetY;
    let oldOffsetX;
    el.childNodes[0].style.marginBottom = '0px';

    function mousedown(e) {
      if (el.childNodes[0].style.top.includes('%')) { //把百分比转换为px
        el.childNodes[0].style.top = (document.querySelector('body').clientHeight) * parseInt(el.childNodes[0].style.top) / 100 + 'px';
      }
      if (!el.childNodes[0].style.left) {
        el.childNodes[0].style.left = document.querySelector('body').clientWidth - el.childNodes[0].clientWidth + 'px';
      }
      oldOffsetX = parseFloat(el.childNodes[0].style.left);
      oldOffsetY = parseInt(el.childNodes[0].style.top);
      //获取当前的坐标
      X = e.clientX;
      Y = e.clientY;
      listener();
    }

    function mousemove(e) {
      //计算偏移量
      let offsetX = oldOffsetX + (e.clientX - X);
      let offsetY = oldOffsetY + (e.clientY - Y);
      //移动当前元素
      el.childNodes[0].style.left = offsetX + 'px';
      el.childNodes[0].style.top = offsetY + 'px';
      //限制位置
      if (parseFloat(el.childNodes[0].style.left) <= el.childNodes[0].clientWidth / 2) {
        el.childNodes[0].style.left = el.childNodes[0].clientWidth / 2 + 'px';
      };
      if (parseFloat(el.childNodes[0].style.left) >= document.querySelector('body').clientWidth - el.childNodes[0].clientWidth / 2) {
        el.childNodes[0].style.left = document.querySelector('body').clientWidth - el.childNodes[0].clientWidth / 2 + 'px';
      }
      if (parseFloat(el.childNodes[0].style.top) <= 0) {
        el.childNodes[0].style.top = "0px";
      }
      if (parseFloat(el.childNodes[0].style.top) >= document.querySelector('body').clientHeight - el.childNodes[0].clientHeight) {
        el.childNodes[0].style.top = document.querySelector('body').clientHeight - el.childNodes[0].clientHeight + "px";
      }
    };
    el.childNodes[0].childNodes[0].addEventListener("mousedown", mousedown, false);

    function listener() {
      document.addEventListener("mousemove", mousemove, false);
    }
    //取消移动
    el.childNodes[0].childNodes[0].addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', mousemove, false);
    });
  }