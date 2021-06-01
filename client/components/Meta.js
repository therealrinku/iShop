import Head from "next/head";

export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      <link rel="icon" href="https://image.flaticon.com/icons/png/128/743/743007.png" />
      <meta name="description" content={description} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "mobyoxx",
  description: "shop without hesitation",
};
