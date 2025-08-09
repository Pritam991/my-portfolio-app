'use client';

import { useEffect, useState } from 'react';
import { getMediumPosts } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Loader2, Rss } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import type { MediumPost } from '@/lib/types';
import { Skeleton } from '../ui/skeleton';

function PostSkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export function BlogSection() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const result = await getMediumPosts();
        if (result.error) {
          setError(result.error);
        } else if (result.data) {
          setPosts(result.data);
        }
      } catch (e: any) {
        setError(e.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Blog</h2>
          <p className="text-muted-foreground mt-2 md:text-lg">
            Latest articles and thoughts on Data Engineering, AI, and more.
          </p>
        </div>
        
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </div>
        )}

        {!loading && error && (
            <Alert variant="destructive" className="max-w-2xl mx-auto">
                <Rss className="h-4 w-4" />
                <AlertTitle>Failed to load blog posts</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {!loading && !error && posts.length === 0 && (
             <div className="text-center text-muted-foreground">
                <p>No posts found. Once you publish on Medium, they will appear here automatically!</p>
             </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.guid} className="flex flex-col overflow-hidden">
                <Link href={post.link} target="_blank" rel="noopener noreferrer">
                    <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                    />
                </Link>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight h-12 overflow-hidden">{post.title}</CardTitle>
                  <CardDescription>
                    Published on {new Date(post.pubDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                        {post.categories.map(cat => <Badge key={cat} variant="secondary">{cat}</Badge>)}
                    </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="px-0">
                    <Link href={post.link} target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
