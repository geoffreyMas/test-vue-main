<script setup lang="ts">

const emit = defineEmits(['closeModal']);

// Props //

// Store //

// Computed //

// Variables //

// Life Cycle //

// Methods //

// cancel modal
const cancelModal = (): void => {
  emit('closeModal');
}

// Watcher //

</script>

<template>
  <div id="modal">
    <div id="modal">
      <!-- blocker -->
      <div
        id="modal_block"
        @click="cancelModal"
      ></div>
      <!-- content -->
      <div
        id="modal_content"
        class="text-right"
      >
        <button
          id="modal_content_close"
          class="btn-close"
          @click="cancelModal"
        >X</button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './ModalTemplate';
</style>