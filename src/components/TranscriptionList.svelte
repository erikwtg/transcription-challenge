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

	const base = "flex flex-col py-4 pl-4 pr-2 gap-y-2 border-2 rounded-2xl";
	const scrollContainer = "max-h-full overflow-y-auto scrollbar-custom";
</script>

<div class={cn(base, className)}>
	<div class={scrollContainer}>
		{#each transcriptions as segment (segment.segmentId)}
			<TranscriptionItem
				{segment}
				{medicalKeywords}
			/>
		{/each}
	</div>
</div>

<style>
	.scrollbar-custom {
		scrollbar-width: thin;
		scrollbar-color: #d1d5db transparent;
	}
	.scrollbar-custom::-webkit-scrollbar {
		width: 6px;
	}
	.scrollbar-custom::-webkit-scrollbar-thumb {
		background-color: #d1d5db;
		border-radius: 9999px;
		box-shadow: inset 0 0 4px 4px transparent;
	}
	.scrollbar-custom::-webkit-scrollbar-thumb:hover {
		background-color: #9ca3af;
	}
	.scrollbar-custom::-webkit-scrollbar-track {
		background-color: transparent;
	}
</style>
