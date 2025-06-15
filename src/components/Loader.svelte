<script lang="ts">
	import { cn } from "../utils";

  type Size = "small" | "medium" | "large";

  interface Props {
    size?: Size;
		text?: string;
  }

  const { size = "small", text }: Props = $props();

  const sizeClasses: Record<Size, string> = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };
	
	const base = "animate-spin rounded-full border-4 border-gray-200 border-t-blue-600";
  const sizeClass = $derived(sizeClasses[size as Size]);
</script>

<div class="flex items-center justify-center">
  <div class={cn(base, sizeClass)}></div>
  {#if text}
		<span class="ml-3 text-gray-600">Processando...</span>
	{/if}
</div>
