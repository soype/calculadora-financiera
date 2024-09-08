
const data = {
    "message": "Resultados correctos"
}

export async function GET(request) {
  return new Response( JSON.stringify(data), { status: 200 });
}