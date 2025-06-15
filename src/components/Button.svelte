<script lang="ts">
  import { cn } from "../utils";

  interface Props {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onclick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    progress?: number;
  }

  type Size = "small" | "medium" | "large";

  const {
    primary = false,
    backgroundColor,
    size = "medium",
    label,
    disabled = false,
    loading = false,
    progress = 0,
    ...props
  }: Props = $props();

  const base = "relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-bold focus:outline-none transition-all cursor-pointer";

  const sizeClasses: Record<Size, string> = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  const sizeClass = $derived(sizeClasses[size as Size]);
</script>

<button
  type="button"
  class={cn(
    base,
    sizeClass,
    primary
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
  )}
  disabled={disabled || loading}
  {...props}
>
  {label}

  {#if loading}
    <div
      class="absolute left-0 top-0 h-full bg-blue-700 opacity-20 transition-all duration-300"
      style="width: {Math.min(progress * 100, 100)}%;"
    ></div>
  {/if}

  <!-- svelte-ignore slot_element_deprecated -->
  <slot></slot>
</button>
