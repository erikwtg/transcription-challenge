<script lang="ts">
	import type { TranscriptionSegmentProps } from "../types";

	import { cn } from "../utils";

	interface TranscriptionItemProps {
		segment: TranscriptionSegmentProps;
		medicalKeywords: string[];
		class?: string;
	}

	const { segment, medicalKeywords, class: className }: TranscriptionItemProps = $props();

  const regex = new RegExp(`\\b(${medicalKeywords.join('|')})\\b`, 'gi');

	function highlightedParts(text: string): { text: string; highlight: boolean }[] {
    if (!medicalKeywords.length) return [{ text, highlight: false }];

    let parts = [];
    let lastIndex = 0;

    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ text: text.slice(lastIndex, match.index), highlight: false });
      }
      parts.push({ text: match[0], highlight: true });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), highlight: false });
    }

    return parts;
  }

  const parts = $derived(highlightedParts(segment.text));
</script>

<p class={cn(className)}>
	<b>Segmento {segment.segmentId + 1}:
		{#each parts as part}
			{#if part.highlight}
				<span class="bg-yellow-300 font-bold">{part.text}</span>
			{:else}
				{part.text}
			{/if}
		{/each}
	</b>
</p>
