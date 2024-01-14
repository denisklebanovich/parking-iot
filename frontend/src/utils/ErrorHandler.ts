import type { Ref } from "vue";
import { AxiosError } from "axios";

export function displayErrorMessage(e: unknown, toastRef?: Ref) {
  if (e instanceof AxiosError) {
    e.response
      ? toastRef?.value.createAttentionToast(e.response.data.message)
      : toastRef?.value.createAttentionToast(e.message);
  }
}