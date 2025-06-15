<script lang="ts">
  import { onMount } from "svelte";
  import { cn } from "../utils";
  import { TranscriptionList, Button, Loader, TranscriptionListSkeleton } from ".";

  import { getMedicalKeywords, mockSpeechRecognitionAPI } from "../services/api";

  import { transcriptions } from "../store/transcriptions";

  interface TranscriptionsProps {
    class?: string;
    maxSegments?: number;
  }

  const { class: className, maxSegments = 10 }: TranscriptionsProps = $props();

  const base = "min-h-screen w-full bg-gray-50";

  let loading: boolean = $state<boolean>(false);
  let medicalKeywords = $state<string[]>([]);

  let segmentCounter: number = 0;
  let interval: ReturnType<typeof setInterval>;

  onMount(async () => {
    const keywords = await getMedicalKeywords();
    medicalKeywords = keywords;
  });

  function handleClick() {
    loading = true;
    segmentCounter = 0;
    transcriptions.reset();

    interval = setInterval(async () => {
      if (segmentCounter >= maxSegments) {
        clearInterval(interval);
        loading = false;
        return;
      }

      const currentSegment = segmentCounter;
      segmentCounter++;

      try {
        const response = await mockSpeechRecognitionAPI.fetchTranscription(currentSegment);
        transcriptions.push(response.segmentId, response.text)
      } catch (error) {
        clearInterval(interval);
        loading = false;
      }
    }, 100);
  }
</script>

<main class={cn(base, className)}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="space-y-8 bg-white rounded-lg shadow-lg p-6 gap-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Transcrição de Áudio</h1>
        </div>
        
        <div class="flex gap-4">
          <Button
            label="Iniciar Transcrição"
            primary={!loading}
            onclick={handleClick}
            disabled={loading}
          >
            <span slot="icon">
              {#if loading}
                <Loader />
              {/if}
            </span>
          </Button>
        </div>
      </div>

      {#if loading || $transcriptions.length === 0}
        <TranscriptionListSkeleton count={1} />
      {/if}

      {#if !loading && $transcriptions.length !== 0}
        <TranscriptionList
          class="min-h-32"
          transcriptions={$transcriptions}
          {medicalKeywords}
        />
      {/if}
    </div>
  </div>
</main>
