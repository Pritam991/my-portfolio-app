'use server';

import { recommendBlogTool, type RecommendBlogToolOutput } from '@/ai/flows/blog-recommendation';
import { portfolioData } from './data';
import type { MediumPost } from './types';

// This is an unused function, but we'll keep it in case the user wants to re-enable the blog tool section.
export async function getBlogToolRecommendation(
  input: any
): Promise<{ data?: RecommendBlogToolOutput; error?: string }> {
  try {
    const result = await recommendBlogTool(input);
    return { data: result };
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unexpected error occurred.' };
  }
}

// Regular expression to parse the CDATA content for description and extract image URL
const IMG_RX = /<img[^>]+src="([^"]+)"/;
//function extractDescriptionAndImage(cdata: string) {
//    const match = cdata.match(IMG_RX);
//    const imgSrc = match ? match[1] : 'https://placehold.co/400x200.png';
//    const description = cdata.replace(/<figure>(.|\n)*?<\/figure>/, '').replace(/<[^>]+>/g, '');
//    return { description, imgSrc };
//}


export async function getMediumPosts(): Promise<{ data?: MediumPost[], error?: string }> {
    const username = portfolioData.blog?.mediumUsername;
    if (!username) {
        return { error: 'Medium username is not configured in src/lib/data.ts' };
    }

    const url = `https://medium.com/feed/@${username}`;
    
    try {
        const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
        if (!response.ok) {
        //    throw new Error(`Failed to fetch Medium feed. Status: ${response.status}`);
 //           throw new Error(`Failed to fetch medium feed. Status: ${response.status}`);
    
            if(response.status === 404) {
                return { error: `Could not find a Medium feed  username "${username}". Please check the username in src/lib/data.ts.` };
            }
            return { error: `Failed to fetch Medium feed. Status: ${response.status}` };

        }
        const xmlText = await response.text();
        
        // This is a simplified XML parser. For a real app, a robust library would be better.
        const items = Array.from(xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g));
        const posts: MediumPost[] = items.map(itemMatch => {
            const itemContent = itemMatch[1];
            
            const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
            const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
            const guidMatch = itemContent.match(/<guid isPermaLink="false">(.*?)<\/guid>/);
            const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
            const descriptionMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
            const contentEncodedMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
            const categoriesMatch = Array.from(itemContent.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g));

 //           let thumbnail = 'https://placehold.co/400x200.png';
            let thumbnail: string | null = null;
            // Try to find image in content:encoded first, as it's often higher quality
            if (contentEncodedMatch) {
                 const imgMatch = contentEncodedMatch[1].match(IMG_RX);
//                 if (imgMatch) {
                    if (imgMatch && imgMatch[1]) {
                    thumbnail = imgMatch[1];
                 }
            }
            
            // If not found, try description
//            if (thumbnail.includes('placehold.co') && descriptionMatch) {
//                const { imgSrc } = extractDescriptionAndImage(descriptionMatch[1]);
//                thumbnail = imgSrc;
//           }

                       // If no image found, check the description as a fallback
            if (!thumbnail && descriptionMatch) {
                 const imgMatch = descriptionMatch[1].match(IMG_RX);
                 if (imgMatch && imgMatch[1]) {
                    thumbnail = imgMatch[1];
                 }
            }








            const categories = categoriesMatch.map(match => match[1]);

            return {
                title: titleMatch ? titleMatch[1] : 'Untitled',
                link: linkMatch ? linkMatch[1].split('?source=rss')[0] : '#',
                guid: guidMatch ? guidMatch[1] : '',
                pubDate: pubDateMatch ? pubDateMatch[1] : new Date().toISOString(),
 //               thumbnail: thumbnail,
 //               categories: categoriesMatch.map(match => match[1]),
                thumbnail: thumbnail || 'https://placehold.co/400x200.png',
                categories: categories,
            };
        });

        return { data: posts };

    } catch (e: any) {
        console.error(e);
        return { error: e.message || 'An unexpected error occurred while fetching Medium posts.' };
    }
}
