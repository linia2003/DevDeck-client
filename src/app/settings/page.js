"use client";

import React, { useState } from "react";
import { 
  Palette, 
  Globe, 
  Person, 
  ShieldCheck, 
  CircleExclamation, // Swapped out CircleAlert for correct package name
  ChevronRight,
  FloppyDisk
} from "@gravity-ui/icons";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("theme");
  const [saveStatus, setSaveStatus] = useState("");

  const globalLanguages = [
    { code: "en-US", name: "English (US) — Standard Dev Shell" },
    { code: "bn-BD", name: "Bengali (BD) — Localized Workspace Matrix" },
    { code: "es-ES", name: "Español (ES) — Castellano Shell" },
    { code: "fr-FR", name: "Français (FR) — Module Européen" },
    { code: "de-DE", name: "Deutsch (DE) — Standard Terminal" },
    { code: "ja-JP", name: "日本語 (JP) — インタフェース" },
    { code: "zh-CN", name: "简体中文 (CN) — 简体开发环境" },
    { code: "hi-IN", name: "हिन्दी (IN) — भारतीय भाषा" },
    { code: "ar-SA", name: "العربية (SA) — حزمة اللغة العربية" },
    { code: "pt-BR", name: "Português (BR) — Shell Dev" },
    { code: "ru-RU", name: "Русский (RU) — Локальный терминал" },
    { code: "it-IT", name: "Italiano (IT) — Ambiente di sviluppo" },
    { code: "ko-KR", name: "한국어 (KR) — Korean Shell" },
    { code: "vi-VN", name: "Tiếng Việt (VN) — Hệ thống ngôn ngữ" },
    { code: "tr-TR", name: "Türkçe (TR) — Geliştirici Kabuğu" },
    { code: "pl-PL", name: "Polski (PL) — Środowisko programisty" },
    { code: "nl-NL", name: "Nederlands (NL) — Dev Console" },
    { code: "uk-UA", name: "Українська (UA) — Мовний модуль" },
    { code: "th-TH", name: "ไทย (TH) — ระบบภาษาไทย" },
    { code: "id-ID", name: "Bahasa Indonesia (ID) — Modul Workspace" },
    { code: "ms-MY", name: "Bahasa Melayu (MY) — Kerangka Kerja" },
    { code: "fa-IR", name: "فارسی (IR) — پوسته توسعه" },
    { code: "he-IL", name: "עברית (IL) — סביבת פיתוח" },
    { code: "sv-SE", name: "Svenska (SE) — Utvecklingsmiljö" },
    { code: "no-NO", name: "Norsk (NO) — Terminal Oppsett" },
    { code: "fi-FI", name: "Suomi (FI) — Kehitysympäristö" },
    { code: "da-DK", name: "Dansk (DK) — Dev System" },
    { code: "cs-CZ", name: "Čeština (CZ) — Vývojové prostředí" },
    { code: "el-GR", name: "Ελληνικά (GR) — Κέλυφος Ανάπτυξης" },
    { code: "hu-HU", name: "Magyar (HU) — Fejlesztői Környezet" },
    { code: "ro-RO", name: "Română (RO) — Modul Workspace" },
    { code: "sk-SK", name: "Slovenčina (SK) — Vývojový Terminal" },
    { code: "bg-BG", name: "Български (BG) — Локална Система" },
    { code: "hr-HR", name: "Hrvatski (HR) — Razvojno Okruženje" },
    { code: "sr-RS", name: "Srpski (RS) — Terminal Matrix" }
  ];

  const [settingsData, setSettingsData] = useState({
    themeMode: "dark",
    energyRings: true,
    language: "en-US",
    humanizedClasses: true,
    fullName: "Mahbuba Rahman Chowdhury",
    email: "muna@metrouni.edu",
    avatarUrl: ""
  });

  const handleToggle = (field) => {
    setSettingsData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field, value) => {
    setSettingsData(prev => ({ ...prev, [field]: value }));
  };

  const triggerSavePipeline = () => {
    setSaveStatus("synced");
    setTimeout(() => setSaveStatus(""), 3000);
    console.log("💾 System Sync: Settings updated.", settingsData);
  };

  const inputClass = "w-full bg-[#1A1D29]/40 backdrop-blur-md text-[#F5F6FA] placeholder:#9CA3B5/30 border border-white/8 hover:border-white/20 focus:border-[#E94FD1]/80 focus:outline-none rounded-xl h-11 px-4 transition-all duration-300";
  const labelClass = "text-[#9CA3B5] font-medium mb-1.5 block text-sm";
  const navItemClass = (id) => `w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${activeSection === id ? "bg-gradient-to-r from-[#E94FD1]/10 to-[#FF6FB5]/5 border-[#E94FD1]/30 text-white shadow-[0_0_15px_rgba(233,79,209,0.05)]" : "border-transparent text-[#9CA3B5] hover:text-[#F5F6FA] hover:bg-white/5"}`;

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F5F6FA] p-4 sm:p-8 flex flex-col gap-8">
      {saveStatus === "synced" && (
        <div className="fixed top-6 right-6 z-[9999] bg-[#12141C]/90 border border-[#3FE0C5]/40 text-[#F5F6FA] px-4 py-3 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(63,224,197,0.15)] flex items-center gap-3 animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-[#3FE0C5] animate-pulse" />
          <span className="text-xs font-medium tracking-wide">Workspace parameters synchronized successfully.</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/6 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-medium tracking-wide">Workspace Settings</h1>
          <p className="text-sm text-[#9CA3B5] mt-1">Calibrate the global developer canvas properties and access credentials.</p>
        </div>
        <button
          onClick={triggerSavePipeline}
          className="bg-gradient-to-r from-[#E94FD1] to-[#FF6FB5] text-white font-medium text-sm rounded-full px-6 py-2.5 shadow-[0_4px_20px_rgba(233,79,209,0.3)] hover:shadow-[0_4px_25px_rgba(233,79,209,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 border-0 outline-none cursor-pointer"
        >
          <FloppyDisk className="w-4 h-4" />
          <span>Save Framework Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1 items-start">
        <div className="lg:col-span-1 bg-[#12141C]/60 backdrop-blur-xl border border-white/8 rounded-2xl p-3 flex flex-col gap-1.5 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
          <button onClick={() => setActiveSection("theme")} className={navItemClass("theme")}>
            <div className="flex items-center gap-3"><Palette className="w-[18px] h-[18px] text-[#3FE0C5]" /><span>Theme & View</span></div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <button onClick={() => setActiveSection("language")} className={navItemClass("language")}>
            <div className="flex items-center gap-3"><Globe className="w-[18px] h-[18px] text-[#8B5CF6]" /><span>Localization</span></div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <button onClick={() => setActiveSection("account")} className={navItemClass("account")}>
            <div className="flex items-center gap-3"><Person className="w-[18px] h-[18px] text-[#E94FD1]" /><span>Profile Metadata</span></div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <button onClick={() => setActiveSection("security")} className={navItemClass("security")}>
            <div className="flex items-center gap-3"><ShieldCheck className="w-[18px] h-[18px] text-[#FFB84D]" /><span>Security Gateway</span></div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
          <div className="h-px bg-white/6 my-2" />
          <button onClick={() => setActiveSection("danger")} className={navItemClass("danger")}>
            <div className="flex items-center gap-3"><CircleExclamation className="w-[18px] h-[18px] text-rose-500" /><span>Danger Zone</span></div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>
        </div>

        <div className="lg:col-span-3 bg-[#12141C]/40 backdrop-blur-xl border border-white/8 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.15)] flex flex-col gap-6">
          
          {activeSection === "theme" && (
            <div className="flex flex-col gap-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-medium text-white tracking-wide">Theme & System Viewports</h3>
                <p className="text-xs text-[#9CA3B5] mt-0.5">Calibrate the visual workspace environment to align with your current runtime comfort.</p>
              </div>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
              
              <div className="flex flex-col gap-4">
                <label className={labelClass}>Interface Mode</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => handleInputChange("themeMode", "dark")}
                    className={`border rounded-xl p-4 flex flex-col gap-2 cursor-pointer transition-all duration-300 bg-[#1A1D29]/40 backdrop-blur-md ${settingsData.themeMode === "dark" ? "border-[#E94FD1] shadow-[0_0_15px_rgba(233,79,209,0.1)] bg-[#1A1D29]/70" : "border-white/6 hover:border-white/20"}`}
                  >
                    <span className="text-sm font-medium text-white">Futuristic Dark Mode 🌌</span>
                    <span className="text-xs text-[#9CA3B5]">Deep navy glass components coupled with soft glowing neon gridlines.</span>
                  </div>
                  <div 
                    onClick={() => handleInputChange("themeMode", "light")}
                    className={`border rounded-xl p-4 flex flex-col gap-2 cursor-pointer transition-all duration-300 bg-[#1A1D29]/40 backdrop-blur-md ${settingsData.themeMode === "light" ? "border-[#E94FD1] shadow-[0_0_15px_rgba(233,79,209,0.1)] bg-[#1A1D29]/70" : "border-white/6 hover:border-white/20"}`}
                  >
                    <span className="text-sm font-medium text-white">Frosted Light Mode ❄️</span>
                    <span className="text-xs text-[#9CA3B5]">Lavender-white glass layouts offering crisp contrast tracking properties.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#1A1D29]/30 border border-white/6 rounded-xl p-4">
                <div className="flex flex-col gap-0.5 max-w-[80%]">
                  <span className="text-sm font-medium text-white">Enable Background Energy Rings</span>
                  <span className="text-xs text-[#9CA3B5]">Adds atmospheric radial gradient glows behind key layout cards for deeper HUD immersion.</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={settingsData.energyRings} 
                  onChange={() => handleToggle("energyRings")}
                  className="w-10 h-5 rounded-full bg-white/10 checked:bg-[#E94FD1] appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:top-0.5 before:left-0.5 checked:before:translate-x-5 before:transition-all duration-300"
                />
              </div>
            </div>
          )}

          {activeSection === "language" && (
            <div className="flex flex-col gap-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-medium text-white tracking-wide">System Localization</h3>
                <p className="text-xs text-[#9CA3B5] mt-0.5">Adjust structural string variables for system menus and console feedback cards.</p>
              </div>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

              <div>
                <label className={labelClass}>Primary Framework Language Target</label>
                <select
                  value={settingsData.language}
                  onChange={(e) => handleInputChange("language", e.target.value)}
                  className="w-full bg-[#1A1D29]/60 text-[#F5F6FA] border border-white/8 hover:border-white/20 focus:border-[#E94FD1]/80 focus:outline-none rounded-xl h-11 px-3 backdrop-blur-md transition-all duration-300"
                >
                  {globalLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-[#12141C] text-[#F5F6FA]">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between bg-[#1A1D29]/30 border border-white/6 rounded-xl p-4">
                <div className="flex flex-col gap-0.5 max-w-[80%]">
                  <span className="text-sm font-medium text-white">Humanized Component Class Conventions</span>
                  <span className="text-xs text-[#9CA3B5]">Forces component generators to drop generic styles in favor of contextual selectors like <code className="text-[#3FE0C5] bg-black/20 px-1 py-0.5 rounded text-[11px]">.brain-flex</code> or <code className="text-[#3FE0C5] bg-black/20 px-1 py-0.5 rounded text-[11px]">.note-card</code>.</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={settingsData.humanizedClasses} 
                  onChange={() => handleToggle("humanizedClasses")}
                  className="w-10 h-5 rounded-full bg-white/10 checked:bg-[#E94FD1] appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:top-0.5 before:left-0.5 checked:before:translate-x-5 before:transition-all duration-300"
                />
              </div>
            </div>
          )}

          {activeSection === "account" && (
            <div className="flex flex-col gap-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-medium text-white tracking-wide">Profile Metadata</h3>
                <p className="text-xs text-[#9CA3B5] mt-0.5">Update core author parameters transmitted to upstream repositories and draft cards.</p>
              </div>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

              <div>
                <label className={labelClass}>Profile Moniker Name</label>
                <input 
                  type="text" 
                  value={settingsData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Workspace Commits Email Target</label>
                <input 
                  type="email" 
                  value={settingsData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div className="flex flex-col gap-6 animate-fadeIn">
              <div>
                <h3 className="text-lg font-medium text-white tracking-wide">Security & Keys Gateway</h3>
                <p className="text-xs text-[#9CA3B5] mt-0.5">Rotate encryption keys, manage active login tokens, and secure internal endpoints.</p>
              </div>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1A1D29]/30 border border-white/6 rounded-xl p-4 gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white">Password Authentication Shell</span>
                  <span className="text-xs text-[#9CA3B5]">Change the alphanumeric key vector tied to your profile dashboard entry mapping.</span>
                </div>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs rounded-xl px-4 py-2 transition-all cursor-pointer">
                  Rotate Access Password
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1A1D29]/30 border border-white/6 rounded-xl p-4 gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white">Better Auth Persistent Session Traces</span>
                  <span className="text-xs text-[#9CA3B5]">Instantly invalidates all active cookies and login profiles except for this local terminal instance.</span>
                </div>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs rounded-xl px-4 py-2 transition-all cursor-pointer">
                  Flush Remote Session Traces
                </button>
              </div>
            </div>
          )}

          {activeSection === "danger" && (
            <div className="flex flex-col gap-6 animate-fadeIn border border-rose-500/20 rounded-2xl p-4 bg-rose-500/[0.02]">
              <div>
                <h3 className="text-lg font-medium text-rose-400 tracking-wide">The Danger Zone</h3>
                <p className="text-xs text-[#9CA3B5] mt-0.5">Destructive un-wind configurations. Proceed with absolute certainty.</p>
              </div>
              <div className="h-px bg-gradient-to-r from-rose-500/30 to-transparent" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1A1D29]/20 border border-white/6 rounded-xl p-4 gap-4">
                <div className="flex flex-col gap-0.5 max-w-[70%]">
                  <span className="text-sm font-medium text-white">Wipe Local Framework Cache</span>
                  <span className="text-xs text-[#9CA3B5]">Clears persistent client layout state collections and forces a complete refresh pipeline alignment from MongoDB data stores.</span>
                </div>
                <button className="bg-transparent hover:bg-amber-500/10 border border-[#FFB84D]/30 text-[#FFB84D] font-medium text-xs rounded-xl px-4 py-2 transition-all cursor-pointer">
                  Purge Local Workspace Cache
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1A1D29]/20 border border-white/6 rounded-xl p-4 gap-4">
                <div className="flex flex-col gap-0.5 max-w-[70%]">
                  <span className="text-sm font-medium text-rose-400">Terminate Account Lifecycle</span>
                  <span className="text-xs text-[#9CA3B5]">This action completely dismantles your DevDeck profile, dropping all category maps, hidden markdown keys, and stored API configurations forever. This pipeline cannot be re-opened.</span>
                </div>
                <button className="bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-400 font-medium text-xs rounded-xl px-4 py-2 transition-all cursor-pointer">
                  Terminate Account Lifecycle
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}