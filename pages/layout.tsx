import { tag } from "parcel/mod.ts";

export default ({ children }: JSX.ElementProps) => {
  return (
    <div>
      <header class="p-4 bg-blue-100">HEADER</header>
      <main class="p-4">{children}</main>
      <footer class="p-4 bg-blue-100">FOOTER</footer>
    </div>
  );
};
