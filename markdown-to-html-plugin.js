import {marked} from 'marked';

export default function markdownToHtmlPlugin() {
  return {
    name: 'markdown-to-html',

    transform(src, id) {
      if (id.endsWith('.md')) {
        const htmlContent = marked(src);  // Convertir le Markdown en HTML
        return {
          code: `export default ${JSON.stringify(htmlContent)}`,  // Exporter le HTML comme un module JavaScript
          map: null,  // Ajoutez une source map si nécessaire
        };
      }
    }
  };
}
