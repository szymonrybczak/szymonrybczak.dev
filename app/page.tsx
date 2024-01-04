import { Suspense } from "react";
import Badge from "@/components/badge";
import Image from "next/image";
import party from "./../public/images/party.png";
import berlin from "./../public/images/berlin.png";
import camera from "./../public/images/camera.png";
import rneu from "./../public/images/rneu.png";
import festival from "./../public/images/festival.png";
import { ArrowUpRight } from "lucide-react";
import Followers from "@/components/followers";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-xl mb-8">hey, I{"'"}m Szymon 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a 17 years old React Native Developer at `}
        <span className="not-prose pt-1 pl-1">
          <Badge href="https://callstack.com/">
            <Image
              alt={"Callstack logo"}
              src={"/callstack.svg"}
              width={60}
              height={14}
            />
          </Badge>
        </span>
        {`. I'm based in Cracow, PL. Currently maintaining `}
        <Badge href="https://github.com/react-native-community/cli">
          <span className="font-medium text-s px-1">
            react-native-community/cli
          </span>
        </Badge>
        <span className="pl-1">
          and focusing on bringing web concepts to native world.
        </span>
      </p>
      <div className="grid grid-cols-3 gap-4 my-8">
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

        <div className="relative h-80 row-span-2">
          <Image
            alt="Me at the 2022 EOY party"
            src={rneu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-left"
          />
        </div>

        <div className="relative h-80 col-span-2 row-span-2">
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
        😅). You can follow my work on Social Media listed below ✨
      </p>
      <div className="flex pt-6">
        <div className="group">
          <a
            href={"https://twitter.com/SzymonRybczak"}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4"
          >
            <div className="flex items-center space-x-3">
              <div className="relative h-16">
                <Image
                  alt={"Twitter avatar"}
                  src={"/images/avatar.jpg"}
                  height={64}
                  width={64}
                  sizes="33vw"
                  className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
                  priority
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="240px"
                  height="240px"
                  className="bg-white dark:bg-black dark:fill-white  border border-neutral-200 rounded-full p-1 dark:border-neutral-700 relative h-6 w-6 -top-6 -right-10"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  @SzymonRybczak
                </p>
                <Suspense fallback={<p className="h-6" />}>
                  <Followers />
                </Suspense>
              </div>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
              <ArrowUpRight />
            </div>
          </a>
        </div>

        <div className="pl-4">
          <a
            href={"https://github.com/SzymonRybczak"}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width={64}
              height={64}
              className="fill-black dark:fill-white"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
