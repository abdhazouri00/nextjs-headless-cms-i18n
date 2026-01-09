import Navbar from "./navbar";

async function getNavbarData(locale) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/navbar?locale=${locale}&populate=*`,
    { next: { revalidate: 60 } }
  );
  const response = await res.json();
  return response.data;
}

export default async function NavbarWrapper({ locale }) {
  const data = await getNavbarData(locale);
  const strapiLinks = data?.links || [];

  return <Navbar strapiLinks={strapiLinks} locale={locale} />;
}
