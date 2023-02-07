import { tag } from "parcel/mod.ts";
import { state } from "parcel/state/mod.ts";

export default () => {
  const [count, setCount] = state(0);

  return (
    <div class="flex gap-4 items-center">
      <button
        class={`p-4 rounded ${!count ? "bg-gray-100" : "bg-green-100"}`}
        on-click={() => {
          setCount(count - 1);
        }}
        disabled={!count}
      >
        -
      </button>
      <div>{count}</div>
      <button
        class="p-4 bg-green-100 rounded"
        on-click={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
