import Header from "../components/Header";
import { getDictionary } from "./dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      
    </>
  );
}
