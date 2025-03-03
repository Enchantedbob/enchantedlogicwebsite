# Content Management System Integration Plan

This document outlines a comprehensive plan for integrating a content management system (CMS) with the Enchanted Logic website, allowing for easier content updates without code changes.

## Overview

The current website has content hardcoded in components. Implementing a CMS will separate content from presentation, making the site more maintainable and allowing non-technical users to update content.

## Options Analysis

### Option 1: Headless CMS (Recommended)

**Description**: Use a third-party headless CMS service that provides content via API.

**Pros**:
- Purpose-built for content management
- User-friendly interfaces for content editors
- Robust content modeling capabilities
- Handles media assets efficiently
- Built-in workflows and publishing controls

**Cons**:
- Additional external dependency
- May have costs for higher usage tiers
- Requires API integration

**Recommended Services**:
1. **Contentful** - Enterprise-grade, powerful content modeling
2. **Sanity.io** - Highly customizable, developer-friendly
3. **Strapi** - Open-source, self-hostable option

### Option 2: Extend Supabase

**Description**: Use existing Supabase integration to store and manage content.

**Pros**:
- Leverages existing infrastructure
- No additional service dependencies
- Potentially lower cost
- Unified authentication system

**Cons**:
- Limited content editing experience
- Would need to build custom admin interfaces
- Less specialized for content management
- Limited media handling capabilities

### Option 3: Markdown/MDX-based

**Description**: Store content as Markdown files in the repository.

**Pros**:
- No external dependencies
- Version controlled with code
- Developer-friendly
- Free to implement

**Cons**:
- Limited for non-technical users
- Requires code deployment for content changes
- Basic media handling
- Limited content relationships

## Recommended Approach: Contentful Integration

Based on the analysis, we recommend using Contentful as the headless CMS solution for the following reasons:
- Robust content modeling capabilities
- Excellent developer experience with comprehensive SDK
- User-friendly interface for content editors
- Strong media asset management
- Reasonable free tier for getting started

## Implementation Plan

### Phase 1: Setup and Content Modeling

#### Step 1: Create Contentful Account
1. Sign up for a Contentful account at [contentful.com](https://www.contentful.com/)
2. Create a new space for the Enchanted Logic website
3. Generate API keys (Content Delivery API and Content Management API)

#### Step 2: Install Dependencies
```bash
npm install contentful contentful-management @contentful/rich-text-react-renderer
```

#### Step 3: Create Environment Configuration
Create a `.env` file with Contentful credentials:
```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
VITE_CONTENTFUL_ENVIRONMENT=master
```

#### Step 4: Define Content Models in Contentful
1. **Page** content type:
   - Title (Short text)
   - Slug (Short text)
   - Description (Short text) - For SEO
   - Content (Rich text)
   - Featured Image (Media)
   - SEO Metadata (JSON object)

2. **Blog Post** content type:
   - Title (Short text)
   - Slug (Short text)
   - Author (Reference to Author)
   - Publication Date (Date)
   - Content (Rich text)
   - Featured Image (Media)
   - Categories (References to Category)
   - Tags (Short text, list)
   - SEO Metadata (JSON object)

3. **Author** content type:
   - Name (Short text)
   - Bio (Long text)
   - Photo (Media)
   - Social Links (JSON object)

4. **Category** content type:
   - Name (Short text)
   - Slug (Short text)
   - Description (Long text)

5. **Service** content type:
   - Title (Short text)
   - Slug (Short text)
   - Description (Rich text)
   - Icon (Short text) - For Lucide icon name
   - Features (Short text, list)
   - Price (Number)
   - Call to Action (Short text)

#### Step 5: Create Sample Content
1. Create at least one entry for each content type
2. Upload necessary images and assets
3. Publish the content to make it available via the API

### Phase 2: API Integration

#### Step 6: Create Contentful Client
Create a file `src/lib/contentful.ts`:

```typescript
import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

export default contentfulClient;
```

#### Step 7: Create Content Type Interfaces
Create a file `src/types/contentful.ts`:

```typescript
export interface Author {
  name: string;
  bio: string;
  photo: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  author: Author;
  publishDate: string;
  content: any; // Rich text content
  featuredImage: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  categories: Category[];
  tags: string[];
  seoMetadata: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Page {
  title: string;
  slug: string;
  description: string;
  content: any; // Rich text content
  featuredImage?: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  seoMetadata: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Service {
  title: string;
  slug: string;
  description: any; // Rich text content
  icon: string;
  features: string[];
  price: number;
  callToAction: string;
}
```

#### Step 8: Create Content Fetching Hooks
Create a file `src/hooks/use-contentful.ts`:

```typescript
import { useQuery } from '@tanstack/react-query';
import contentfulClient from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { BlogPost, Page, Service, Author, Category } from '@/types/contentful';

// Rich text renderer options
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.CODE]: (text: React.ReactNode) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-6" />,
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url, title, width, height } = node.data.target.fields.file;
      return <img src={url} alt={title} width={width} height={height} className="my-4 rounded-md" />;
    },
  },
};

// Transform Contentful response to our interface
const transformBlogPost = (entry: any): BlogPost => {
  const fields = entry.fields;
  return {
    title: fields.title,
    slug: fields.slug,
    author: transformAuthor(fields.author),
    publishDate: fields.publishDate,
    content: fields.content ? documentToReactComponents(fields.content, richTextOptions) : null,
    featuredImage: fields.featuredImage ? {
      url: fields.featuredImage.fields.file.url,
      title: fields.featuredImage.fields.title,
      width: fields.featuredImage.fields.file.details.image.width,
      height: fields.featuredImage.fields.file.details.image.height,
    } : null,
    categories: fields.categories ? fields.categories.map(transformCategory) : [],
    tags: fields.tags || [],
    seoMetadata: fields.seoMetadata || {},
  };
};

const transformPage = (entry: any): Page => {
  const fields = entry.fields;
  return {
    title: fields.title,
    slug: fields.slug,
    description: fields.description,
    content: fields.content ? documentToReactComponents(fields.content, richTextOptions) : null,
    featuredImage: fields.featuredImage ? {
      url: fields.featuredImage.fields.file.url,
      title: fields.featuredImage.fields.title,
      width: fields.featuredImage.fields.file.details.image.width,
      height: fields.featuredImage.fields.file.details.image.height,
    } : null,
    seoMetadata: fields.seoMetadata || {},
  };
};

const transformService = (entry: any): Service => {
  const fields = entry.fields;
  return {
    title: fields.title,
    slug: fields.slug,
    description: fields.description ? documentToReactComponents(fields.description, richTextOptions) : null,
    icon: fields.icon,
    features: fields.features || [],
    price: fields.price || 0,
    callToAction: fields.callToAction,
  };
};

const transformAuthor = (entry: any): Author => {
  const fields = entry.fields;
  return {
    name: fields.name,
    bio: fields.bio,
    photo: fields.photo ? {
      url: fields.photo.fields.file.url,
      title: fields.photo.fields.title,
      width: fields.photo.fields.file.details.image.width,
      height: fields.photo.fields.file.details.image.height,
    } : null,
    socialLinks: fields.socialLinks || {},
  };
};

const transformCategory = (entry: any): Category => {
  const fields = entry.fields;
  return {
    name: fields.name,
    slug: fields.slug,
    description: fields.description,
  };
};

// Hooks for fetching content
export function useGetBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-fields.publishDate',
      });
      return response.items.map(transformBlogPost);
    },
  });
}

export function useGetBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
      });
      if (response.items.length === 0) {
        throw new Error('Blog post not found');
      }
      return transformBlogPost(response.items[0]);
    },
    enabled: !!slug,
  });
}

export function useGetPage(slug: string) {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'page',
        'fields.slug': slug,
        limit: 1,
      });
      if (response.items.length === 0) {
        throw new Error('Page not found');
      }
      return transformPage(response.items[0]);
    },
    enabled: !!slug,
  });
}

export function useGetServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'service',
        order: 'fields.title',
      });
      return response.items.map(transformService);
    },
  });
}

export function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'category',
        order: 'fields.name',
      });
      return response.items.map(transformCategory);
    },
  });
}
```

### Phase 3: Component Updates

#### Step 9: Update Blog Page Component
Update `src/pages/Blog.tsx`:

```tsx
import { useGetBlogPosts } from '@/hooks/use-contentful';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

const Blog = () => {
  const { data: blogPosts, isLoading, error } = useGetBlogPosts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error loading blog posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.featuredImage && (
              <img 
                src={post.featuredImage.url} 
                alt={post.featuredImage.title} 
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{format(new Date(post.publishDate), 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <span>{post.author.name}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span key={category.slug} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {category.name}
                  </span>
                ))}
              </div>
              <Link 
                to={`/blog/${post.slug}`} 
                className="text-primary hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
```

#### Step 10: Create Blog Post Detail Component
Create `src/pages/BlogPost.tsx`:

```tsx
import { useParams, Link } from 'react-router-dom';
import { useGetBlogPost } from '@/hooks/use-contentful';
import { format } from 'date-fns';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useGetBlogPost(slug);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center">
        <p className="text-red-500 mb-4">Blog post not found or error loading content.</p>
        <Link to="/blog" className="text-primary hover:underline flex items-center justify-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.seoMetadata.title || post.title} | Enchanted Logic</title>
        <meta name="description" content={post.seoMetadata.description || ''} />
        {post.seoMetadata.keywords && (
          <meta name="keywords" content={post.seoMetadata.keywords.join(', ')} />
        )}
      </Helmet>
      
      <div className="container mx-auto py-8 max-w-4xl">
        <Link to="/blog" className="text-primary hover:underline flex items-center mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        {post.featuredImage && (
          <img 
            src={post.featuredImage.url} 
            alt={post.featuredImage.title} 
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center mb-6">
          {post.author.photo && (
            <img 
              src={post.author.photo.url} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(post.publishDate), 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((category) => (
            <span key={category.slug} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {category.name}
            </span>
          ))}
        </div>
        
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
        
        {post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
```

#### Step 11: Update Services Page Component
Update `src/pages/Services.tsx`:

```tsx
import { useGetServices } from '@/hooks/use-contentful';
import { Loader2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { data: services, isLoading, error } = useGetServices();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error loading services. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          // Dynamically get the icon component
          const IconComponent = LucideIcons[service.icon] || LucideIcons.HelpCircle;
          
          return (
            <div key={service.slug} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-3 text-center">{service.title}</h2>
              <div className="prose mb-4">
                {service.description}
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <LucideIcons.Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {service.price > 0 && (
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold">${service.price}</span>
                </div>
              )}
              <Button className="w-full">{service.callToAction}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
```

#### Step 12: Update Routes Configuration
Update `src/App.tsx` to include the new BlogPost component:

```tsx
import BlogPost from "./pages/BlogPost";

// ... existing imports

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* ... existing code */}
    <PageLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </PageLayout>
    {/* ... existing code */}
  </QueryClientProvider>
);
```

### Phase 4: Content Preview and Management

#### Step 13: Create Preview Mode (Optional)
Create a file `src/lib/contentful-preview.ts`:

```typescript
import { createClient } from 'contentful';

// Preview client for draft content
const contentfulPreviewClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
  host: 'preview.contentful.com',
});

export default contentfulPreviewClient;
```

#### Step 14: Create Preview Context
Create a file `src/contexts/preview-context.tsx`:

```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';

interface PreviewContextType {
  isPreviewMode: boolean;
  enablePreviewMode: () => void;
  disablePreviewMode: () => void;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const PreviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  useEffect(() => {
    // Check URL for preview parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === 'true') {
      setIsPreviewMode(true);
      // Store in session storage
      sessionStorage.setItem('contentful_preview', 'true');
    } else {
      // Check session storage
      const storedPreview = sessionStorage.getItem('contentful_preview');
      setIsPreviewMode(storedPreview === 'true');
    }
  }, []);

  const enablePreviewMode = () => {
    setIsPreviewMode(true);
    sessionStorage.setItem('contentful_preview', 'true');
  };

  const disablePreviewMode = () => {
    setIsPreviewMode(false);
    sessionStorage.removeItem('contentful_preview');
  };

  return (
    <PreviewContext.Provider value={{ isPreviewMode, enablePreviewMode, disablePreviewMode }}>
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = (): PreviewContextType => {
  const context = useContext(PreviewContext);
  if (context === undefined) {
    throw new Error('usePreview must be used within a PreviewProvider');
  }
  return context;
};
```

#### Step 15: Update Content Hooks for Preview
Update `src/hooks/use-contentful.ts` to support preview mode:

```typescript
import contentfulClient from '@/lib/contentful';
import contentfulPreviewClient from '@/lib/contentful-preview';
import { usePreview } from '@/contexts/preview-context';

// ... existing code

// Update hooks to use preview client when in preview mode
export function useGetBlogPosts() {
  const { isPreviewMode } = usePreview();
  const client = isPreviewMode ? contentfulPreviewClient : contentfulClient;
  
  return useQuery({
    queryKey: ['blogPosts', isPreviewMode],
    queryFn: async () => {
      const response = await client.getEntries({
        content_type: 'blogPost',
        order: '-fields.publishDate',
      });
      return response.items.map(transformBlogPost);
    },
  });
}

// Update other hooks similarly...
```

### Phase 5: Deployment and Testing

#### Step 16: Test Content Management
1. Create and publish content in Contentful
2. Verify content appears correctly on the website
3. Test content updates and publishing workflow

#### Step 17: Add Preview Banner (Optional)
Create a file `src/components/PreviewBanner.tsx`:

```tsx
import { usePreview } from '@/contexts/preview-context';
import { AlertCircle, X } from 'lucide-react';

const PreviewBanner = () => {
  const { isPreviewMode, disablePreviewMode } = usePreview();
  
  if (!isPreviewMode) return null;
  
  return (
    <div className="bg-yellow-500 text-white py-2 px-4 fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 mr-2" />
        <span>Preview Mode: You're viewing draft content</span>
      </div>
      <button 
        onClick={disablePreviewMode}
        className="p-1 hover:bg-yellow-600 rounded"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PreviewBanner;
```

#### Step 18: Add Preview Banner to Layout
Update `src/components/layout/grid/PageLayout.tsx`:

```tsx
import PreviewBanner from '@/components/PreviewBanner';

// ... existing code

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)] grid-rows-[auto_1fr_auto]">
        {/* ... existing layout code */}
      </div>
      <PreviewBanner />
    </>
  );
};
```

#### Step 19: Update App with Preview Provider
Update `src/App.tsx`:

```tsx
import { PreviewProvider } from './contexts/preview-context';

// ... existing imports

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PreviewProvider>
        <BrowserRouter>
          {/* ... existing code */}
        </BrowserRouter>
      </PreviewProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
```

## Benefits of This Approach

- **Separation of Concerns**: Content is managed separately from code
- **User-Friendly**: Non-technical users can update content
- **Flexible Content Modeling**: Structured content with relationships
- **Preview Capabilities**: Content can be previewed before publishing
- **Media Management**: Built-in asset handling
- **Scalability**: Can handle growing content needs
- **Performance**: Content delivery via CDN

## Next Steps After Implementation

1. **Train Content Editors**: Provide training on using Contentful
2. **Create Content Guidelines**: Document content structure and best practices
3. **Set Up Webhooks**: Trigger builds when content is published
4.
