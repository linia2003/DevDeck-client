import "./globals.css";

export const metadata = {
  title: "DevDeck",
  description: "Distinctive Dual-Theme Engineered Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen relative">
        {/* Dynamic Multi-layered Background Canvas */}
        <div className="app-shell-bg" />
        <div className="app-shell-overlay" />
        
        {/* Application Contents */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}