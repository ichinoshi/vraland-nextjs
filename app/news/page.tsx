"use client";

import HeroSection from "@/components/sections/news/HeroSection";
import FeaturedNewsSection from "@/components/sections/news/FeaturedNewsSection";
import RecentNewsSection from "@/components/sections/news/RecentNewsSection";
import NewsletterSection from "@/components/sections/news/NewsletterSection";

const newsData = {
  hero: {
    title: "Latest News",
    description:
      "Get the latest updates on our developments, company milestones, and industry insights from Oriental Mindoro's premier real estate developer.",
    image: "/images/news/hero-bg.jpg",
  },
  featuredNews: {
    id: "lorem-ipsum-featured",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
    excerpt:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/images/placeholder/placeholder.jpg",
    date: "2024-12-15",
    author: "Lorem Ipsum Team",
    category: "Lorem Ipsum",
  },
  newsCategories: [
    {
      icon: "BuildingOfficeIcon",
      title: "Development Updates",
      description: "Latest progress on our ongoing projects",
    },
    {
      icon: "TrophyIcon",
      title: "Awards & Recognition",
      description: "Celebrating our achievements and milestones",
    },
    {
      icon: "MegaphoneIcon",
      title: "Company News",
      description: "Corporate announcements and updates",
    },
    {
      icon: "NewspaperIcon",
      title: "Industry Insights",
      description: "Market trends and real estate insights",
    },
  ],
  recentNews: [
    {
      id: "lorem-ipsum-1",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/placeholder/placeholder.jpg",
      date: "2024-12-10",
      author: "Lorem Team",
      category: "Lorem Ipsum",
      readTime: "3 min read",
    },
    {
      id: "lorem-ipsum-2",
      title: "Sed Do Eiusmod Tempor Incididunt Ut Labore",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/placeholder/placeholder.jpg",
      date: "2024-12-05",
      author: "Ipsum Team",
      category: "Dolor Sit",
      readTime: "4 min read",
    },
    {
      id: "lorem-ipsum-3",
      title: "Duis Aute Irure Dolor In Reprehenderit",
      excerpt:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/placeholder/placeholder.jpg",
      date: "2024-11-28",
      author: "Amet Team",
      category: "Consectetur",
      readTime: "5 min read",
    },
    {
      id: "lorem-ipsum-4",
      title: "Sed Ut Perspiciatis Unde Omnis Iste Natus",
      excerpt:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      image: "/images/placeholder/placeholder.jpg",
      date: "2024-11-20",
      author: "Perspiciatis Team",
      category: "Voluptatem",
      readTime: "6 min read",
    },
    {
      id: "lorem-ipsum-5",
      title: "At Vero Eos Et Accusamus Et Iusto Odio",
      excerpt:
        "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio.",
      image: "/images/placeholder/placeholder.jpg",
      date: "2024-11-15",
      author: "Vero Team",
      category: "Accusamus",
      readTime: "3 min read",
    },
    {
      id: "lorem-ipsum-6",
      title: "Temporibus Autem Quibusdam Et Aut Officiis",
      excerpt:
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.",
      image: "/images/placeholder/placeholder.jpg",
      date: "2024-11-10",
      author: "Temporibus Team",
      category: "Officiis",
      readTime: "4 min read",
    },
  ],
};

export default function NewsPage() {
  return (
    <div className="bg-background-primary">
      <HeroSection
        title={newsData.hero.title}
        description={newsData.hero.description}
        image={newsData.hero.image}
      />

      <FeaturedNewsSection
        featuredNews={{
          ...newsData.featuredNews,
          readTime: "5 min read",
        }}
      />

      <RecentNewsSection
        recentNews={newsData.recentNews}
        newsCategories={newsData.newsCategories.map((cat) => cat.title)}
      />

      <NewsletterSection />
    </div>
  );
}
