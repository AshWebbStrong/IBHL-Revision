import katex from 'katex';

function renderInlineMath(text) {
  const source = String(text ?? '');

  // Split into $...$ and $$...$$ chunks.
  const parts = source.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g);

  return parts.map((part, index) => {
    if (!part) return null;

    const isBlock = part.startsWith('$$') && part.endsWith('$$');
    const isInline = part.startsWith('$') && part.endsWith('$') && !isBlock;

    if (!isBlock && !isInline) {
      return <span key={index}>{part}</span>;
    }

    const latex = isBlock
      ? part.slice(2, -2).trim()
      : part.slice(1, -1).trim();

    const html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: isBlock,
    });

    if (isBlock) {
      return <div key={index} dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default function LatexText({ text = '', className = '' }) {
  const lines = String(text).split('\n');

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={index}>{renderInlineMath(line)}</div>
      ))}
    </div>
  );
}