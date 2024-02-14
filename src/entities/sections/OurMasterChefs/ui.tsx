import React from "react";
import { Props } from "./type";
import Container from "@/shared/ui/Container";
import useRecoil from "@/shared/state/useRecoil";
import { OurMasterChefs } from "@/shared/state/type";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";
import Section from "@/shared/ui/Section";
import PersonCard from "@/shared/ui/PersonCard";
import MainTitle from "@/shared/ui/MainTitle";

export const UI: React.FC<Props> = ({ className }) => {
  const { ourMasterChefs: data } = useRecoil();

  return (
    <Container className="mt-0">
      <Section>
        <MainTitle text="our_master_chefs" />
        <div>
          {!data.loading && !data.error && (
            <div className="flex flex-row flex-wrap gap-4 items-center lg:items-start justify-center lg:justify-between">
              {data?.data?.map((item: OurMasterChefs, i: number) => (
                <PersonCard
                  key={i}
                  label={item.name}
                  src={item.img}
                  href={item.slug}
                  position={item.position}
                  socials={item.socials}
                  className="mt-4 lg:mt-0 first:mt-0"
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full py-14 flex flex-col items-center">
          <Loader
            show={data.loading}
            className="text-2xl mt-8"
            showText={true}
          />

          <Error
            show={!data.loading && data.error}
            className="text-2xl mt-8"
            showText={true}
          />
        </div>
      </Section>
    </Container>
  );
};
