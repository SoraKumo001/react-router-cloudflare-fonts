# react-router-cloudflare-fonts

https://cloudflare-fonts.croud.jp/

## app/root.tsx

```tsx
import { CloudflareFonts } from "cloudflare-fonts";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <CloudflareFonts
          href={[
            "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap",
            "https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap",
            "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap",
          ]}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

## app/routes/\_index.tsx

```tsx
export default function Index() {
  const fonts = ["Noto Sans JP", "Kaisei Decol", "Dela Gothic One"];

  return (
    <div className="text-4xl">
      {fonts.map((v) => (
        <div key={v} style={{ fontFamily: v }}>
          日本語フォント:{v}
        </div>
      ))}
    </div>
  );
}
```
