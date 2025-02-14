# react-router-cloudflare-fonts

https://cloudflare-fonts.croud.jp/

## CloudflareFonts.tsx

```tsx
import { useRef, type FC } from "react";

type FontProperty = {
  isLoaded?: boolean;
  isData?: boolean;
};

const isServer = typeof window === "undefined";

export const CloudflareFonts: FC<{ href: string | string[] }> = ({ href }) => {
  const property = useRef<FontProperty>({}).current;
  if (!property.isLoaded && !isServer) {
    property.isLoaded = true;
    const nodes = document.querySelectorAll("head style[type='text/css']");
    property.isData = Array.from(nodes).some((v) =>
      v.textContent?.includes("url(/cf-fonts/")
    );
  }
  if (!property.isData) {
    const urls = Array.isArray(href) ? href : [href];
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {urls.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </>
    );
  }
  return null;
};
```

## app/root.tsx

```tsx
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
