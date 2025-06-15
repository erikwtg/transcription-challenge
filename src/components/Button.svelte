<script lang="ts">
  import { cn } from "../utils";

  interface Props {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onclick?: () => void;
    disabled?: boolean;
  }

  type Size = 'small' | 'medium' | 'large';

  const {
    primary = false,
    backgroundColor,
    size = 'medium',
    label,
    disabled = false,
    ...props
  }: Props = $props();

  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-bold focus:outline-none transition-all cursor-pointer';

  const sizeClasses: Record<Size, string> = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  const sizeClass = $derived(sizeClasses[size as Size]);
</script>

<button
  type="button"
  class={cn(
    base,
    sizeClass,
    primary
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  )}
  {disabled}
  {...props}
>
  {label}
  <!-- svelte-ignore slot_element_deprecated -->
  <slot name="icon"></slot>
</button>
