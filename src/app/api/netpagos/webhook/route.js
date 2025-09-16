// route.js
export async function GET(req) {
  return new Response(JSON.stringify({ message: "Hola esto es un Webhook!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
