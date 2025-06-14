import { writable } from 'svelte/store';

const buffer = new Map<number, string>();
let expectedSegment = 0;

function createTranscriptionStore() {
  const { subscribe, update } = writable<{ segmentId: number; text: string }[]>([]);

  return {
    subscribe,
    push(segmentId: number, text: string) {
      buffer.set(segmentId, text)

      update(current => {
        const updated = [...current];
        while (buffer.has(expectedSegment)) {
          updated.push({ segmentId: expectedSegment, text: buffer.get(expectedSegment)! });
          buffer.delete(expectedSegment);
          expectedSegment++;
        }
        return updated;
      });
    },
    reset() {
      buffer.clear();
      expectedSegment = 0;
      update(() => []);
    }
  }
}

export const transcriptions = createTranscriptionStore();
