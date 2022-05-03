import { computed } from 'vue';

export default function capitalize(list) {
  const capitalizedList = computed(() =>
    list.map((value) => value.charAt(0).toUpperCase() + value.slice(1))
  );
  return capitalizedList;
}
