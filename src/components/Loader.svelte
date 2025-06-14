<script lang="ts">
  type Size = 'small' | 'medium' | 'large';

  interface Props {
    size?: Size;
  }

  const { size = 'medium' } = $props();

  const sizeClasses: Record<Size, string> = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const sizeClass = $derived(sizeClasses[size as Size]);
</script>

<div class="flex items-center justify-center p-4">
  <div class={`${sizeClass} animate-spin rounded-full border-4 border-gray-200 border-t-blue-600`}></div>
  <span class="ml-3 text-gray-600">Processando...</span>
</div>
