import Badge from "@/components/badge";
import Image from "next/image";
import party from "./../public/images/party.png";
import berlin from "./../public/images/berlin.png";
import camera from "./../public/images/camera.png";
import rneu from "./../public/images/rneu.png";
import callstackHoodie from "./../public/images/callstack_hoodie.jpg";
import festival from "./../public/images/festival.png";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-xl font-medium">hey, I{"'"}m Szymon 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a 17 yo React Native Developer at `}
        <span className="not-prose pl-1 pt-1">
          <Badge href="https://callstack.com/">
            <Image
              alt={"Callstack logo"}
              src={"/callstack.svg"}
              width={65}
              height={14}
            />
          </Badge>
        </span>
        {`. I'm based in Cracow, PL. Currently maintaining `}
        <Badge href="https://github.com/react-native-community/cli">
          <span className="text-s px-1">react-native-community/cli</span>
        </Badge>
        <span className="pl-1">
          and focusing on bringing web concepts to native world.
        </span>
      </p>
      <div className="my-8 columns-2 gap-3 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={party}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Photo of me wearing Callstack's hoodie"
            src={callstackHoodie}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover "
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me answering questions after my talk at React Day Berlin"
            src={berlin}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Photo of camera recording myself delivering a talk on stage"
            src={camera}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Me, Oskar & Kuba at a company party"
            src={festival}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[60%]"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me at React Native EU 2023"
            src={rneu}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[20%]"
          />
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        On a daily basis I{"'"}m working in a Technology team, where I support
        R&D and Open Source initiatives. I{"'"}m writing a lot of technical
        content mainly about React Native and new things that are coming to the
        framework! I am also attending ZSEL 1 High School in Cracow.
      </p>
    </section>
  );
}
