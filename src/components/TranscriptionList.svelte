<script lang="ts">
	import type { TranscriptionSegmentProps } from "../types";
	import { TranscriptionItem} from "../components";

	import { cn } from "../utils";

	interface TranscriptionListProps {
		transcriptions: TranscriptionSegmentProps[];
		medicalKeywords: string[];
		class?: string;
	}

	const { transcriptions, medicalKeywords, class: className }: TranscriptionListProps = $props();

	const base = 'flex flex-col p-4 gap-y-2 border-2 rounded-2xl';
</script>

<div class={cn(base, className)}>
	{#each transcriptions as segment (segment.segmentId)}
		<TranscriptionItem
			{segment}
			{medicalKeywords}
		/>
	{/each}
</div>
