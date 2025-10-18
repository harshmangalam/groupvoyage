"use client";

export function DebugInfo() {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  return (
    <div className="fixed top-4 right-4 bg-black text-white p-4 rounded text-xs z-[9999] max-w-sm">
      <h3 className="font-bold mb-2">🔍 Debug Info</h3>
      <div className="space-y-1">
        <p>API Key Present: {apiKey ? '✅ YES' : '❌ NO'}</p>
        {apiKey && (
          <>
            <p>API Key Length: {apiKey.length}</p>
            <p>API Key Preview: {apiKey.substring(0, 15)}...</p>
          </>
        )}
        <p className="mt-2 text-yellow-400">
          If API key is missing, restart the dev server with: pnpm dev
        </p>
      </div>
    </div>
  );
}
