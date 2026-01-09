import HeroSection from "./hero-section";

async function getHeroData(locale) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/hero?locale=${locale}&populate=*`
  );
  const response = await res.json();
  return response.data;
}

export default async function HeroWrapper({ locale }) {
  const data = await getHeroData(locale);
  return <HeroSection strapiData={data} />;
}
