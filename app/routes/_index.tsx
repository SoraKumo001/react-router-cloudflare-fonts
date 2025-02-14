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
