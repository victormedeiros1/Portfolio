import React from "react";
import MetaTags, { ReactTitle } from "react-meta-tags";

function MetaTagsHead() {
  return (
    <MetaTags>
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" href="./favicon.ico" />
      <link rel="icon" href="./favicon.ico" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="José Victor - Front End Dev" />
      <meta name="description" content="ddd" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.josevictor.dev/" />
      <meta property="og:title" content="José Victor - Front End Dev" />
      <meta
        property="og:description"
        content="Hi, I’m José Victor. Nice to meet you! I started programming in 2017 and graduated as a Computer Technician at the IFRN. I want to be a great developer and I am every day studying and striving more and more to become one."
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta
        property="og:image"
        content="https://www.josevictor.dev/images/ogImage.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.josevictor.dev/" />
      <meta property="twitter:title" content="José Victor - Front End Dev" />
      <meta
        property="twitter:description"
        content="Hi, I’m José Victor. Nice to meet you! I started programming in 2017 and graduated as a Computer Technician at the IFRN. I want to be a great developer and I am every day studying and striving more and more to become one."
      />
      <meta
        property="twitter:image"
        content="https://www.josevictor.dev/images/ogImage.png"
      />
      <ReactTitle title="José Victor - Front End Dev" />
    </MetaTags>
  );
}

export default MetaTagsHead;
