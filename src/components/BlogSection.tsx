import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import blogSafetyImg from "@/assets/blog-safety-tips.jpg";
import blogBangkokImg from "@/assets/blog-bangkok-budget.jpg";
import blogFriendsImg from "@/assets/blog-making-friends.jpg";
import blogBaliImg from "@/assets/blog-coworking-bali.jpg";
import blogLisbonImg from "@/assets/blog-lisbon-gems.jpg";
import blogJapanImg from "@/assets/blog-japan-culture.jpg";

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
];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((post) => post.category === activeCategory);

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
              onClick={() => setActiveCategory(cat)}
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
          {filteredPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
        </div>

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
