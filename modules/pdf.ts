import { defineNuxtModule, createResolver } from "@nuxt/kit";
import { outputFile, readFile } from "fs-extra";
import { readFileSync } from "fs";
const cheerio = require("cheerio");
const http = require("http");

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const chartaPDF = "";

    if (chartaPDF) {
      const staticFilePath = resolve(
        nuxt.options.srcDir,
        nuxt.options.dir.public,
        "." + chartaPDF
      );

      const pdfUrl = "http://localhost:1337" + chartaPDF;

      let buffer: any = false;

      http
        .get(pdfUrl, (response) => {
          const chunks = [];
          response.on("data", (chunk) => {
            chunks.push(chunk);
          });
          response.on("end", () => {
            const buffer = Buffer.concat(chunks);
            outputFile(staticFilePath, buffer)
              .then(() => console.log("PDF saved to file"))
              .catch((error) => console.error("foo", error));
          });
        })
        .on("error", (error) => {
          console.error("bar", error);
        });
    }

    nuxt.hook("build:done", async () => {
      const mainTemplate = resolve(
        nuxt.options.srcDir,
        ".output/",
        nuxt.options.dir.public,
        "index.html"
      );
      const html = readFileSync(mainTemplate);
      const $ = cheerio.load(html);
      const links = $("a");
      const pdfLinks = links.filter((i, link) => {
        const href = $(link).attr("href");
        return href && href.endsWith(".pdf");
      });
      const pdfUrls = pdfLinks.map((i, link) => $(link).attr("href")).get();

      pdfUrls.forEach((element) => {
        const staticFilePath = resolve(
          nuxt.options.srcDir,
          nuxt.options.dir.public,
          "." + element
        );

        const pdfUrl = "http://localhost:1337" + element;
        let buffer: any = false;

        http
          .get(pdfUrl, (response) => {
            const chunks = [];
            response.on("data", (chunk) => {
              chunks.push(chunk);
            });
            response.on("end", () => {
              const buffer = Buffer.concat(chunks);
              outputFile(staticFilePath, buffer)
                .then(() => console.log("PDF saved to file"))
                .catch((error) => console.error(error));
            });
          })
          .on("error", (error) => {
            console.error(error);
          });
      });
    });
  },
});
