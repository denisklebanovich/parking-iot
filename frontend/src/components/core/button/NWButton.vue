<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Color = "primary" | "secondary" | "tertiary" | "primary-inverted";
type ButtonType = "flat" | "outlined" | "minimal";

interface Props {
  color?: Color;
  type?: ButtonType;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  type: "flat",
  disabled: false
});

const buttonClasses = computed(() => {
  const { disabled, color, type } = props;
  return disabled ? ["disabled"] : [color, type];
});
</script>

<style scoped lang="scss">
@use "@/styles/styles.scss" as *;

@function get-background($color, $type) {
  @if ($type == "minimal" or $type == "outlined") {
    @return transparent;
  } @else if ($color != "primary-inverted") {
    @return call(get-function($color));
  } @else {
    @return primary($contrast);
  }
}

@function get-text-color($color, $type) {
  @if ($type == "minimal" or $type == "outlined") {
    @if ($color != "primary-inverted") {
      @return call(get-function($color));
    } @else {
      @return primary($contrast);
    }
  } @else {
    @if ($color != "primary-inverted") {
      @return call(get-function($color), $contrast);
    } @else {
      @return primary();
    }
  }
}

@function get-background-hover($color, $type) {
  @if ($type == "minimal" or $type == "outlined") {
    @if ($color != "primary-inverted") {
      @return call(get-function($color), $variation, 1);
    } @else {
      @return primary($variation, 5);
    }
  } @else {
    @if ($color != "primary-inverted") {
      @return call(get-function($color), $variation, 5);
    } @else {
      @return primary($variation, 1);
    }
  }
}

@function get-background-active($color, $type) {
  @if ($type == "minimal" or $type == "outlined") {
    @if ($color != "primary-inverted") {
      @return call(get-function($color), $variation, 2);
    } @else {
      @return primary($variation, 4);
    }
  } @else {
    @if ($color != "primary-inverted") {
      @return call(get-function($color), $variation, 4);
    } @else {
      @return primary($variation, 2);
    }
  }
}

@function get-border($color, $type) {
  @if ($type == "outlined") {
    @if ($color != "primary-inverted") {
      @return solid 1px call(get-function($color));
    } @else {
      @return solid 1px primary($contrast);
    }
  } @else {
    @return none;
  }
}

@mixin button-styles($color, $type) {
  background: get-background($color, $type);
  color: get-text-color($color, $type);
  border: get-border($color, $type);

  &:hover {
    background: get-background-hover($color, $type);
  }

  &:active {
    background: get-background-active($color, $type);
  }
}

@mixin button-styles-for-type($type) {
  &.primary {
    @include button-styles("primary", $type);
  }

  &.primary-inverted {
    @include button-styles(primary-inverted, $type);
  }

  &.secondary {
    @include button-styles($secondary, $type);
  }

  &.tertiary {
    @include button-styles($tertiary, $type);
  }
}

button {
  font-weight: 700;
  font-size: 1rem;

  padding: 7px $x-small;
  border-radius: $xx-small;

  width: 300px;
  height: 40px;

  margin: $x-small 0;

  cursor: pointer;
}

.flat {
  @include button-styles-for-type(flat);
}

.minimal {
  @include button-styles-for-type(minimal);
}

.outlined {
  @include button-styles-for-type(outlined);
}

.disabled {
  background: disabled();
  color: disabled($contrast);

  cursor: default;
}
</style>
