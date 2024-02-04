import { InfoAtom, Hero, TopCategories, WeeklyBestRecipes } from "@/shared/state/type";

export interface Home {
    info: InfoAtom;
    hero: Hero;
    topCategories: TopCategories;
    weeklyBestRecipes: WeeklyBestRecipes;
}