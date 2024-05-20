
export default {
  // 绑定即触发
  bind(el, binding) {
    el.innerHTML = binding.value
  },
  // 绑定的value更新时触发
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.innerHTML = binding.value
    }
  }
}