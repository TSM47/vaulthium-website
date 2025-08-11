# Vaultium Website

Nowoczesna strona internetowa zbudowana w Next.js 15 z TypeScript i Tailwind CSS.

## Wymagania

- Node.js 18+ (zalecane 20+)
- npm 9+

## Instalacja

```bash
npm install
```

## Rozwój lokalny

```bash
npm run dev
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Budowanie

```bash
npm run build
```

## Eksport statyczny

```bash
npm run export
```

## Rozwiązywanie problemów

### Błędy webpack podczas budowania

Jeśli napotkasz błędy webpack podczas budowania na GitHub Actions:

1. Upewnij się, że używasz Node.js 20+
2. Sprawdź, czy wszystkie zależności są zainstalowane: `npm ci`
3. Wyczyść cache: `rm -rf .next out node_modules package-lock.json && npm install`

### Problemy z TypeScript

- Sprawdź wersje `@types/react` i `@types/react-dom` - powinny być kompatybilne z wersją React
- Użyj `npm run lint` aby sprawdzić błędy TypeScript

### Problemy z zależnościami

- Usuń `node_modules` i `package-lock.json`
- Uruchom `npm install` ponownie

## Struktura projektu

```
src/
├── app/           # App Router (Next.js 13+)
├── components/    # Komponenty React
└── lib/          # Narzędzia i funkcje pomocnicze
```

## Technologie

- **Framework**: Next.js 15
- **Język**: TypeScript
- **Styling**: Tailwind CSS
- **Animacje**: GSAP
- **Deployment**: GitHub Pages

## Licencja

MIT
