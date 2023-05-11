<template>
  <a :href="url">
    <button>{{ label }}</button>
  </a>
</template>

<script setup lang="ts">
import { appendHeader } from "h3";
import { useRequestEvent } from "#imports";
import fs from "fs";
import axios from "axios";

const props = defineProps({
  url: { type: String, required: true },
  label: { type: String, required: true },
});

if (process.server && process.env.prerender) {
  console.log("trying to download a pdf", props.url);
  const url = "https://kkj-backend.perspective-daily.de" + props.url;
  const filename = props.url;
  const filePath = `public${filename}`;

  // Download the file using Axios
  const response = await axios.get(url, { responseType: "stream" });

  // Create a write stream to the file
  const writer = fs.createWriteStream(filePath);

  // Pipe the response stream to the write stream
  response.data.pipe(writer);

  // Wait for the write stream to finish writing the file
  await new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}
</script>

<style lang="scss" scoped>
a:after {
  display: none !important;
}
</style>
