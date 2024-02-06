import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "@/widgets/HomePage";
import type { GetStaticProps, NextPage } from "next";
import { Home } from "@/shared/types/pages";
import { RecoilRoot } from "recoil";
import Layout from "@/entities/Layout";
import { heroState } from "@/shared/state/atoms";
import { getHero } from "@/shared/utils/get/general";
import { HeroAtom } from "@/shared/state/type";

const Index: NextPage<Home> = ({ hero }) => {
  const initializeState = ({ set }): void => {
    set(heroState, hero);
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

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      hero,
    },
    revalidate: 1000000,
  };
};

export default Index;
