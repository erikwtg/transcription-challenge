<script lang="ts">
	import type { TranscriptionSegmentProps } from "../types";
	import { TranscriptionItem} from "../components";

	interface TranscriptionListProps {
		transcriptions: TranscriptionSegmentProps[];
		medicalKeywords: string[];
	}

	const { transcriptions, medicalKeywords }: TranscriptionListProps = $props();
</script>

<div class="flex flex-col p-4 gap-y-2 border-2 rounded-2xl">
	{#each transcriptions as segment (segment.segmentId)}
		<TranscriptionItem
			{segment}
			{medicalKeywords}
		/>
	{/each}
</div>
