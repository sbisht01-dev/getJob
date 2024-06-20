import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
      "process.env.REACT_APP_AUTHD_DOMAIN": JSON.stringify(
        env.REACT_APP_AUTHD_DOMAIN
      ),
      "process.env.REACT_APP_PROJECT_ID": JSON.stringify(
        env.REACT_APP_PROJECT_ID
      ),
      "process.env.REACT_APP_STORAGE_BUCKET": JSON.stringify(
        env.REACT_APP_STORAGE_BUCKET
      ),
      "process.env.REACT_APP_MESSAGIN_SENDER_ID": JSON.stringify(
        env.REACT_APP_MESSAGIN_SENDER_ID
      ),
      "process.env.REACT_APP_APP_ID": JSON.stringify(env.REACT_APP_APP_ID),
      "process.env.REACT_APP_MEASUREMENT_ID": JSON.stringify(
        env.REACT_APP_MEASUREMENT_ID
      ),
    },
    plugins: [react()],
  };
});
