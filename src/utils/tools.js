export const renderContent = (blocks) => {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={i} className="mb-4 text-[1em] leading-[1.5]">
            {block.children.map((child, j) => (
              <span key={j}>{child.text}</span>
            ))}
          </p>
        );
      case "heading":
        return (
          <h2 key={i} className="text-xl font-bold mt-4 mb-2">
            {block.children.map((child, j) => (
              <span key={j}>{child.text}</span>
            ))}
          </h2>
        );
      case "list":
        return (
          <ul key={i} className="list-disc list-inside mb-4">
            {block.children.map((item, j) => (
              <li key={j}>
                {item.children.map((child, k) => (
                  <span key={k}>{child.text}</span>
                ))}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
};

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getReadingTime(blocks) {
  if (!Array.isArray(blocks)) return 0;

  const text = blocks
    .flatMap((block) => block.children || [])
    .map((child) => child.text || "")
    .join(" ");

  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const getFullUrl = (path) => {
  if (!path) return "";
  const base = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!base) {
    console.warn("⚠️ NEXT_PUBLIC_BACKEND_URL no está definido");
    return path;
  }
  return `${base}${path}`;
};
