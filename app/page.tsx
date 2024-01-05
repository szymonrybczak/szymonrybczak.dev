import Badge from "@/components/badge";
import Image from "next/image";
import party from "./../public/images/party.jpg";
import berlin from "./../public/images/berlin.jpg";
import camera from "./../public/images/camera.jpg";
import rneu from "./../public/images/rneu.jpg";
import festival from "./../public/images/festival.jpg";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-xl font-medium">hey, I{"'"}m Szymon 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a 17 years old React Native Developer at `}
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
          <span className="text-s px-1 font-semibold">
            react-native-community/cli
          </span>
        </Badge>
        <span className="pl-1">
          and focusing on bringing web concepts to native world.
        </span>
      </p>
      <div className="my-8 grid grid-cols-3 gap-4">
        <div className="relative h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={party}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[20%]"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={camera}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative row-span-2 h-80">
          <Image
            alt="Me at the 2022 EOY party"
            src={rneu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-left"
          />
        </div>

        <div className="relative col-span-2 row-span-2 h-80">
          <Image
            alt="Me at the 2022 EOY party"
            src={berlin}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={festival}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-right"
          />
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        On a daily basis I{"'"}m working in a Technology team, where I support
        R&D and Open Source initiatives. I{"'"}m writing a lot of technical
        content mainly about React Native and new things that are coming to the
        framework! I am also attending ZSEL 1 High School in Cracow (sometimes
        😅).
      </p>
    </section>
  );
}
