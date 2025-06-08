import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

// Data fetching functions
export async function getArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    isExpertReviewed,
    "category": category->title,
    "categorySlug": category->slug.current
  }`;
  
  return await client.fetch(query);
}

export async function getArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    contentRaw,
    isExpertReviewed,
    "category": category->title,
    "categorySlug": category->slug.current,
    "expert": reviewedBy->{
      _id,
      name,
      slug,
      image,
      speciality
    }
  }`;
  
  return await client.fetch(query, { slug });
}

export async function getCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon
  }`;
  
  return await client.fetch(query);
}

export async function getCategoryBySlug(slug: string) {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    "articles": *[_type == "article" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      isExpertReviewed
    }
  }`;
  
  return await client.fetch(query, { slug });
}

export async function getSpecialists() {
  const query = `*[_type == "specialist"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    speciality,
    bio,
    crmv
  }`;
  
  return await client.fetch(query);
}

export async function getSpecialistBySlug(slug: string) {
  const query = `*[_type == "specialist" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    speciality,
    bio,
    biographyRaw,
    crmv,
    education,
    "articles": *[_type == "article" && reviewedBy._ref == ^._id] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  }`;
  
  return await client.fetch(query, { slug });
}

export async function getFeaturedContent() {
  const query = `{
    "featuredArticles": *[_type == "article"] | order(publishedAt desc)[0...6] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      isExpertReviewed,
      "category": category->title,
      "categorySlug": category->slug.current
    },
    "categories": *[_type == "category"] | order(title asc)[0...6] {
      _id,
      title,
      slug,
      description,
      icon,
      "articleCount": count(*[_type == "article" && references(^._id)])
    },
    "specialists": *[_type == "specialist"] | order(name asc)[0...4] {
      _id,
      name,
      slug,
      image,
      speciality
    }
  }`;
  
  return await client.fetch(query);
}

// Queries
export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  image
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  image
}`;

export const articlesByCategory = `*[_type == "article" && references($categoryId)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  categories[]->{_id, title, slug},
  expert->{_id, name, role, image},
  publishedAt,
  expertValidated
}`;

export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  content,
  categories[]->{_id, title, slug},
  expert->{_id, name, role, image, bio},
  publishedAt,
  expertValidated,
  "relatedArticles": *[_type == "article" && references(^.categories[]._id) && _id != ^._id][0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]->{_id, title, slug},
    publishedAt
  }
}`;

export const expertsQuery = `*[_type == "specialist"] | order(name asc) {
  _id,
  name,
  slug,
  role,
  image,
  bio
}`;

export const expertByIdQuery = `*[_type == "specialist" && _id == $id][0] {
  _id,
  name,
  slug,
  role,
  image,
  bio,
  "articles": *[_type == "article" && references(^._id)] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]->{_id, title, slug},
    publishedAt
  }
}`;

// Queries for the home page
export const featuredArticlesQuery = `*[_type == "article" && defined(mainImage)] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  categories[]->{_id, title, slug},
  expert->{_id, name, role},
  publishedAt,
  expertValidated
}`;

export const recentArticlesQuery = `*[_type == "article"] | order(publishedAt desc)[0...9] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  categories[]->{_id, title, slug},
  expert->{_id, name, role},
  publishedAt,
  expertValidated
}`; 