<script lang="ts">
  interface Props {
    count?: number;
  }

  const { count = 1 }: Props = $props();
</script>

<div class="flex flex-col p-4 gap-y-4 border-2 rounded-2xl animate-pulse">
  {#each Array(count) as item, index}
    <div class="flex flex-col gap-2">
      <div class="h-4 bg-gray-200 rounded w-1/4"></div>
      <div class="h-6 bg-gray-200 rounded w-3/4"></div>
      <div class="h-6 bg-gray-200 rounded w-2/3"></div>
    </div>
  {/each}
</div>
