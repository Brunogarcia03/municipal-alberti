// route.js
export async function GET(req) {
  return new Response(
    JSON.stringify({ message: "Hola esto es una Pre orden!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
