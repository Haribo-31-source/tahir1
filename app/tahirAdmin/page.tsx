import { notYukle } from "../data/notYukle";

export default function Page() {
  return (
    <form action={notYukle} method="post">
        <input type="text" name="name" placeholder="Not İsmi" />
        <input type="text" name="prompt" id="prompt" placeholder="Açıklama" />
        <input type="file" name="image" id="image" placeholder="Resim" />
        <button type="submit">Gönder</button>
    </form>
  );
}