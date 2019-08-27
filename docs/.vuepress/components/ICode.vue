<template>
  <section class="code">
    <section class="code-header">
      <div class="code-header-title">{{ title }}</div>
      <div class="code-header-desc" v-html="desc"></div>
      <div class="code-header-expand" @click="handlerCollapse">
        <span>{{ text }}</span>
      </div>
    </section>
    <transition name="fade">
      <section ref="highlight" class="code-content" v-show="!collapse">
      </section>
    </transition>
  </section>
</template>

<script>

const COLLAPSE_TEXT = {
  ON: '收缩',
  OFF: '展开'
}


export default {
  name: 'ICode',
  data() {
    return {
      collapse: true,
      text: COLLAPSE_TEXT.OFF
    }
  },

  props: {
    title: String,
    desc: String
  },

  methods: {
    handlerCollapse() {
      this.collapse = !this.collapse
      this.text = this.collapse ? COLLAPSE_TEXT.OFF : COLLAPSE_TEXT.ON
    }
  },

  mounted() {
    const $code = this.$el.nextSibling && this.$el.nextSibling.nextSibling
    $code && this.$refs.highlight.appendChild($code)
  }
}

</script>

<style>
.code {
  margin-bottom: 16px;
  position: relative;
}

.code-header {
  border: 1px solid #ebedf0;
  border-radius: 4px;
  padding: 20px 24px;
}

.code-header-title {
  color: #777;
  position: absolute;
  top: -12px;
  background: #fff;
}

.code-header-expand {
  color: #41c4ff;
  position: absolute;
  right: 32px;
  top: 18px;
  cursor: pointer;
  user-select: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.language-javascript {
  display: block;
}

.code-content .language-javascript {
  margin: 0 !important; 
  border-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

</style>