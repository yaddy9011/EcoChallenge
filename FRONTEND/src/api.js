// FRONTEND/src/api.js
const API = "http://localhost:5000/api";


async function http(path, { method = "GET", body, headers } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...headers
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(msg || `HTTP ${res.status}`);
  }
  // algunas rutas devuelven 204
  return res.status === 204 ? null : res.json();
}

/* ============ Auth / Usuarios ============ */
export const register = (data) => http("/auth/register", { method: "POST", body: data });
// Espera { token, user }

export const login = async (data) => {
  const r = await http("/auth/login", { method: "POST", body: data });
  // guarda sesión simple
  if (r?.token) localStorage.setItem("token", r.token);
  if (r?.user) localStorage.setItem("user", JSON.stringify(r.user));
  return r;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const me = () => http("/usuarios/me");


/* ============ Retos ============ */



/* ============ Evidencias ============ */
// subir evidencia: { usuario_id, reto_id, foto_url }


// Admin: aprobar / rechazar


/* ============ Likes ============ */

/* ============ Ranking ============ */

