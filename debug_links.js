const FEED_SOURCES = [
  { id: 'madebyagents', name: 'Made By Agents', url: 'https://www.madebyagents.com/rss/ai-agents' },
  { id: 'marktechpost', name: 'MarkTechPost', url: 'https://www.marktechpost.com/feed/' },
  { id: 'googleai', name: 'Google AI', url: 'https://feeds.feedburner.com/blogspot/gJZg' },
  { id: 'venturebeat-ai', name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/' },
];

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

async function checkLinks() {
  const { default: Parser } = await import('rss-parser');
  const parser = new Parser();

  for (const source of FEED_SOURCES) {
    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after 10s`)), 10000)
      );
      const feed = await Promise.race([
        parser.parseURL(source.url),
        timeoutPromise,
      ]);
      console.log(`\n--- ${source.name} ---`);

      if (feed.items.length > 0) {
        const item = feed.items[0];
        console.log(`Title: ${item.title}`);
        console.log(`Link: ${item.link}`);
        console.log(`Guid: ${item.guid}`);
      } else {
        console.log('No items found.');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.log(`Error: ${message}`);
    }
  }
}

void checkLinks();
