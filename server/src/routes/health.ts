import type { FastifyInstance } from "fastify";

/** Health check — verifikasi server hidup (M1). */
export async function healthRoutes(app: FastifyInstance): Promise<void> {
  app.get("/api/health", async () => {
    return {
      status: "ok",
      service: "kppulse-server",
      time: new Date().toISOString(),
    };
  });
}
