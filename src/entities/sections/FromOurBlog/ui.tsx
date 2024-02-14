import React from "react";
import { Props } from "./type";
import Container from "@/shared/ui/Container";
import useRecoil from "@/shared/state/useRecoil";
import { FromOurBlogBlog } from "@/shared/state/type";
import Loader from "@/shared/ui/Loader";
import Error from "@/shared/ui/Error";
import Section from "@/shared/ui/Section";
import BlogCard from "@/shared/ui/BlogCard";
import MainTitle from "@/shared/ui/MainTitle";

export const UI: React.FC<Props> = ({ className }) => {
  const { fromOurBlog: data } = useRecoil();

  return (
    <Container className="mt-14">
      <Section>
        <MainTitle text="from_our_blog" />
        <div>
          {!data.loading && !data.error && (
            <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between">
              {data?.data?.map((item: FromOurBlogBlog, i: number) => (
                <BlogCard
                  key={i}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  href={item.slug}
                  date={item.date}
                  user={item.user}
                  description={item.description}
                  className="mt-4 lg:mt-0 first:mt-0 lg:mb-5"
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
