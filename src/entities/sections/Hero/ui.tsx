import React from "react";
import { Props } from "./type";
import Container from "@/shared/ui/Container";
import useRecoil from "@/shared/state/useRecoil";
import { HeroAtom } from "@/shared/state/type";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";
import Carousel from "@/shared/ui/Carousel";

export const UI: React.FC<Props> = ({ className }) => {
  const { hero: data } = useRecoil();

  return (
    <Container className="mt-14">
      <div>
        {!data.loading && !data.error && (
          <Carousel autoplaySpeed={2000} pauseOnHover={true} data={data.data} />
        )}
      </div>
      <div className="w-full py-14 flex flex-col items-center">
        <Loader show={data.loading} className="text-2xl mt-8" showText={true} />

        <Error
          show={!data.loading && data.error}
          className="text-2xl mt-8"
          showText={true}
        />
      </div>
    </Container>
  );
};
