<template>
  <div class="menu-wrapper">
    <div class="buttons-column">
      <button v-for="button in buttons" :key="button.id" class="menu-button">{{ button.label }}</button>
    </div>
    <div class="menu-items-row">
      <div v-for="menuItem in menuItems" :key="menuItem.id" class="menu-item" @click="toggleRangeSlider(menuItem.id)">
        {{ menuItem.label }}
        <div v-if="menuItem.open" class="range-slider-container">
          <input type="range" class="range-slider" :min="menuItem.min" :max="menuItem.max" :value="menuItem.value" @input="updateValue(menuItem.id, $event.target.value)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { id: 1, label: '1' },
        { id: 2, label: '2' },
        { id: 3, label: '3' },
        { id: 4, label: '4' },
        { id: 5, label: '5' }
      ],
      menuItems: [
        { id: 1, label: 'Menu 1', open: false, min: 0, max: 100, value: 50 },
        { id: 2, label: 'Menu 2', open: false, min: 0, max: 100, value: 50 },
        { id: 3, label: 'Menu 3', open: false, min: 0, max: 100, value: 50 },
        { id: 4, label: 'Menu 4', open: false, min: 0, max: 100, value: 50 },
        { id: 5, label: 'Menu 5', open: false, min: 0, max: 100, value: 50 }
      ]
    };
  },
  methods: {
    toggleRangeSlider(menuItemId) {
      this.menuItems.forEach(menuItem => {
        if (menuItem.id === menuItemId) {
          menuItem.open = !menuItem.open;
        } else {
          menuItem.open = false;
        }
      });
    },
    updateValue(menuItemId, value) {
      const menuItem = this.menuItems.find(menuItem => menuItem.id === menuItemId);
      menuItem.value = value;
    }
  }
};
</script>

<style scoped>
.menu-wrapper {
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons-column {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.menu-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.menu-items-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.menu-item {
  margin-left: 10px;
  position: relative;
  cursor: pointer;
}

.range-slider-container {
  width: 50%;
  position: absolute;
  top: 100%;
  left: 0;
}

.range-slider {
  width: 100%;
}
</style>
