import React from "react";
import MetaTags, { ReactTitle } from "react-meta-tags";

function MetaTagsHead() {
  return (
    <MetaTags>
      <meta charset="utf-8" />
      <link rel="apple-touch-icon" href="./favicon.ico" />
      <link rel="icon" href="./favicon.ico" />
      <meta
        name="description"
        content="Hi, I’m José Victor. Nice to meet you! I started programming in 2017 and graduated as a Computer Technician at the IFRN. I want to be a great developer and I am every day studying and striving more and more to become one."
      />

      <meta property="og:url" content="https://www.josevictor.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="José Victor - Front End Dev" />
      <meta
        property="og:description"
        content="Hi, I’m José Victor. Nice to meet you!"
      />
      <meta property="og:image" content="./ogImage.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="josevictor.dev" />
      <meta property="twitter:url" content="https://www.josevictor.dev/" />
      <meta name="twitter:title" content="José Victor - Front End Dev" />
      <meta
        name="twitter:description"
        content="Hi, I’m José Victor. Nice to meet you!"
      />
      <meta name="twitter:image" content="./ogImage.png" />

      <meta name="author" content="José Victor" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <ReactTitle title="José Victor - Front End Dev" />
    </MetaTags>
  );
}

export default MetaTagsHead;
