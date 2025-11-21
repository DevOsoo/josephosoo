import { Experience, Project, SkillCategory, Education } from './types';
import labelguide from './images/labelguiderlhf.png';
import toloka from './images/toloka.png';
import modedistillabele from './images/modeldistillabel.png';
import kumemedium from './images/kubemedium.png';

export const PROFILE = {
  name: "Joseph Osoo Adek",
  shortName: "Osoo",
  titles: ["Technical Writer", "AI Researcher", "Data Scientist"],
  image: "https://picsum.photos/200",
  about: `I am a versatile technical writer, AI researcher, and data scientist confident with words and datasets, and with a knack for explaining complex topics clearly. As a freelance professional, I specialize in delivering high-quality documentation, marketing copy, research summaries, developer guides, and data insights. I am driven by a passion for continuous learning, solving technical business problems, and simplifying complex technical systems for broader audiences.
Welcome to my world!`
};

export const SOCIALS = [
  { name: "LinkedIn", url: "http://www.linkedin.com/in/joseph-osoo", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/DevOsoo", icon: "github" },
  { name: "Medium", url: "https://medium.com/@josephosoo", icon: "medium" },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "C/C++", "SQL", "Django", "Flask", "FastAPI"]
  },
  {
    category: "Data & Analytics",
    skills: ["Excel", "Power BI", "Google Looker Studio", "Pandas", "NumPy", "Scikit-learn", "TensorFlow/Keras", "PostgreSQL", "MongoDB", "Snowflake", "Apache Kafka", "Spark"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "Kubernetes", "Ansible", "Jupyter Notebook", "Markdown", "Slack / ClickUp"]
  },
  {
    category: "Technical Writing",
    skills: ["SEO", "Documentation", "Developer Guides", "Research Writing", "Content Strategy"]
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Critical Thinking", "Detail-Oriented", "Project Management", "Research Skills", "Team Collaboration", "Adaptability"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "How to Implement Reinforcement Learning from Human Feedback (RLHF)",
    link: "https://labelbox.com/guides/how-to-implement-reinforcement-learning-from-human-feedback-rlhf/",
    image: labelguide,
    description: "I wrote a technical guide for Labelbox explaining how Reinforcement Learning from Human Feedback (RLHF) works in modern AI systems. The article walks developers through data pipeline design, reward modeling, and iterative training cycles, while clarifying how human feedback shapes model alignment."
  },
  {
    id: 2,
    title: "AI Agent-as-a-Judge: A Framework to Evaluate Agents with Agents",
    link: "https://toloka.ai/blog/ai-agent-as-a-judge-a-framework-to-evaluate-agents-with-agents/",
    image: toloka,
    description: "I authored an in-depth research-driven article for Toloka exploring how AI agents can evaluate other agents using structured scoring, rubric-based assessment, and autonomous decision frameworks. The guide highlights evaluation reliability, bias control, and scalable testing methods."
  },
  {
    id: 3,
    title: "What Is Model Distillation?",
    link: "https://labelbox.com/guides/model-distillation/",
    image: modedistillabele,
    description: "I developed a developer-focused guide that explains model distillation—the process of compressing large models into smaller, efficient ones without significant loss of performance. The article clarifies teacher–student architectures, common distillation strategies, and practical use cases in production ML."
  },
  {
    id: 4,
    title: "Containerization in MLOps: Managing ML Pipelines in Production Using Kubeflow",
    link: "https://medium.com/@josephosoo/containerization-in-mlops-managing-end-to-end-machine-learning-pipelines-in-production-using-c4df7e680276",
    image: kumemedium,
    description: "I wrote a hands-on MLOps article demonstrating how to use containerization and Kubeflow to manage end-to-end machine learning pipelines. The piece covers environments, reproducibility, deployment orchestration, and real-world MLOps workflow patterns."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 0,
    role: "Data Analyst & Researcher",
    company: "Freelance",
    period: "July 2024 – Present",
    description: "As a freelance Data Analyst and Researcher, I work with clients to extract insights from large datasets using Python and SQL, automate workflows, and build interactive data dashboards. I conduct statistical analysis, develop market research reports, and design narrative-driven visualizations that support strategic decision-making. My work includes data scraping projects exceeding 10,000 data points, automation pipelines that reduce manual work by 40%, and end-to-end analytical solutions across multiple domains."
  },
  {
    id: 1,
    role: "Technical Content Writer",
    company: "Toloka (Freelance)",
    period: "Nov 2024 – Present",
    description: "At Toloka, I create research-informed content focused on AI systems, evaluation frameworks, and agent-based architectures. My work includes producing developer guides, conceptual explainers, and technical analysis targeting practitioners in the AI and ML ecosystem. I collaborate with researchers and product teams to transform complex ideas into accessible materials, ensuring clarity, rigor, and alignment with audience needs."
  },
  {
    id: 2,
    role: "SEO Copywriter",
    company: "Labelbox (Freelance)",
    period: "Jan 2024 – July 2024",
    description: "At Labelbox, I led SEO-driven technical content initiatives that significantly improved organic visibility across key AI, machine learning, and data science topics. I authored more than 35 articles ranging from guides to deep-dive explainers, ensuring each piece combined technical depth with readability. I collaborated with cross-functional teams, optimized content using SEO best practices, and documented workflows for data labeling tools like CVAT. My work contributed to increased search rankings, user engagement, and traffic growth."
  },
  {
    id: 3,
    role: "Technical Writer",
    company: "Idea Maker (Freelance)",
    period: "Oct 2023 – Dec 2023",
    description: "At Idea Maker, I produced high-quality technical content including tutorials, engineering explainers, and documentation for AI and software development topics. I conducted extensive research to ensure technical accuracy, collaborated with engineering teams to clarify requirements, and wrote clear, accessible articles that improved product understanding and user engagement. I ensured consistency by adhering to strict style guidelines and maintaining high editorial standards."
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Science in Computer Science",
  university: "Gretsa University",
  years: "2018–2024",
  honors: "Second Class Upper Division"
};