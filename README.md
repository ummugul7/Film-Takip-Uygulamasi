# Film Sitesi

React ile geliştirilmiş kişisel film takip uygulaması. TMDB API üzerinden film arayabilir, izleyecekler listenize ekleyebilir ve izlediklerinizi takip edebilirsiniz.

## Özellikler

- **Film Arama** — TMDB API ile canlı film arama
- **İzlenecekler Listesi** — Henüz izlemediğiniz filmleri toplama
- **İzlenenler Listesi** — Tamamladığınız filmleri kaydetme
- **Listeler Arası Taşıma** — İzlenenleri tekrar izleneceklere alabilme
- **LocalStorage** — Veriler tarayıcıda saklanır, sayfa yenilense bile kaybolmaz

## Teknolojiler

- **React 19** — UI bileşenleri
- **Vite** — Build aracı ve dev sunucusu
- **React Router** — Sayfa yönlendirme
- **Context API + useReducer** — Global state yönetimi

## Kurulum

```bash
npm install
```

Uygulama film araması için [TMDB API](https://www.themoviedb.org/documentation/api) anahtarı kullanır. Proje kökünde `.env` dosyası oluşturup şunu ekleyin:

```
VITE_TMDB_KEY=your_api_key_here
```

API anahtarını [themoviedb.org](https://www.themoviedb.org/settings/api) üzerinden ücretsiz alabilirsiniz.

## Çalıştırma

```bash
npm run dev
```

Proje `http://localhost:5173` adresinde açılır.

## Sayfalar

| Route | Açıklama |
|-------|----------|
| `/` | Film arama ve ekleme |
| `/watchlist` | İzlenecekler listesi |
| `/watched` | İzlenenler listesi |

## Proje Yapısı

```
src/
├── components/     # UI bileşenleri (Header, Add, MovieCard, vb.)
├── context/        # GlobalState ve AppReducer
└── App.jsx
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run preview` | Build önizlemesi |
