// app/api/rentas/boletas/route.js
import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const tasa = searchParams.get("tasa");
    const partida = searchParams.get("partida");

    if (!tasa || !partida) {
      return new Response(
        JSON.stringify({ error: "Faltan parámetros (tasa, partida)" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const url = `http://192.1.1.5:8888/servlet/rentas/sv08-1/?tasa=${tasa}&partida=${partida}`;

    const response = await axios.get(url);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error consultando rentas", err.message);
    return new Response(
      JSON.stringify({ error: "No se pudo obtener información" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
