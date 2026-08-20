import projectData from "./posts.json";

export interface Project {
  id: string;
  date: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  duration: string;
  image?: string;
  video?: string;
  youtube?: string;
  gallery?: string[];
  client: string;
  role: string;
  category: string;
  impact: string;
  highlights: string[];
  technicalChallenge?: string;
  cover: string;
  featured?: boolean;
  featuredOrder?: number;
}

type RawProject = Omit<
  Project,
  | "client"
  | "role"
  | "category"
  | "impact"
  | "highlights"
  | "cover"
  | "featured"
  | "featuredOrder"
>;

type ProjectDetails = Pick<
  Project,
  | "client"
  | "role"
  | "category"
  | "impact"
  | "highlights"
  | "technicalChallenge"
> & {
  cover?: string;
  featured?: boolean;
  featuredOrder?: number;
};

const details: Record<string, ProjectDetails> = {
  "glo-ai-kinect": {
    client: "Globacom",
    role: "Lead engineer",
    category: "AI · Spatial interaction",
    impact: "Responsive AI and motion interaction for a live brand activation",
    highlights: [
      "Used the Kinect SDK within Unity to read body-tracking input and drive the motion-reactive visual experience.",
      "Delivered the AI chatbot as a separate web experience on another public display.",
      "Turned the visitor's phone into a remote keyboard, using bidirectional communication to keep the phone, AI system and display synchronised.",
    ],
    technicalChallenge:
      "The installation combined different interaction surfaces without making the experience feel fragmented. Body movement drove the Unity visuals, while phone input and AI responses moved between a separate web experience and public display in real time.",
    cover: "/images/glo-ai-kinect-1.jpg",
    featured: true,
    featuredOrder: 4,
  },
  "innovations-in-cad": {
    client: "Aether Energy",
    role: "Founding engineer",
    category: "Web3D · CAD · Simulation",
    impact: "Faster rooftop design with simulation-informed decisions",
    highlights: [
      "Built a dual-input roof workflow: users could trace boundaries over aerial imagery, while a backend AI service could return outline coordinates.",
      "Converted the resulting outline coordinates into generated 3D building and roof geometry.",
      "Calculated roof-face pitch, orientation and azimuth so panels could be positioned correctly on sloped surfaces.",
    ],
    technicalChallenge:
      "The hardest part was turning a flat roof outline into dependable 3D geometry. Every sloped face required accurate pitch, orientation and azimuth calculations; errors at that stage would affect panel placement and the reliability of the downstream simulation.",
    cover: "/images/aether-solar-cad-1.jpg",
    featured: true,
    featuredOrder: 1,
  },
  "creating-no-code-arvr": {
    client: "SwiftXR",
    role: "Platform engineer",
    category: "No-code · WebXR · 3D",
    impact: "25K+ creators · 1M+ immersive experiences",
    highlights: [
      "Abstracted complex 3D and XR workflows into reusable no-code components.",
      "Built a publishing workflow that persisted creator projects and produced browser-ready experiences.",
      "Automated deployment concerns including domain provisioning and SSL configuration.",
    ],
    technicalChallenge:
      "Publishing needed to feel like a single action for the creator while the platform reliably moved a saved project through secure, browser-ready deployment, including domain and certificate setup.",
    cover: "/images/swiftxr-editor-1.jpg",
    featured: true,
    featuredOrder: 2,
  },
  "blockchain-based-metaverses": {
    client: "Vault Hill",
    role: "Web3D engineer",
    category: "WebXR · Multiplayer · Web3",
    impact: "Persistent multiplayer world with tokenised virtual land",
    highlights: [
      "Connected an explorable 3D world to virtual land ownership data.",
      "Built real-time multiplayer interactions across Web3D and VR surfaces.",
      "Created a visual map for browsing and managing digital property.",
    ],
  },
  "hse-vr-training": {
    client: "Industrial training",
    role: "VR engineer",
    category: "Simulation · Training · VR",
    impact: "Repeatable safety training without real-world risk",
    highlights: [
      "Modelled interactive hazards and emergency response scenarios.",
      "Turned procedural training into hands-on simulated practice.",
      "Designed reusable modules for deployment across training environments.",
    ],
  },
  "interractive-fashion-experience": {
    client: "L’Oréal",
    role: "3D/XR engineer",
    category: "Web3D · AR · Beauty",
    impact: "Responsive digital hair exploration across devices",
    highlights: [
      "Built real-time controls for exploring and customising digital hairstyles.",
      "Balanced visual fidelity with browser and mobile performance.",
      "Integrated optimised 3D assets into a responsive consumer experience.",
    ],
  },
  "banking-chatbot": {
    client: "Lloyds Banking Group",
    role: "Software engineer",
    category: "AI · Real-time systems",
    impact: "11K+ students reached across campus activations",
    highlights: [
      "Connected a visitor's phone to a web-based AI experience presented on a public display.",
      "Used the phone as the input device, with bidirectional communication keeping the conversation synchronised across both screens.",
      "Designed the modular system so it could be configured for different campus activations.",
    ],
    technicalChallenge:
      "The core challenge was maintaining one coherent real-time conversation across a visitor's personal device and a shared public display, while keeping the platform modular enough to deploy in different campus environments.",
  },
  "VR-Experience": {
    client: "Wondaland",
    role: "VR engineer",
    category: "360° VR · Spatial audio",
    impact:
      "Extended a physical music tour into an immersive digital experience",
    highlights: [
      "Translated the album's visual world into explorable 360-degree environments.",
      "Used spatial audio and cinematic sequencing to guide the experience.",
      "Made the tour available to audiences beyond physical venues.",
    ],
  },
  Mastercard: {
    client: "Mastercard",
    role: "Full-stack engineer",
    category: "Mobile · Campaign platform",
    impact: "Automated spend-based raffle participation for a live campaign",
    highlights: [
      "Connected payment-triggered activity to automated raffle entry.",
      "Built real-time notifications and participant engagement mechanics.",
      "Provided campaign teams with operational and engagement visibility.",
    ],
  },
  "Web-AR": {
    client: "Marriott",
    role: "WebAR engineer",
    category: "WebAR · Hospitality",
    impact: "Interactive room exploration directly in the browser",
    highlights: [
      "Delivered an installation-free AR experience for prospective guests.",
      "Presented rooms, layouts and amenities through interactive 3D models.",
      "Optimised the experience for use during the booking journey.",
    ],
  },
  "vr-input-experiment": {
    client: "R&D",
    role: "VR prototyping engineer",
    category: "Interaction R&D · VR",
    impact: "Combined gaze, gesture and haptic interaction in one prototype",
    highlights: [
      "Developed a modular test bed for multi-modal input experiments.",
      "Explored gaze-based selection patterns designed to reduce fatigue.",
      "Combined hand tracking and haptic feedback in iterative usability tests.",
    ],
  },
  "ship-steering-simulator": {
    client: "Maritime training",
    role: "Simulation engineer",
    category: "Physics · Simulation · Training",
    impact:
      "Repeatable high-fidelity maritime practice in a controlled environment",
    highlights: [
      "Simulated ocean, wind, steering and docking conditions in real time.",
      "Created repeatable scenarios for professional operator training.",
      "Balanced physical fidelity with reliable training-room performance.",
    ],
  },
  "XR-instructor": {
    client: "HOFT",
    role: "WebXR engineer",
    category: "Web3D · AR · Education",
    impact: "Industrial machine practice without requiring physical equipment",
    highlights: [
      "Built interactive machine models that run directly in the browser.",
      "Created guided operating workflows for engineering students.",
      "Enabled training material to be reused across classroom environments.",
    ],
  },
  "AR-Glasses": {
    client: "Accessibility research",
    role: "Lead XR engineer",
    category: "AI · AR · Accessibility",
    impact: "Real-time multilingual subtitles inside the user's field of view",
    highlights: [
      "Allowed audio input to come from either the phone microphone or the glasses microphone.",
      "Presented the resulting subtitles inside the wearer's environment using a world-space AR canvas.",
      "Supported English, Yoruba, Igbo and Hausa language workflows.",
    ],
    technicalChallenge:
      "The interaction had to remain flexible across two possible audio sources while keeping subtitles readable and correctly positioned within the wearer's augmented view.",
    cover: "/images/smart-glasses.jpg",
    featured: true,
    featuredOrder: 3,
  },
};

export const projects: Project[] = (projectData.posts as RawProject[]).map(
  project => {
    const projectDetails = details[project.id];
    const cover =
      projectDetails.cover ?? project.image ?? project.gallery?.[0] ?? "";

    return { ...project, ...projectDetails, cover };
  }
);

export const featuredProjects = projects
  .filter(project => project.featured)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

export function getProject(id: string) {
  return projects.find(project => project.id === id);
}
