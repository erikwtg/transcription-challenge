<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import TranscriptionList from "../components/TranscriptionList.svelte";

	const { Story } = defineMeta({
		title: "Transcription Components/TranscriptionList",
		component: TranscriptionList,
		tags: ["autodocs"],
		argTypes: {
			transcriptions: { control: "object" },
			medicalKeywords: { control: "object" }
		},
	});
</script>

<Story
	name="TranscriptionList"
	args={{
		transcriptions: [
			{
				segmentId: 0,
				text: "Paciente com histórico de hipertensão arterial e dor torácica."
			},
			{
				segmentId: 1,
				text: "Paciente com histórico de hipertensão arterial e dor torácica"
			}
		],
		medicalKeywords: ["hipertensão", "dor torácica"]
	}
} />
