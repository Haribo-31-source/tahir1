# 🧬 Biyoloji Notları Platformu

> 9, 10, 11 ve 12. sınıf biyoloji dersleri için tasarlanmış, güvenli ve minimalist bir içerik yönetim sistemi.

Bir biyoloji öğretmeni (ve gururla söyleyeyim: babam) için geliştirilmiş; sınıf sınıf organize edilmiş ders notlarını öğrencilere sunmayı amaçlayan, **salt-okunur öğrenci arayüzü** ve **güvenli admin paneli** içeren modern bir web uygulaması.

---

## ✨ Özellikler

### 🎓 Öğrenci Tarafı
- Sınıf bazlı (9-10-11-12) biyoloji notlarına kolay erişim
- Kimlik doğrulama gerektirmeyen, hızlı ve erişilebilir arayüz
- Mobil uyumlu (responsive) tasarım
- SEO dostu yapı

### 🔐 Admin Paneli
- Güvenli oturum yönetimi
- Sınıf bazlı not yükleme ve düzenleme
- Dosya yükleme (görsel, PDF) desteği
- Aktivite loglama

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS |
| Veritabanı | PostgreSQL |
| ORM | Prisma |
| Deploy | [Vercel](https://vercel.com) |
| Depolama | Vercel Blob / S3 uyumlu storage |

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- PostgreSQL 14+
- pnpm (önerilir) veya npm

### Adımlar

```bash
# Repoyu klonla
git clone https://github.com/<kullanici-adi>/biyoloji-notlari.git
cd biyoloji-notlari

# Bağımlılıkları yükle
pnpm install

# .env dosyasını oluştur
cp .env.example .env

# PostgreSQL veritabanını oluştur ve migration'ları çalıştır
pnpm prisma migrate dev

# Geliştirme sunucusunu başlat
pnpm dev
```

Uygulama `http://localhost:3000` adresinde çalışır hale gelecektir.

---

## 🔒 Güvenlik Mimarisi

Bu proje, **savunmada derinlik (defense-in-depth)** prensibiyle tasarlanmıştır. Güvenlik tek bir katmana değil, birden fazla birbirini tamamlayan kontrole dayanır.

### 1. Kimlik Doğrulama
- Admin şifresi **yüksek entropili** olmalı ve veritabanında **Argon2id** ile hash'lenerek saklanır.
- `.env` dosyasında yalnızca yapılandırma sırları bulunur; `NEXT_PUBLIC_` öneki taşıyan hiçbir değişken gizli bilgi içermez.
- Zamanlama saldırılarına karşı `timingSafeEqual` kullanılır.

### 2. CSRF Koruması
- Durum değiştiren tüm istekler (login, logout, upload) için **Origin doğrulaması** yapılır.
- `SameSite=Lax` cookie politikası + Origin/Referer kontrolü birlikte uygulanır.
- Logout endpoint'i `POST` metodunu kullanır (GET ile oturum sonlandırılmaz).

### 3. Rate Limiting
- PostgreSQL tabanlı **atomik sayaçlarla** brute-force koruması:
  - IP başına: 20 istek / 15 dakika
  - Hesap başına: 5 istek / 15 dakika
- Sayaç anahtarları `CSRF_SECRET` ile HMAC imzalanarak saklanır.

### 4. Dosya Yükleme Güvenliği
- Uzantı + MIME tipi + içerik doğrulaması birlikte yapılır.
- Dosya adları kullanıcı girdisinden bağımsız olarak **UUID** ile yeniden adlandırılır (path traversal önlemi).
- SVG dosyaları için özel politika uygulanır (XSS riski nedeniyle).

### 5. Cache & Gizlilik
- Admin route'ları: `Cache-Control: private, no-store`
- Herkese açık sayfalar: `noindex` meta etiketi ile arama motorlarından çıkarılır.
- CDN/proxy cache zehirlemesi (cache poisoning) riski minimize edilir.

### 6. Oturum Yönetimi
- Session cookie: `__Host-session`, `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/`
- Token veritabanında **SHA-256 hash** olarak saklanır.
- 7 gün sonra otomatik sona erme.

---

## 🧪 Test

```bash
# Tüm testleri çalıştır
pnpm test

# Güvenlik odaklı testler (auth, CSRF, rate-limit)
pnpm test -- --filter=security
```

### Manuel Test Senaryoları
- [ ] Farklı bir origin'den login formu gönder → reddedilmeli
- [ ] 6 ardışık yanlış şifre denemesi → hesap kilitlenmeli
- [ ] Admin oturumu açıkken `/admin` yanıtının header'ında `no-store` olmalı
- [ ] Client bundle'da şifre/secret string'i arat → çıkmamalı

---

## 📦 Deployment

### Vercel Üzerinde

```bash
# Vercel CLI ile deploy
pnpm vercel --prod
```

### Production Environment Variables

Aşağıdaki değişkenler **Vercel Dashboard → Settings → Environment Variables** üzerinden tanımlanmalıdır:

| Değişken | Açıklama |
|----------|----------|
| `DATABASE_URL` | PostgreSQL bağlantı adresi |
| `ADMIN_PASSWORD_HASH` | Argon2id ile hash'lenmiş admin şifresi |
| `CSRF_SECRET` | En az 32 rastgele byte |
| `APP_ORIGIN` | Uygulamanın tam HTTPS origin'i |

> ⚠️ **Asla** `.env` dosyasını Git'e eklemeyin.

### Production Migration

```bash
# Production'da asla `migrate dev` kullanmayın!
pnpm prisma migrate deploy
pnpm build
```

---

## 📁 Proje Yapısı

```
biyoloji-notlari/
├── app/
│   ├── (public)/          # Öğrenci sayfaları
│   ├── admin/             # Admin paneli
│   └── api/
│       ├── auth/          # Login/logout
│       ├── notes/         # Not CRUD
│       └── upload/        # Dosya yükleme
├── prisma/
│   └── schema.prisma
├── lib/
│   ├── auth.ts            # Oturum yönetimi
│   ├── csrf.ts            # CSRF doğrulama
│   └── rate-limit.ts      # Rate limit mantığı
└── README.md
```

---

## 🎯 Gelecek Planları

- [ ] Çoklu öğretmen desteği (rol tabanlı yetkilendirme)
- [ ] Notlar için yorum/geri bildirim sistemi
- [ ] Quiz ve interaktif içerik desteği
- [ ] İki faktörlü kimlik doğrulama (TOTP)
- [ ] Otomatik yedekleme ve geri yükleme

---

## 📄 Lisans

Bu proje özel amaçlı geliştirilmiştir. Ticari kullanım için izin alınmalıdır.

---

## 🙏 Teşekkür

Bu proje, bir biyoloji öğretmeninin sınıf içi materyal ihtiyacını karşılamak üzere, güvenli ve sürdürülebilir bir mimariyle geliştirilmiştir. Modern web güvenliği prensiplerini gerçek bir kullanım senaryosunda uygulamak, hem teknik hem de etik sorumluluk bilinciyle hareket etmek açısından değerli bir deneyim olmuştur.

---

<div align="center">

**Güvenlik bir ürün değil, bir süreçtir.** 🔐

[Next.js](https://nextjs.org) · [Vercel](https://vercel.com) · [Prisma](https://prisma.io)

</div>
