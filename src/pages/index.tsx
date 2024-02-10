import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "@/widgets/HomePage";
import type { GetStaticProps, NextPage } from "next";
import { Home } from "@/shared/types/pages";
import { RecoilRoot } from "recoil";
import Layout from "@/entities/Layout";
import {
  heroState,
  ourMasterChefsState,
  fromOurBlogState,
} from "@/shared/state/atoms";
import {
  getHero,
  getOurMaterChefs,
  getFromOurBlog,
} from "@/shared/utils/get/general";
import {
  HeroAtom,
  OurMasterChefsAtom,
  FromOurBlogAtom,
} from "@/shared/state/type";

const Index: NextPage<Home> = ({ hero, ourMasterChefs, fromOurBlog }) => {
  const initializeState = ({ set }): void => {
    set(heroState, hero);
    set(ourMasterChefsState, ourMasterChefs);
    set(fromOurBlogState, fromOurBlog);
  };

  return (
    <RecoilRoot initializeState={initializeState}>
      <Layout>
        <HomePage />
      </Layout>
    </RecoilRoot>
  );
};

export const getStaticProps: GetStaticProps<Home> = async ({ locale }) => {
  let hero: HeroAtom = { data: null, error: false, loading: true };
  hero = await getHero();

  let ourMasterChefs: OurMasterChefsAtom = {
    data: null,
    error: false,
    loading: true,
  };
  ourMasterChefs = await getOurMaterChefs();

  let fromOurBlog: FromOurBlogAtom = {
    data: null,
    error: false,
    loading: true,
  };
  fromOurBlog = await getFromOurBlog();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      hero,
      ourMasterChefs,
      fromOurBlog,
    },
    revalidate: 1000000,
  };
};

export default Index;
