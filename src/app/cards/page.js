"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import CreateCardModal from "@/components/CreateCardModal";

export default function CardsPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [workspaceCards, setWorkspaceCards] = useState([]);

  const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchDatabaseCards = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/cards`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setWorkspaceCards(data);
        }
      } catch (err) {
        console.error("Failed stream connection to environment database.", err);
      }
    };
    fetchDatabaseCards();
  }, [backendUrl]);

  const handleSaveCard = async (payload) => {
    const { type, data } = payload;
    const content = extractCardData(type, data);

    try {
      const response = await fetch(`${backendUrl}/api/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          type,
          content
        }),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "{}");
        console.error("Server Error Payload (Raw Text):", errorText);
        throw new Error("System rejected asset synchronization parameters.");
      }

      const savedCardFromDb = await response.json();
      setWorkspaceCards((prev) => [savedCardFromDb, ...prev]);
      console.log(`✨ Live Sync Complete: Card registered globally across workspace nodes.`);
    } catch (error) {
      console.error("Network synchronization anomaly occurred:", error);
    }
  };

  const extractCardData = (type, data) => {
    switch (type) {
      case "links":
        return { url: data.url, title: data.title, notes: data.notes };
      case "repos":
        return { repoUrl: data.repoUrl, title: data.customLabel || data.repoUrl };
      case "snippets":
        return { title: data.purpose || "Code Snippet", language: data.language, code: data.code };
      case "notes":
        return { title: data.noteTitle, body: data.markdownContent };
      case "apis":
        return { title: `${data.apiMethod} ${data.apiUrl}`, method: data.apiMethod, url: data.apiUrl, auth: data.apiAuth };
      case "ideas":
        return { title: data.ideaTitle, status: data.ideaStatus };
      default:
        return {};
    }
  };

  const getCardThemeBorder = (type) => {
    switch (type) {
      case "links": return "border-cyan-500/30 dark:border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400";
      case "repos": return "border-purple-500/30 dark:border-purple-500/30 hover:border-purple-500 dark:hover:border-purple-400";
      case "snippets": return "border-pink-500/30 dark:border-pink-500/30 hover:border-pink-500 dark:hover:border-pink-400";
      default: return "border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30";
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 transition-colors duration-300">
      <div className="relative flex justify-between items-center border-b border-black/10 dark:border-white/6 pb-6 w-full">
        <button
          onClick={() => router.push("/dashboard")}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 dark:border-white/8 bg-white/60 dark:bg-[#1A1D29]/60 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span>Back to Dashboard</span>
        </button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Button
            onPress={onOpen}
            endContent={<Plus className="w-4 h-4" />}
            className="bg-gradient-to-r from-[#E94FD1] to-[#FF6FB5] text-white font-medium rounded-full px-6 shadow-[0_4px_20px_rgba(233,79,209,0.3)] hover:shadow-[0_4px_25px_rgba(233,79,209,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Create Card
          </Button>
        </div>
        <div className="hidden sm:block w-[120px]" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 items-start">
        {workspaceCards.length === 0 ? (
          <div className="col-span-full h-64 border border-dashed border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm p-6 text-center shadow-md">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm">
              Your deck ecosystem feels lighter than usual. Let&apos;s map out your dependencies.
            </p>
            <Button
              variant="light"
              onPress={onOpen}
              className="text-[#0FB8A6] dark:text-[#3FE0C5] hover:bg-[#0FB8A6]/10 dark:hover:bg-[#3FE0C5]/10 border border-[#0FB8A6]/20 dark:border-[#3FE0C5]/20 font-medium rounded-full px-5 transition-all duration-300"
            >
              Initialize First Card
            </Button>
          </div>
        ) : (
          workspaceCards.map((card) => (
            <div 
              key={card.id} 
              className={`bg-white/80 dark:bg-[#12141C]/80 backdrop-blur-md border ${getCardThemeBorder(card.type)} rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between h-auto min-h-44 group hover:-translate-y-1`}
            >
              <div>
                <span className="text-[9px] tracking-widest uppercase font-extrabold text-[#D6249F] dark:text-[#3FE0C5] bg-pink-500/10 dark:bg-[#3FE0C5]/10 px-2.5 py-1 rounded border border-pink-500/20 dark:border-[#3FE0C5]/20 w-fit block mb-4">
                  {card.type}
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white tracking-wide line-clamp-3 group-hover:text-black dark:group-hover:text-zinc-200">
                  {card.content?.title || card.content?.url || "Untitled System Entity"}
                </h3>
              </div>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono mt-4 self-end tracking-wider">
                SEC_ID: {card.id ? card.id.substring(0, 8) : "SYNCING"}
              </p>
            </div>
          ))
        )}
      </div>

      <CreateCardModal isOpen={isOpen} onClose={onClose} onSave={handleSaveCard} />
    </div>
  );
}