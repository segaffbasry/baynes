/* Every word on the page, taken from baynes.co.uk on 2026-10-03: the homepage plus Our Story, About Us, Products,
   Shop Online, Bayne's App and Charitable Trust, and the "Our Purpose" panel on careers.baynes.co.uk. Kept verbatim
   apart from the standing demo rule of no em or en dashes (rewritten as commas or "to"). Photos and films are
   Bayne's own; scripts/media.sh lists where each one came from. */

const SITE = "https://baynes.co.uk";
export const live = (path: string) => `${SITE}${path}`;

export const nav = [
  { label: "Our Story", href: live("/our-story/") },
  { label: "About Us", href: live("/about-us/") },
  { label: "Products", href: live("/our-products/") },
  { label: "Allergen & Nutrition", href: live("/allergen-nutrition/") },
  { label: "Shops", href: live("/our-shops/") },
  { label: "Shop Online", href: live("/shop-online/") },
  { label: "Bayne's App", href: live("/baynes-mobile-app/") },
  { label: "Careers", href: "https://careers.baynes.co.uk/" },
  { label: "Charitable Trust", href: live("/charitable-trust/") },
  { label: "Contact", href: live("/contact/") },
];

// Shown in the floating header; the rest live in the menu.
export const headerNav = ["Our Story", "Products", "Shops", "Shop Online", "Bayne's App"];

export const hero = {
  welcome: "Welcome to Bayne’s the Family Bakers.",
  est: "Est. 1954.",
  tagline: "Great tasting Scottish baking",
  finder: { label: "Find your nearest shop", placeholder: "Type Your Postcode Here", cta: "Find now" },
};

// Our Story, intro line, then About Us.
export const intro = {
  kicker: "A third generation family bakery, with its roots in Lochore, Fife.",
  statement: "We believe in using traditional baking methods and processes where we can, focusing on product freshness and quality of ingredients.",
  follow: "We are focused on the long term, by investing in our people, our bakery and our shops and building close relationships with communities in which we serve.",
  facts: [
    { value: "1954", text: "We have been making our morning roll to the same slow-fermented method since the bakery opened in 1954." },
    { value: "71", text: "Growing the company from 2 shops to 71 today." },
    { value: "70", text: "Proudly celebrating 70 years of bringing fresh, quality baking to communities across Scotland." },
  ],
};

export const signature = {
  label: "The Bayne’s Roll",
  title: "Our signature product is our morning roll",
  text: "Our signature product is our morning roll, known to many customers simply as the Bayne’s Roll. We have been making our morning roll to the same slow-fermented method since the bakery opened in 1954.",
  cta: { label: "About us", href: live("/about-us/") },
};

export type Product = { title: string; text: string; image: string; href: string };

export const products = {
  title: "Our Products, Fresh Everyday",
  text: "We believe in using traditional baking methods and processes, focusing on product freshness and quality of ingredients.",
  marquee: "Fresh Everyday",
  cta: { label: "Show All", href: live("/our-products/") },
  allergens: { label: "Allergen & Nutrition", href: live("/allergen-nutrition/") },
  items: [
    { title: "Rolls & Breads", image: "rollsbread", text: "We are proud to offer a wide range of freshly baked rolls and breads made from long standing recipes incorporating modern bakery techniques and processes." },
    { title: "Savouries", image: "savouries", text: "Produced by our very own butchers, our tasty savouries are made from quality sourced ingredients and are baked regularly throughout each day." },
    { title: "Cakes", image: "cakes", text: "An eye-catching and ever so indulgent range of hand-decorated cakes await you in our Bayne’s shops." },
    { title: "Fresh Cream Cakes", image: "fresh-cream-cakes", text: "Our cream cakes are prepared daily and generously filled with freshly whipped cream." },
    { title: "Doughnuts", image: "doughnuts", text: "Ranging from classic favourites to modern styles, the perfect range of doughnuts is available in our shops." },
    { title: "Tea Breads", image: "teabreads", text: "Freshly baked every day our tea bread range comes in a variety of styles." },
    { title: "Filled Rolls", image: "filled-rolls", text: "Prepared daily, our generously filled rolls come in a variety of choice and are made on our own freshly baked products." },
    { title: "Hot Filled Rolls", image: "hot-filled-rolls", text: "The perfect start of the day comes from a satisfying variety of breakfast rolls prepared by our experienced shop colleagues." },
    { title: "Drinks and Soups", image: "drinkssoups", text: "We offer a wide variety of hot and cold drinks and soups to complement our Bayne’s product range." },
  ].map((p) => ({ ...p, image: `/media/products/${p.image}.webp`, href: live("/our-products/") })) as Product[],
};

// Homepage "Shop online with Bayne's" block.
export const shopOnline = {
  title: "Shop online with Bayne’s",
  text: "We have a range of Click & Collect products available online for the festive season and beyond and for that special occasion we offer a variety of hand-crafted celebration cakes made to order by our skilled confectionary team.",
  cards: [
    {
      label: "Click & Collect",
      title: "Celebration Cakes",
      text: "For that special occasion we offer hand‑crafted celebration cakes made to order by our skilled confectionery team. Our variety of classic sponge cake with soft fondant icing or layered indulgent chocolate cake can be personalised for your loved one's special day!",
      cta: "Buy Now",
      href: live("/shop-online/order/celebration-cakes/"),
      image: "/media/products/cakes.webp",
    },
    {
      label: "Click & Collect",
      title: "Products",
      text: "Click & collect some of your favourites from Bayne's. Choose from a variety of made-to-order products like Steak Pies, Apple Flans and Sponge Cakes. Place your order and choose a shop near you for collection on your preferred date.",
      cta: "Buy Now",
      href: live("/shop-online/product-category/click-collect/"),
      image: "/media/products/steak-pie.webp",
    },
  ],
};

// Our Story page: the bakery paragraph and the timeline.
export const bakery = {
  word: "Lochore",
  text: "Our main bakery is still in Lochore, just round the corner from the original site. All the products are made here, before being delivered to our shops across central Scotland.",
};

export type Chapter = { year: string; text: string[]; image?: string; alt?: string };

export const story = {
  label: "The Story of Bayne’s",
  title: "A third generation family bakery",
  cta: { label: "Our Story", href: live("/our-story/") },
  chapters: [
    {
      year: "1908",
      text: [
        "Our story begins in 1908, with the upbringing of a young boy called John Bayne, living on a small farm near Kinross.",
        "Times were tough, and he and his three siblings were expected to work before and after school, often being late for classes.",
      ],
      image: "/media/history-1908.webp",
      alt: "John Bayne as a young boy",
    },
    {
      year: "1921",
      text: [
        "As time went on the coal industry developed, and there was an opportunity to supply good quality meat to the local mining community. So, in 1921, John and his brother Bill started selling beef in the Lochore area, and soon after they set up their first butcher shop in Glencraig.",
        "John worked hard and was always striving to do better, and he spotted an opportunity to buy the nearby bakery to make steak pies for the miners.",
      ],
      image: "/media/history-1921.webp",
      alt: "The Lochore butcher shop, circa 1920",
    },
    {
      year: "1964",
      text: [
        "He went on to build a large business, which included 8 butcher shops and 20 mobile butcher vans. Sadly John’s life was cut short due to ill health.",
        "His son, Stanley, took over the company in 1964, following in his father’s footsteps. Stanley realised that butcher shops were under pressure from supermarkets, so he put his efforts into expanding the bakery side of the business, growing the company from 2 shops to 71 today.",
      ],
      image: "/media/history-1964.webp",
      alt: "John Bayne and Stanley Bayne, 1964",
    },
    {
      year: "2020's and beyond",
      text: [
        "Much may have changed since John Bayne Snr started out, but the customer is always at the heart of what we do.",
        "The bakery is now run by Stanley and his son John, and we are pleased to say that there is a fourth generation of Bayne’s waiting in the wings to grow our business into the future.",
      ],
      image: "/media/stanley-john.webp",
      alt: "Stanley Bayne and John Bayne in a Bayne’s shop",
    },
  ] as Chapter[],
};

export const seventy = {
  title: "Proudly celebrating 70 years",
  text: [
    "Now, in 2025, we’re proudly celebrating 70 years of bringing fresh, quality baking to communities across Scotland. From our very first shop in Lochore to 71 locations today, one thing has always stayed the same: our commitment to putting customers at the heart of everything we do.",
    "With plans to open new shops each year, the next chapter in our journey promises to be just as exciting, and just as full of great tasting Scottish baking.",
  ],
};

// The 2024 film's own end card reads "The customer is at the heart of everything we do".
export const film = {
  title: "The customer is at the heart of everything we do",
  caption: "Bayne’s the Family Bakers, Striving to be the Nation’s Favourite Baker 2024",
  src: "/media/film.mp4",
  poster: "/media/film-poster.jpg",
};

export const finder = {
  title: "Find Your Nearest Shop",
  placeholder: "Type Your Postcode Here",
  hint: "Search by postcode, town or street",
  empty: "No shops found. Try another postcode or town.",
  cta: { label: "Shop Directory", href: live("/our-shops/") },
  directions: "Directions",
};

export const app = {
  title: "Our tasty new app with loyalty rewards baked in",
  cta: { label: "Download the app", href: "https://app.baynes.co.uk/" },
  lead: "Enjoy more with the Baynes App",
  text: "Make every visit to Baynes even more rewarding. With the Baynes app, you can collect stamps, redeem delicious freebies, and skip the queue with Click & Collect. Order ahead through the app and pick up from selected shops.",
  stamps: "Collect 6 stamps and receive a FREE hot drink",
  stampsNote: "Terms and conditions apply.",
  spend: { title: "Spend & Savor:", text: "Spend over £3 and collect a stamp. Hit 6 stamps and treat yourself to a free product from our reward list:" },
  rewards: ["Pork Sausage Roll", "Beef Sausage Roll", "Iced Doughring (White or Pink)", "Yum Yum", "Empire Biscuit", "Custard Fudge Doughnut", "French Cake"],
  share: { title: "Plus, sharing is sweet:", text: "Refer a friend and you’ll both unlock a little treat, because good taste deserves good company." },
};

// careers.baynes.co.uk "Our Purpose" panel, About Us values.
export const people = {
  label: "Our Purpose",
  purpose: ["Giving ", "moments of joy", " to our customers, by advancing great tasting, natural baking, while making a positive impact on our families and communities."],
  valuesTitle: "Our values and the way we work",
  values: [
    { title: "Customer Focus", text: "Customers are at the heart of our business and we aim to offer our customers the best possible products and service." },
    { title: "Respect", text: "We value everyone’s contribution and believe that you should be treated as an individual, and we all act with integrity in everything we do." },
    { title: "Continuous Improvement", text: "We aim to take advantage of opportunities and by acting quickly and working together, we all will help Bayne’s to improve and grow." },
    { title: "Sustainability", text: "We make decisions for the long-term sustainability of the business, for our customers, employees and the community." },
  ],
  cta: { label: "Careers", href: "https://careers.baynes.co.uk/" },
  photos: [
    { src: "/media/people-1.webp", alt: "Bayne’s shop colleagues behind the counter" },
    { src: "/media/people-3.webp", alt: "A Bayne’s baker in the Lochore bakery" },
    { src: "/media/people-4.webp", alt: "Bayne’s butchers at the bakery" },
    { src: "/media/people-5.webp", alt: "Bayne’s bakers with trays of rolls" },
    { src: "/media/people-6.webp", alt: "A Bayne’s driver with a tray of morning rolls" },
  ],
};

export const trust = {
  title: "Bayne’s Charitable Trust",
  text: "The Bayne’s charitable trust was set up in 2020.",
  lead: "We would like to help charities that benefit our local communities in the following areas:",
  areas: ["relief of poverty", "advancement of education", "advancement of health", "community development", "disabilities", "hardship"],
  cta: { label: "Email the charity team", href: live("/charitable-trust/") },
};

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/baynesfamilybakers/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/baynesfamilybakers/", icon: "instagram" },
] as const;

export const delivery = [
  { name: "Just Eat", href: "https://www.just-eat.co.uk/takeaway/brands/baynes" },
  { name: "Deliveroo", href: "https://deliveroo.co.uk/brands/baynes-the-family-baker" },
  { name: "Uber Eats", href: "https://www.ubereats.com/gb/brand/baynes-the-family-bakers" },
];

export const legal = {
  copyright: "© 2026 Bayne’s the Family Bakers. All rights reserved.",
  links: [
    { label: "Terms & Conditions", href: live("/policy/terms-and-conditions/") },
    { label: "Privacy Policy", href: live("/policy/privacy-policy-web/") },
    { label: "Gender Pay Gap", href: live("/policy/gender-pay-gap/") },
    { label: "Modern Slavery Statement", href: live("/policies/modern-slavery-statement/") },
  ],
};
