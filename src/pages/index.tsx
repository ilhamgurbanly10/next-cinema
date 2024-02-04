import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "@/widgets/HomePage";
import type { GetStaticProps, NextPage } from "next";
import { Home } from "@/shared/types/pages";
import { RecoilRoot } from "recoil";
import Layout from "@/entities/Layout";
import {
  infoState,
  heroState,
  topCategoriesState,
  weeklyBestRecipesState,
} from "@/shared/state/atoms";
import {
  getInfo,
  getHero,
  getTopCategories,
  getWeeklyBestRecipes,
} from "@/shared/utils/get/general";
import {
  InfoAtom,
  Hero,
  TopCategories,
  WeeklyBestRecipes,
} from "@/shared/state/type";

const Index: NextPage<Home> = ({
  info,
  hero,
  topCategories,
  weeklyBestRecipes,
}) => {
  const initializeState = ({ set }): void => {
    set(infoState, info);
    set(heroState, hero);
    set(topCategoriesState, topCategories);
    set(weeklyBestRecipesState, weeklyBestRecipes);
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
  let info: InfoAtom = { data: null, error: false, loading: true };
  info = await getInfo();

  let hero: Hero = { data: null, error: false, loading: true };
  hero = await getHero();

  let topCategories: TopCategories = {
    data: null,
    error: false,
    loading: true,
  };
  topCategories = await getTopCategories();

  let weeklyBestRecipes: WeeklyBestRecipes = {
    data: null,
    error: false,
    loading: true,
  };
  weeklyBestRecipes = await getWeeklyBestRecipes();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      info,
      hero,
      topCategories,
      weeklyBestRecipes,
    },
    revalidate: 1000000,
  };
};

export default Index;
