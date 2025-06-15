<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import TranscriptionItem from "../components/TranscriptionItem.svelte";

	const { Story } = defineMeta({
		title: "Transcription Components/TranscriptionItem",
		component: TranscriptionItem,
		tags: ["autodocs"],
		argTypes: {
			segment: { control: "object" },
			medicalKeywords: { control: "object" }
		},
	});
</script>

<Story
	name="TranscriptionItem"
	args={{
		segment: {
			segmentId: 0,
			text: "Paciente com histórico de hipertensão arterial e dor torácica."
		},
		medicalKeywords: ["hipertensão", "dor torácica"]
	}
} />
