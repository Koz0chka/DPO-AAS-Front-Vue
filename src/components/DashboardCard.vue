<template>
  <div class="card-custom" :class="{ 'dash-card-large': large }">
    <div class="dash-card-header d-flex justify-content-between align-items-center p-3 border-bottom" v-if="title">
      <h3 class="h6 mb-0 fw-semibold">{{ title }}</h3>
      <slot name="actions"></slot>
    </div>
    <div class="dash-card-body p-3" :style="bodyStyle">
      <slot></slot>
    </div>
    <div class="dash-card-footer p-3 border-top" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  large: Boolean,
  bodyStyle: Object
})
</script>

<style scoped>
.card-custom {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-custom:hover {
  box-shadow: 0 15px 40px rgba(77, 166, 255, 0.15);
}

.dash-card-large {
  grid-column: span 2;
  grid-row: span 2;
}

.dash-card-body {
  flex: 1;
  min-height: 150px;
}
</style>