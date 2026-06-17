import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from "url"

const src = fileURLToPath(new URL("./src", import.meta.url))

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": `${src}/components`,
        "@layouts": `${src}/layouts`,
        "@lib": `${src}/lib`,
        "@stores": `${src}/stores`,
        "@types": `${src}/types`,
        "@utils": `${src}/utils`,
      },
    },
  },
  output: "static",
})
