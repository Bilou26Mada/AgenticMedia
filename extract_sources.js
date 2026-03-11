process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

async function extractSources() {
  const response = await fetch('https://iactu.info/');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.text();

  const linkRegex = /<a href="([^"]+)" target="_blank"[^>]*class="bouton_n"[^>]*>[\s\S]*?<span class="p-nom">([^<]+)<\/span>/g;
  const links = [];
  let match;

  while ((match = linkRegex.exec(data)) !== null) {
    links.push({ url: match[1], name: match[2] });
  }

  console.log(JSON.stringify(links, null, 2));
}

void extractSources().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.log(`Error: ${message}`);
});
