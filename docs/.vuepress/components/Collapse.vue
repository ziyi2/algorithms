<template>
  <section class="collapse">
    <section class="collapse-header" :class="{ collapse }">
      <div class="collapse-header-title">{{ title }}</div>
      <div class="collapse-header-action" @click="handlerCollapse">{{ action }}</div>
    </section>
    <transition name="fade">
      <section ref="content" class="collapse-content" v-show="!collapse"></section>
    </transition>
  </section>
</template>

<script>
const COLLAPSE_TEXT = {
  ON: "收缩",
  OFF: "展开",
};

export default {
  name: "Collapse",
  data() {
    return {
      collapse: true,
      action: COLLAPSE_TEXT.OFF,
    };
  },

  props: {
    title: String,
    desc: String,
  },

  methods: {
    handlerCollapse() {
      this.collapse = !this.collapse;
      this.action = this.collapse ? COLLAPSE_TEXT.OFF : COLLAPSE_TEXT.ON;
    },
  },

  mounted() {
    const $collapse = this.$el.nextSibling && this.$el.nextSibling.nextSibling;
    $collapse && this.$refs.content.appendChild($collapse);
  },
};
</script>

<style>
.collapse {
  position: relative;
}

.collapse-header {
  border: 1px solid #ebedf0;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 16px;
  display: flex;
  height: 20px;
  line-height: 1;
}

.collapse-header.collapse {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.collapse-header-title {
  color: #777;
  background: #fff;
  flex: 1;
}

.collapse-header-action {
  color: #41c4ff;
  cursor: pointer;
  user-select: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.language-javascript,
.language-javascript {
  display: block !important;
}

.collapse-content .language-javascript,
.collapse-content .language-typescript {
  margin: 0 !important;
  border-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>