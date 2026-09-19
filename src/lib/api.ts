import type { UserProfile, ScoredScheme } from "./matching";

export const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");
function token() { return localStorage.getItem("udaan_token"); }

async function request(path: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers || {});
  headers.set("Content-Type", "application/json");
  const t = token();
  if (t) headers.set("Authorization", `Bearer ${t}`);
  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.message || `Request failed (${response.status})`);
  return data;
}

export async function fetchEntrepreneurMatches(profile: UserProfile) {
  const data = await request("/api/match", { method: "POST", body: JSON.stringify({ profile, saveProfile: Boolean(token()) }) });
  return (data?.matches || []) as ScoredScheme[];
}

export async function saveScheme(frontendId: string, status = "saved") {
  return request("/api/applications", { method: "POST", body: JSON.stringify({ frontendId, status }) });
}

export async function fetchAccountDashboard() {
  const [profile, history, applications] = await Promise.all([
    request("/api/profile"), request("/api/match/history"), request("/api/applications")
  ]);
  return { profile: profile?.profile || null, history: history?.history || [], applications: applications?.applications || [] };
}

export async function saveProfile(profile: unknown) {
  return request("/api/profile", { method: "POST", body: JSON.stringify({ type: "entrepreneur", profile }) });
}

export async function chatWithAssistant(
  message: string,
  language: "en" | "hi" | "hinglish" = "en",
  portalGuide?: { title: string; portalName: string; url: string; kind: string } | null,
) {
  return request("/api/assistant/chat", { method: "POST", body: JSON.stringify({ message, language, portalGuide: portalGuide || null }) });
}
