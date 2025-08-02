import {
  User,
  Trophy,
  TrendingUp,
  Zap,
  Star,
  Globe,
} from "lucide-react";

const categories = [
  { id: "featured", name: "Featured", icon: Star },
  { id: "beginner", name: "Beginner Friendly", icon: User },
  { id: "prizes", name: "Big Prizes", icon: Trophy },
  { id: "trending", name: "Trending", icon: TrendingUp },
  { id: "online", name: "Online", icon: Globe },
  { id: "soon", name: "Starting Soon", icon: Zap },
];

export default categories;
