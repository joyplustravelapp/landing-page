import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useArticleViewCounts } from "@/hooks/useArticleViews";
import blogSafetyImg from "@/assets/blog-safety-tips.jpg";
import blogBangkokImg from "@/assets/blog-bangkok-budget.jpg";
import blogFriendsImg from "@/assets/blog-making-friends.jpg";
import blogBaliImg from "@/assets/blog-coworking-bali.jpg";
import blogLisbonImg from "@/assets/blog-lisbon-gems.jpg";
import blogJapanImg from "@/assets/blog-japan-culture.jpg";
import blogPackingImg from "@/assets/blog-packing-essentials.jpg";
import blogFirstTripImg from "@/assets/blog-first-solo-trip.jpg";
import blogColombiaImg from "@/assets/blog-colombia.jpg";
import blogMoroccoImg from "@/assets/blog-morocco.jpg";
import blogNewZealandImg from "@/assets/blog-new-zealand.jpg";
import blogScamsImg from "@/assets/blog-travel-scams.jpg";
import blogNightSafetyImg from "@/assets/blog-night-safety.jpg";
import blogEuropeRailImg from "@/assets/blog-europe-rail.jpg";
import blogFreeTokyoImg from "@/assets/blog-free-tokyo.jpg";
import blogIndiaFoodImg from "@/assets/blog-india-food.jpg";
import blogEthicalTourismImg from "@/assets/blog-ethical-tourism.jpg";
import blogAsiaFestivalsImg from "@/assets/blog-asia-festivals.jpg";
import blogNomadVisaImg from "@/assets/blog-nomad-visa.jpg";
import blogProductivityImg from "@/assets/blog-productivity-travel.jpg";

const categories = ["All", "Solo Tips", "Destinations", "Safety", "Budget Travel", "Culture", "Digital Nomad"];

const posts = [
  {
    slug: "safety-tips-solo-travelers",
    title: "10 Essential Safety Tips for Solo Female Travelers",
    category: "Safety",
    excerpt: "From choosing the right accommodation to staying connected, here's everything you need to know.",
    date: "Feb 5, 2026",
    image: blogSafetyImg,
  },
  {
    slug: "bangkok-budget-guide",
    title: "Bangkok on $30/Day: The Ultimate Budget Guide",
    category: "Budget Travel",
    excerpt: "Street food, temples, and tuk-tuks — experience the best of Bangkok without breaking the bank.",
    date: "Jan 28, 2026",
    image: blogBangkokImg,
  },
  {
    slug: "making-friends-solo-travel",
    title: "How to Make Friends While Traveling Solo",
    category: "Solo Tips",
    excerpt: "Loneliness doesn't have to be part of solo travel. Here are proven ways to connect with others.",
    date: "Jan 20, 2026",
    image: blogFriendsImg,
  },
  {
    slug: "best-coworking-bali",
    title: "Top 5 Coworking Spaces in Bali for Digital Nomads",
    category: "Digital Nomad",
    excerpt: "Fast WiFi, great coffee, and ocean views — the best spots to work remotely in Bali.",
    date: "Jan 15, 2026",
    image: blogBaliImg,
  },
  {
    slug: "hidden-gems-lisbon",
    title: "Hidden Gems in Lisbon: Beyond the Tourist Trail",
    category: "Destinations",
    excerpt: "Skip the crowds and discover Lisbon's best-kept secrets, from local tascas to secret viewpoints.",
    date: "Jan 10, 2026",
    image: blogLisbonImg,
  },
  {
    slug: "cultural-etiquette-japan",
    title: "Cultural Etiquette in Japan: What Every Traveler Should Know",
    category: "Culture",
    excerpt: "Avoid common faux pas and show respect with this essential guide to Japanese customs.",
    date: "Jan 5, 2026",
    image: blogJapanImg,
  },
  {
    slug: "solo-travel-packing-essentials",
    title: "Packing Light: The Ultimate Solo Travel Packing List",
    category: "Solo Tips",
    excerpt: "Everything you need and nothing you don't — master the art of minimalist packing for any trip.",
    date: "Dec 30, 2025",
    image: blogPackingImg,
  },
  {
    slug: "first-solo-trip-guide",
    title: "Your First Solo Trip: A Step-by-Step Guide",
    category: "Solo Tips",
    excerpt: "Nervous about your first solo adventure? This beginner-friendly guide covers every step.",
    date: "Dec 22, 2025",
    image: blogFirstTripImg,
  },
  {
    slug: "colombia-off-beaten-path",
    title: "Colombia Off the Beaten Path: Beyond Bogotá",
    category: "Destinations",
    excerpt: "Colorful streets, lush jungles, and Caribbean coastline — discover Colombia's hidden treasures.",
    date: "Dec 18, 2025",
    image: blogColombiaImg,
  },
  {
    slug: "morocco-desert-adventure",
    title: "A Week in Morocco: From Marrakech to the Sahara",
    category: "Destinations",
    excerpt: "Spice markets, desert sunsets, and ancient medinas — your ultimate Morocco itinerary.",
    date: "Dec 12, 2025",
    image: blogMoroccoImg,
  },
  {
    slug: "new-zealand-road-trip",
    title: "New Zealand Road Trip: South Island in 10 Days",
    category: "Destinations",
    excerpt: "Snow-capped peaks, turquoise lakes, and epic drives — plan the perfect South Island road trip.",
    date: "Dec 5, 2025",
    image: blogNewZealandImg,
  },
  {
    slug: "travel-scams-avoid",
    title: "Common Travel Scams and How to Avoid Them",
    category: "Safety",
    excerpt: "From fake taxis to overpriced tours — learn to spot and dodge the most common scams worldwide.",
    date: "Nov 28, 2025",
    image: blogScamsImg,
  },
  {
    slug: "solo-night-safety",
    title: "Staying Safe at Night: A Solo Traveler's Guide",
    category: "Safety",
    excerpt: "Smart strategies for navigating unfamiliar cities after dark with confidence.",
    date: "Nov 20, 2025",
    image: blogNightSafetyImg,
  },
  {
    slug: "europe-rail-budget",
    title: "Europe by Rail: Budget Train Travel Guide",
    category: "Budget Travel",
    excerpt: "Scenic routes, rail passes, and money-saving tips for exploring Europe by train.",
    date: "Nov 15, 2025",
    image: blogEuropeRailImg,
  },
  {
    slug: "free-things-tokyo",
    title: "15 Free Things to Do in Tokyo",
    category: "Budget Travel",
    excerpt: "Temples, gardens, and vibrant neighborhoods — experience Tokyo's best without spending a yen.",
    date: "Nov 8, 2025",
    image: blogFreeTokyoImg,
  },
  {
    slug: "india-food-guide",
    title: "A Food Lover's Guide to India's Street Cuisine",
    category: "Culture",
    excerpt: "From chaat in Delhi to dosas in Chennai — a delicious journey through India's street food scene.",
    date: "Nov 1, 2025",
    image: blogIndiaFoodImg,
  },
  {
    slug: "ethical-tourism-indigenous",
    title: "Ethical Tourism: Respecting Indigenous Cultures",
    category: "Culture",
    excerpt: "How to travel responsibly and support local communities without exploiting their traditions.",
    date: "Oct 25, 2025",
    image: blogEthicalTourismImg,
  },
  {
    slug: "southeast-asia-festivals",
    title: "Southeast Asia's Must-See Festivals in 2026",
    category: "Culture",
    excerpt: "Lantern festivals, water fights, and sacred ceremonies — the most unforgettable celebrations.",
    date: "Oct 18, 2025",
    image: blogAsiaFestivalsImg,
  },
  {
    slug: "digital-nomad-visa-guide",
    title: "Digital Nomad Visas: Where to Apply in 2026",
    category: "Digital Nomad",
    excerpt: "Over 50 countries now offer remote work visas. Here are the best options for digital nomads.",
    date: "Oct 10, 2025",
    image: blogNomadVisaImg,
  },
  {
    slug: "productivity-while-traveling",
    title: "Staying Productive While Traveling: Tools & Tips",
    category: "Digital Nomad",
    excerpt: "Balance work and adventure with these proven productivity strategies for location-independent workers.",
    date: "Oct 3, 2025",
    image: blogProductivityImg,
  },
];

const INITIAL_COUNT = 6;

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const viewCounts = useArticleViewCounts();

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  const visiblePosts = showAll ? filteredPosts : filteredPosts.slice(0, INITIAL_COUNT);
  const hasMore = filteredPosts.length > INITIAL_COUNT;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <section id="blog" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Blog</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Travel stories & guides
          </h2>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`btn-press px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-glow text-primary-foreground shadow-glow"
                  : "glass text-foreground hover:shadow-glow hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visiblePosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                layout
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block rounded-2xl glass overflow-hidden hover:shadow-glow transition-all duration-500 group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground">· {post.date}</span>
                      {viewCounts[post.slug] > 0 && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                          <Eye className="w-3 h-3" /> {viewCounts[post.slug]}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                      Read more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground hover:shadow-glow hover:text-primary text-sm font-medium transition-all duration-300"
            >
              {showAll ? (
                <>Show less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>See more ({filteredPosts.length - INITIAL_COUNT} more) <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </motion.div>
        )}

        {filteredPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground text-lg py-12"
          >
            No articles in this category yet. Stay tuned!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
