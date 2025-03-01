import { NextResponse } from 'next/server';
import { ApifyClient } from 'apify-client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
  }

  // Initialize the ApifyClient with your API token
  const client = new ApifyClient({
    token: process.env.APIFY_API_TOKEN,
  });

  // Prepare the input for the actor
  const input = {
    searchQueries: [query],
    proxyConfiguration: {
      apifyProxyGroups: ['RESIDENTIAL'],
    },
  };

  try {
    // Call the actor and wait for it to finish
    const run = await client.actor('5wK4Zhlr6brz5aMf5').call(input);

    // Fetch the results from the actor's dataset
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    // Return JSON using the Next.js 13 Response helpers
    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error in scraping:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
