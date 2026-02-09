import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import travelVisionImg from "@/assets/travel-vision.jpg";

const blogContent: Record<string, { title: string; category: string; date: string; content: string[] }> = {
  "safety-tips-solo-travelers": {
    title: "10 Essential Safety Tips for Solo Female Travelers",
    category: "Safety",
    date: "Feb 5, 2026",
    content: [
      "Solo travel is one of the most rewarding experiences you can have, but safety should always be a priority. Whether you're backpacking through Southeast Asia or exploring European cities, these tips will help you stay safe and confident on the road.",
      "1. Share your itinerary with someone you trust. Always let a friend or family member know where you're going and when you expect to arrive.",
      "2. Research your destination thoroughly before arrival. Understanding local customs, safe neighborhoods, and transportation options makes a huge difference.",
      "3. Keep digital copies of important documents. Store photos of your passport, travel insurance, and emergency contacts in a secure cloud service.",
      "4. Trust your instincts. If something feels off, remove yourself from the situation. Your gut feeling is usually right.",
      "5. Stay connected. With Joy Plus, you can always find other travelers nearby and access emergency contacts wherever you are.",
      "6. Use well-reviewed accommodations. Check recent reviews and choose places with good security measures.",
      "7. Keep valuables secure. Use a money belt or hidden pouch for your passport and cash.",
      "8. Learn basic phrases in the local language. Knowing how to ask for help or directions can be invaluable.",
      "9. Avoid walking alone late at night in unfamiliar areas. Use ride-sharing services or travel with fellow travelers you've met.",
      "10. Get travel insurance. It's a small investment that can save you thousands if something goes wrong.",
    ],
  },
  "bangkok-budget-guide": {
    title: "Bangkok on $30/Day: The Ultimate Budget Guide",
    category: "Budget Travel",
    date: "Jan 28, 2026",
    content: [
      "Bangkok is one of the world's most exciting cities, and the best part? You can experience it all on a shoestring budget. Here's how to make the most of Thailand's capital without breaking the bank.",
      "Accommodation ($8-12/night): Bangkok has some of the best hostels in the world. Areas like Khao San Road and Silom offer dorm beds for as low as $8. Book through Joy Plus to find vetted recommendations from fellow travelers.",
      "Food ($5-8/day): Street food is king in Bangkok. A plate of pad thai costs around $1.50, and a bowl of boat noodles is even cheaper. Head to Yaowarat (Chinatown) for the best night food scene.",
      "Transportation ($3-5/day): The BTS Skytrain and MRT are affordable and efficient. For shorter distances, grab a motorbike taxi. Split tuk-tuk rides with other travelers you meet on Joy Plus.",
      "Activities ($5-10/day): Many of Bangkok's best experiences are free or very cheap. Visit the stunning Wat Arun at sunset, explore the weekend markets at Chatuchak, or take a free walking tour.",
      "Pro tip: Use Joy Plus to find travel buddies and split costs on day trips, cooking classes, and boat tours. You'll save money AND make incredible memories.",
    ],
  },
  "making-friends-solo-travel": {
    title: "How to Make Friends While Traveling Solo",
    category: "Solo Tips",
    date: "Jan 20, 2026",
    content: [
      "One of the biggest fears about solo travel is loneliness. But here's the truth: solo travelers often make more friends than those traveling in groups. Here's how to connect with amazing people on the road.",
      "Stay in social accommodations. Hostels with common areas, kitchens, and organized events are friendship goldmines. Look for places that host group dinners or pub crawls.",
      "Use Joy Plus to find nearby travelers. Our app shows you other solo travelers in your area right now. Send a message, suggest a coffee, and you might find your next travel buddy.",
      "Join group activities. Cooking classes, walking tours, and diving courses are perfect for meeting like-minded people. You already have a shared interest, making conversation easy.",
      "Be open and approachable. Sit at communal tables, say yes to invitations, and don't be afraid to start conversations. Most solo travelers are looking to connect, just like you.",
      "Learn to be comfortable alone first. Paradoxically, the more comfortable you are with solo time, the more natural and authentic your connections become.",
      "Keep in touch. The friendships you make while traveling can last a lifetime. Use Joy Plus to stay connected with your travel friends even after you've moved on to different destinations.",
    ],
  },
  "best-coworking-bali": {
    title: "Top 5 Coworking Spaces in Bali for Digital Nomads",
    category: "Digital Nomad",
    date: "Jan 15, 2026",
    content: [
      "Bali has become the digital nomad capital of the world, and for good reason. Amazing weather, affordable living, and some of the best coworking spaces you'll find anywhere.",
      "1. Dojo Bali (Canggu): The OG of Bali coworking. Fast WiFi, pool access, and an incredible community. Monthly passes start around $200.",
      "2. Outpost (Canggu & Ubud): Premium spaces with standing desks, phone booths, and networking events. Their Ubud location offers stunning rice paddy views.",
      "3. Hubud (Ubud): Set in a beautiful bamboo building, Hubud combines productivity with Balinese charm. Regular workshops and skill-sharing sessions.",
      "4. BWork (Seminyak): Modern, air-conditioned space perfect for those who need a more corporate-style environment. Great coffee shop attached.",
      "5. Tribal (Canggu): Budget-friendly option with a lively atmosphere. Popular with younger digital nomads and perfect for networking.",
      "Pro tip: Use Joy Plus to connect with other digital nomads at these spaces. Many users share reviews and organize coworking meetups through the app.",
    ],
  },
  "hidden-gems-lisbon": {
    title: "Hidden Gems in Lisbon: Beyond the Tourist Trail",
    category: "Destinations",
    date: "Jan 10, 2026",
    content: [
      "Lisbon is one of Europe's most charming capitals, but the best experiences lie beyond the usual tourist spots. Here are our favorite hidden gems.",
      "LX Factory: This creative hub in a former industrial complex is packed with independent shops, galleries, and some of the best brunch spots in the city. Visit on a Sunday for the weekly book market.",
      "Miradouro da Graça: While most tourists flock to Miradouro da Senhora do Monte, this nearby viewpoint offers equally stunning views with a fraction of the crowds.",
      "Mouraria: This historic neighborhood is the birthplace of fado music. Wander the narrow streets, listen to music spilling from tascas, and discover street art at every turn.",
      "Mercado da Ribeira (Time Out Market): Yes, it's well-known, but arrive early on a weekday morning to experience the original fresh market section that most tourists miss.",
      "Costa da Caparica: Just 30 minutes from the city center, this stretch of beaches offers clean Atlantic waters and incredible seafood restaurants. Take the transpraia mini-train to find your perfect quiet spot.",
      "Connect with local travelers on Joy Plus to discover even more hidden spots that only locals know about.",
    ],
  },
  "cultural-etiquette-japan": {
    title: "Cultural Etiquette in Japan: What Every Traveler Should Know",
    category: "Culture",
    date: "Jan 5, 2026",
    content: [
      "Japan is a country where tradition and modernity coexist beautifully. Understanding cultural etiquette will enrich your travel experience and show respect to your hosts.",
      "Shoes off: Remove your shoes when entering homes, many restaurants, and some temples. You'll usually find slippers provided at the entrance.",
      "Bowing: A slight bow is the standard greeting. The deeper the bow, the more respect you're showing. As a tourist, a small nod is perfectly acceptable.",
      "Chopstick etiquette: Never stick chopsticks upright in rice (this resembles a funeral ritual). Don't pass food directly from chopstick to chopstick either.",
      "Quiet on public transport: Talking on the phone or speaking loudly on trains and buses is considered very rude. Keep conversations to a whisper.",
      "Tipping: Don't tip in Japan — it can actually be seen as insulting. Excellent service is the standard, not the exception.",
      "Onsen (hot spring) etiquette: Wash thoroughly before entering the bath. Tattoos may be prohibited in some traditional onsen, so check beforehand.",
      "Use Joy Plus to connect with experienced Japan travelers who can share more insider tips and cultural insights before your trip.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Article not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-28 pb-20">
        {/* Hero */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img src={travelVisionImg} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl -mt-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl glass p-8 md:p-12"
          >
            <Link
              to="/"
              onClick={() => {
                // Delay scroll to ensure navigation completes
                setTimeout(() => {
                  const blogSection = document.getElementById('blog');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="btn-press inline-flex items-center gap-1.5 text-primary text-sm font-medium mb-6 hover:gap-2.5 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-primary">{post.category}</span>
              <span className="text-xs text-muted-foreground">· {post.date}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              {post.title}
            </h1>

            <div className="space-y-4">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
