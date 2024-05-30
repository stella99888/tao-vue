<!-- form表单组件 第四层slot render函数写法 才能实现 -->
<script>
export default {
    name: "slo",
    props: {
        propKey: {
            type: String,
            default: ''
        },
        propName: {
            type: String,
            default: ''
        },
    },
    render(h) {
        let unitKey = this.propName // age&suffix
        let prop = this.propKey // age
        if (unitKey.includes(prop)) {
            return h('span', this.$slots[unitKey]);
        }
    }
};
</script>