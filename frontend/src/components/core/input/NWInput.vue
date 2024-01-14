<script lang="ts" setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { onMounted, ref } from "vue";

export type NWInputLabelPosition = "top" | "left" | "right";
export type NWInputHelperPosition = "left" | "right";

export type NWInputProps = {
  modelValue?: any;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  labelPosition?: NWInputLabelPosition;
  helperPosition?: NWInputHelperPosition;
  checkbox?: boolean;
  showSpinner?: boolean;
  alignRight?: boolean;
  focus?: boolean;
};

const props = withDefaults(defineProps<NWInputProps>(), {
  error: false,
  disabled: false,
  labelPosition: "top",
  helperPosition: "left"
});

const emit = defineEmits(["update:modelValue", "update"]);

const handleChange = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
  emit("update");
};

const inputRef = ref();

onMounted(() => {
  if (props.focus) {
    inputRef.value.focus();
  }
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false
};
</script>
<template>
  <div class="containerClass">
    <div
      :class="{
        labelTop: labelPosition === 'top',
        labelLeft: labelPosition === 'left',
        labelRight: labelPosition === 'right',
        checkbox: checkbox === true,
      }"
    >
      <span class="label" :class="{ errorLabel: error, labelDisabled: disabled || showSpinner }">
        <slot name="label" />
      </span>
      <div class="input-wrapper">
        <input
          :value="modelValue"
          :placeholder="placeholder"
          class="input"
          :disabled="disabled || showSpinner"
          :class="{
            errorInput: error,
            labelDisabled: disabled || showSpinner,
            alignRight: alignRight,
          }"
          v-bind="$attrs"
          @input="handleChange"
          ref="inputRef"
        />
        <PulseLoader v-if="showSpinner" class="spinner" color="#000" size="10px" />
      </div>
    </div>
    <span
      class="label common-text-small-thin helper"
      :class="{
        errorLabel: error,
        labelDisabled: disabled || showSpinner,
        helperRight: helperPosition === 'right' || labelPosition === 'left',
      }"
      data-cy="input-error-helper"
    >
      <slot name="helper" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/styles.scss" as *;


.containerClass {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: $xx-small;
  margin-bottom: $xx-small;

  .label {
    margin-right: $xx-small;
    display: inline-block;
    white-space: nowrap;
  }

  .labelTop {
    width: 100%;
    @extend .containerClass;
  }

  .labelLeft {
    @extend .containerClass;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  .labelRight {
    @extend .containerClass;
    flex-direction: row-reverse;
    width: 100%;
    align-items: center;
  }

  .checkbox {
    padding-top: 27px;
    width: fit-content;
  }

  .labelDisabled {
    color: disabled($contrast);
  }

  .input-wrapper {
    width: 100%;
    position: relative;

    .input {
      display: flex;
      background-color: background($variation, 1);
      color: primary();
      padding: $xx-small;
      border: solid 1px primary($variation, 3);
      border-radius: 5px;

      box-sizing: border-box;
      width: 360px;
      height: 40px;

      &:placeholder-shown {
        color: primary($muted);
      }

      &:hover {
        border-color: primary($variation, 4);

        &::placeholder {
          border-color: primary($variation, 4);
        }
      }

      &:focus::placeholder {
        color: transparent;
      }

      &:not(:placeholder-shown) {
        border-color: primary($variation, 5);
      }

      &:disabled {
        background-color: disabled($main);
        border-color: disabled($contrast);

        &::placeholder {
          border-color: disabled($contrast);
        }

        &:hover {
          border-color: disabled($contrast);

          &::placeholder {
            border-color: disabled($contrast);
          }
        }
      }
    }

    .errorInput {
      background-color: attention($variation, 1);
      color: primary();
    }

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
    }

    .alignRight {
      text-align: right;
    }
  }

  .errorLabel {
    color: attention($muted);
  }

  .helper {
    white-space: normal;
    word-break: break-word;
  }

  .helperRight {
    margin-left: auto;
  }
}
</style>
