import { ref, computed } from 'vue';

export default function useSearch(items, searchProp) {
  const searchText = ref('');

  const filteredItems = computed(() => {
    if (!items.value) {
      return [];
    }
    return items.value.filter((item) =>
      item[searchProp].toLowerCase().includes(searchText.value.toLowerCase())
    );
  });

  return { searchText, filteredItems };
}
