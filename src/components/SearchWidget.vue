<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="relative">
                <MagnifyingGlassIcon class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" @blur="query = ''" />
              </div>

              <ComboboxOptions v-if="hits.length > 0" static class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                <ComboboxOption v-for="hit in hits" :key="hit.objectID" :value="hit" as="template" v-slot="{ active }">
                  <li :class="['cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                    <div class="hit-post_title">{{ hit.post_title }}</div>
                    <div class="hit-content">{{ hit.content }}</div>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

              <p v-if="query !== '' && hits.length === 0" class="p-4 text-sm text-gray-500">No results found.</p>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import algoliasearch from 'algoliasearch/lite';

const props = defineProps({
  appId: { type: String, required: true },
  apiKey: { type: String, required: true },
  indexName: { type: String, required: true }
});

const searchClient = algoliasearch(props.appId, props.apiKey);
const index = searchClient.initIndex(props.indexName);

const open = ref(true);
const query = ref('');
const hits = ref([]);

const searchAlgolia = async () => {
  if (query.value !== '') {
    const { hits: resultHits } = await index.search(query.value);
    hits.value = resultHits;
  } else {
    hits.value = [];
  }
};

watch(query, searchAlgolia);

function onSelect(hit) {
  if (hit) {
    window.location = hit.url;
  }
}
console.log('widget on');
</script>

<style scoped>
/* Zusätzliche Styles hier */
</style>