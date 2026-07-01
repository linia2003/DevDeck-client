import { createAuthClient } from "better-auth/react";

// 1. Core initialization for production / connected execution environments
const realClient = typeof window !== "undefined" 
  ? createAuthClient({ baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000" })
  : null;

// 2. Safe frontend isolation mock engine to allow building UI without a running server
const mockClient = {
  useSession: () => ({
    // Change data to null if you want to test how the logged-out UI looks!
    data: {
      user: {
        name: "muna rahman",
        email: "muna@devdeck.io",
        image: "https://api.dicebear.com/7.x/open-peeps/svg?seed=MunaDevDeck"
      }
    },
    isPending: false,
    error: null
  }),
  signOut: async () => {
    console.log("Mock Mode: Sign out intercepted cleanly.");
    return { success: true };
  },
  signIn: {
    email: async ({ email, password }) => {
      console.log("Mock Mode: Intercepted email verification handler for", email);
      return { data: { user: { name: "Alex Chen" } }, error: null };
    }
  }
};

export const authClient = process.env.NEXT_PUBLIC_MOCK_MODE === "true" ? mockClient : realClient;