import Image from "next/image";
import texts from "./texts.json";
import { SectionContainer } from "../SectionContainer";

export const Hero = () => (
  <SectionContainer>
    <header className="flex flex-col">
      <h1 className="text-center uppercase font-bold border-y-2 py-4">{texts.title}</h1>
      <div className="flex flex-row justify-between items-center border-b-2 py-4">
        <h3>{texts.event_date}</h3>
        <h3>{texts.event_location}</h3>
        <figure>
          <Image
            src="/images/logo.png"
            alt={texts.logo_alt}
            width={75}
            height={41}
            priority
          />
        </figure>
      </div>
    </header>
    <figure className="border-b-2 py-6">
      <Image
        src="/images/hero.jpg"
        alt={texts.hero_alt}
        width={1920}
        height={1080}
        priority
      />
    </figure>
  </SectionContainer>
);