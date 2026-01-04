const blogPosts = [
  {
    title: 'How Tech Rentals Benefit Film Shoots and Ad Agencies',
    excerpt: 'Film shoots and ad agencies depend on perfect timing and execution. When your rented monitor',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80',
    link: '#',
  },
  {
    title: 'Post-IPO, Pre-Scale: Why High-Growth Companies Rent Workstations Instead of Buying',
    excerpt: 'After getting funding, high-growth companies have to make a very important choice about where to',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    link: '#',
  },
  {
    title: "2025's Remote Work Trends and Why Tech Rentals Are in High Demand Again",
    excerpt: 'Tomorrow is the first day of work for your new remote hire. They are 500',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
    link: '#',
  },
  {
    title: 'Short-Term Tech for Students: Rent Laptops for Assignments',
    excerpt: "In today's digital world, laptop rental businesses have changed the way students meet their academic",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
    link: '#',
  },
  {
    title: 'iPad vs Android Tablet Rentals: Which One to Get for Businesses & Events?',
    excerpt: 'Tablets are a cooler, more intelligent solution than big, clunky desktop PCs. One can easily',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
    link: '#',
  },
  {
    title: 'Secure Storage Rentals: SSD, NAS & Backup Solutions for Field Teams',
    excerpt: 'As per Storeorganise, the rental storage market will grow at a rate of 5.91 %.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Latest <span className="text-coral">Blogs</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Updated blogs, get more knowledge
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-secondary mb-3 line-clamp-2 group-hover:text-coral transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="text-coral font-semibold text-sm hover:underline"
                >
                  Read More »
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
