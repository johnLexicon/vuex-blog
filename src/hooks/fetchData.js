import { ref } from 'vue';

export default function useFetch(fetcher) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const getData = async () => {
    loading.value = true;
    loading.value = true;
    error.value = null;

    try {
      data.value = await fetcher();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, getData };
}
