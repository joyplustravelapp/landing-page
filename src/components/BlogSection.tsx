import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import travelVisionImg from "@/assets/travel-vision.jpg";

const categories = [
  { name: "Solo Tips", count: 12 },
  { name: "Destinations", count: 8 },
  { name: "Safety", count: 6 },
  { name: "Budget Travel", count: 10 },
  { name: "Culture", count: 5 },
  { name: "Digital Nomad", count: 7 },
];

const posts = [
  {
    slug: "safety-tips-solo-travelers",
    title: "10 Essential Safety Tips for Solo Female Travelers",
    category: "Safety",
    excerpt: "From choosing the right accommodation to staying connected, here's everything you need to know.",
    date: "Feb 5, 2026",
  },
  {
    slug: "bangkok-budget-guide",
    title: "Bangkok on $30/Day: The Ultimate Budget Guide",
    category: "Budget Travel",
    excerpt: "Street food, temples, and tuk-tuks — experience the best of Bangkok without breaking the bank.",
    date: "Jan 28, 2026",
  },
  {
    slug: "making-friends-solo-travel",
    title: "How to Make Friends While Traveling Solo",
    category: "Solo Tips",
    excerpt: "Loneliness doesn't have to be part of solo travel. Here are proven ways to connect with others.",
    date: "Jan 20, 2026",
  },
];

const BlogSection = () => {
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
              key={cat.name}
              className="btn-press px-4 py-2 rounded-full glass text-sm font-medium text-foreground hover:shadow-glow hover:text-primary transition-all duration-300"
            >
              {cat.name} <span className="text-muted-foreground ml-1">({cat.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block rounded-2xl glass overflow-hidden hover:shadow-glow transition-all duration-500 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={travelVisionImg}
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
      </div>
    </section>
  );
};

export default BlogSection;
