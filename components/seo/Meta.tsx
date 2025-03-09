import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Meta({
  title = "CoSaaS - Trova collaboratori per il tuo progetto SaaS o open source",
  description = "CoSaaS è il marketplace per connettere owner di progetti SaaS, startup e open source con collaboratori qualificati. Pubblica il tuo progetto o trova opportunità di lavoro remoto!",
  url = "https://cosaas.github.io",
  image = "",
}: MetaProps) {
  return (
    <Head>
      {/* Meta principali */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="CoSaaS Team" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="CoSaaS" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
