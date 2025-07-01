export type CaseStudy = {
  id: number;
  slug: string; 
  category: "Identity" | "Strategy" | "Campaign" | "Digital";
  title: string;
  paragraph:string
  subtitle?: string;
  imageUrl: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "cut-and-paste",
    category: "Strategy",
    title: "Cut and Paste",
    subtitle: "View Project",
    paragraph: 'This project was built to showcase modern creative direction with high attention to detail, product placement, and experiential brand storytelling. Built with precision and crafted with care.',
   imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4dccd8fb-9368-480c-abc7-ab8f47acbd35.png",
  },
  {
    id: 2,
    slug: "filippe-monet",
    category: "Digital",
    title: "Filippe Monet",
    subtitle: "View Project",
     paragraph: "An immersive digital experience focused on design language and identity evolution across multiple platforms.",
   imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/381b6061-2624-4bf6-b4ac-5e08d1259fdb.png",
  },
  {
    id: 3,
    slug: "studio-b",
    category: "Digital",
    title: "Studio B",
    subtitle: "View Project",
    paragraph: "Studio B reflects creativity in motion with strong interactive elements and storytelling.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/51cd1230-ac9d-4093-8b15-52b6e2f50f0c.png",
  },
  {
    id: 4,
    slug: "dash-and-dinc",
    category: "Identity",
    title: "Dash & Dinc",
    subtitle: "View Project",
    paragraph: "A rebrand focused on strong minimalism and bold typography to establish instant recall.",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e205d8e-9d16-4cc0-a37c-fa254a9e5ea8.png",
  },
  {
    id: 5,
    slug: "habitude",
    category: "Campaign",
    title: "Habitude",
    subtitle: "View Project",
    paragraph: "A lifestyle campaign aimed at Gen Z with playful visuals and strong emotional language.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9ef59b16-f6db-4921-8a32-919124f3de89.png",
  },
  {
    id: 6,
    slug: "studio-34",
    category: "Digital",
    title: "Studio 34",
    subtitle: "View Project",
        paragraph: "We crafted a digital presence for Studio 34 to merge art, fashion, and technology.",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41d79d7b-2933-44ab-8950-b7bfb5fc4344.png",
  },
  {
    id: 7,
    slug: "a14",
    category: "Identity",
    title: "A14",
    subtitle: "View Project",
    paragraph: "We created a minimal and flexible brand identity system for a forward-looking architecture firm.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f3471b9-0643-4f17-b75c-8eabb043b133.png",
  },
  {
    id: 8,
    slug: "arrival",
    category: "Identity",
    title: "Arrival",
    subtitle: "View Project",
    paragraph: "Arrival’s identity was reshaped around motion, transition, and clarity.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/070fc58d-1ff6-4a9a-8bbf-3f80c787382b.png",
  },
  {
    id: 9,
    slug: "sensa",
    category: "Identity",
    title: "Sensa",
    subtitle: "View Project",
    paragraph: "Sensa merges abstract forms with vibrant colors to portray a sense of movement and delight.",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/565b133b-2605-49fa-a523-62c77745fa01.png",
  },
  {
    id: 10,
    slug: "google-deepmind",
    category: "Campaign",
    title: "Google Deepmind",
    subtitle: "View Project",
    paragraph: "A futuristic campaign for DeepMind emphasizing clarity, data, and forward innovation.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2a26bb3-3ffb-4cf1-bdea-348da9d675ad.png",
  },
  {
    id: 11,
    slug: "solace-sound",
    category: "Campaign",
    title: "Solace Sound",
    subtitle: "View Project",
    paragraph: "An emotionally driven campaign for Solace Sound’s launch into the wellness space.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15f8c419-d2c0-4f3e-bd63-2df7b2081355.png",
  },
  {
    id: 12,
    slug: "zara",
    category: "Strategy",
    title: "Zara",
    subtitle: "View Project",
    paragraph: "Zara’s digital strategy refocused on personalization and dynamic UX across touchpoints.",
      imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa5e00b6-ca62-4d6f-b156-430be63338fb.png",
  },
  {
    id: 13,
    slug: "nike",
    category: "Strategy",
    title: "Nike",
    subtitle: "View Project",
    paragraph: "Nike’s storytelling campaign highlighted bold creative exploration with a minimalist edge.",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ea5508e-f22b-4361-aaed-abd0b2a7f0bf.png",
  },
  {
    id: 14,
    slug: "carebite",
    category: "Identity",
    title: "Carebite",
    subtitle: "View Project",
    paragraph: "A fresh and caring identity system for a health-focused snack brand.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ab56d4a-a4e0-4dd6-831d-3c97506a20bb.png",
  },
  {
    id: 15,
    slug: "balmain",
    category: "Campaign",
    title: "Balmain",
    subtitle: "View Project",
    paragraph: "Balmain’s luxury campaign evokes strength, confidence, and high fashion influence.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94784405-6eb5-46b0-9f21-e6e39cc37de7.png",
  },
  {
    id: 16,
    slug: "marc-jacobs",
    category: "Strategy",
    title: "Marc Jacobs",
    subtitle: "View Project",
    paragraph: "We reimagined Marc Jacobs’ positioning with timeless editorial photography and interactive moments.",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f51672a8-9994-49a3-a98d-19c4581dc1b3.png",
  },
  {
    id: 17,
    slug: "burberry",
    category: "Digital",
    title: "Burberry",
    subtitle: "View Project",
    paragraph: "Burberry’s digital refresh focused on luxury feel and seamless experience.",
    imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b126eac-3520-4a88-b99c-33ab83cceee3.png",
  },
  {
    id: 18,
    slug: "dior",
    category: "Digital",
    title: "Dior",
    subtitle: "View Project",
    paragraph: "A sleek, high-end product display layout for Dior’s premium online showcase.",
     imageUrl:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/301ceeeb-6c74-41f3-a962-cba966dc7f55.png",
  },
];