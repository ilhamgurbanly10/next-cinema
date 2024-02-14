import React, { useState, useEffect } from "react";
import { Props } from "./type";
import Container from "@/shared/ui/Container";
import MainTitle from "@/shared/ui/MainTitle";
import Section from "@/shared/ui/Section";
import CounterCard from "@/shared/ui/CounterCard";
import { data } from "./data";
import { Data } from "./type";
import { useWindow } from "@/shared/hooks";
export const UI: React.FC<Props> = ({ className }) => {
  const { isElementInViewport } = useWindow();
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const handleScroll = (): void => {
    const el = document.getElementById(`ourResults`);
    isElementInViewport(el) ? setIsInViewport(true) : null;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Container className="mt-0">
      <MainTitle text="our_results" />
      <div
        style={{
          backgroundImage: `url("http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/counter-up-bg-1.jpg")`,
        }}
        className={`py-20 mt-6 w-full relative bg-center bg-cover inset-0`}
        id="ourResults"
      >
        <div className="bg-overlay absolute z-10 w-full inset-0 h-full"></div>
        <Section className="relative z-20">
          <div className="flex flex-col gap-5 flex-wrap lg:flex-row items-center justify-between">
            {isInViewport &&
              data?.map((item: Data, i: number) => (
                <CounterCard
                  key={i}
                  label={item.label}
                  speed={100}
                  addedCount={2}
                  count={item.count}
                  index={i}
                />
              ))}
          </div>
        </Section>
      </div>
    </Container>
  );
};
