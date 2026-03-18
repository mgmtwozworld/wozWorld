import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Youtube, Music } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#3E4A3D] flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full"
      >
        <Card className="rounded-2xl shadow-lg bg-[#E8E3D9] border-none">
          <CardContent className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Justin Wozniak</h1>
            <p className="text-sm mb-6">Learn Spanish the way your brain actually works</p>

            <div className="flex flex-col gap-4">
              <a href="https://www.tiktok.com/@justinwozniak" target="_blank">
                <Button className="w-full flex gap-2 items-center justify-center bg-[#3E4A3D] text-white rounded-xl">
                  <Music size={18} /> TikTok (@justinwozniak)
                </Button>
              </a>

              <a href="https://www.instagram.com/justinwozniak" target="_blank">
                <Button className="w-full flex gap-2 items-center justify-center bg-[#3E4A3D] text-white rounded-xl">
                  <Instagram size={18} /> Instagram (@justinwozniak)
                </Button>
              </a>

              <a href="https://www.youtube.com/@wozworld" target="_blank">
                <Button className="w-full flex gap-2 items-center justify-center bg-[#3E4A3D] text-white rounded-xl">
                  <Youtube size={18} /> YouTube (@wozworld)
                </Button>
              </a>
            </div>

            <div className="mt-8 text-left">
              <h2 className="text-xl font-semibold mb-3">How I Teach Spanish</h2>
              <p className="text-sm leading-relaxed mb-3">
                Most people learn Spanish by memorizing rules and vocabulary lists — and then forget it all.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                I teach Spanish through pattern recognition. Instead of treating the language like a set of random rules, I show you the systems behind it — how native speakers actually think and connect ideas.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                You'll start noticing patterns in verb structures, sentence flow, and word usage that make everything easier to understand and remember.
              </p>
              <p className="text-sm leading-relaxed">
                No endless memorization. Just understanding how the language works.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs mt-6 opacity-70">
          © {new Date().getFullYear()} Justin Wozniak
        </p>
      </motion.div>
    </div>
  );
}
