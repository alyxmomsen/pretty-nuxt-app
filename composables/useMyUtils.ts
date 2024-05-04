export default function MyUtils() {
  const a = ref("hello world");

  function set(value: string) {
    a.value = value;
  }

  return {
    a,
    set,
  };
}
