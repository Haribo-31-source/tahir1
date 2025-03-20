
import styles from './page.module.css'; // CSS module import

export default function Page() {
  return (
    <form action="api/newNote" method="post" encType="multipart/form-data" className={`${styles.form} responsive-form`}>
      <input type="text" name="name" placeholder="Not Adı" className={`${styles.input} responsive-input`} />
      <select name="category" id="category" className={`${styles.select} responsive-select`}>
        <option value="">Kategori Seçin</option>
        <option value="PDF">PDF</option>
        <option value="NOTE">NOTE</option>
      </select>
      <input type="text" name="description" placeholder="Açıklama" className={`${styles.input} responsive-input`} />
      <input type="file" name="image" placeholder="Resim Yükle" className={`${styles.input} responsive-input`} />
      <select name="sinif" id="sinif" className={`${styles.select} responsive-select`}>
        <option value="">Sınıf Düzeyi Seçin</option>
        <option value="s9">S9</option>
        <option value="s10">S10</option>
        <option value="s11">S11</option>
        <option value="s12">S12</option>
      </select>
      <button type="submit" className={`${styles.button} responsive-button`}>Submit</button>
    </form>
  );
}

