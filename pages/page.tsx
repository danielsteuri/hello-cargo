import { tag } from "parcel/mod.ts";
import Counter from "app/Counter$.tsx";

export default () => {
  return (
    <div>
      <h1 class="text-3xl mb-4">Hello World!</h1>
      <Counter initialCount={1} />
    </div>
  );
};
