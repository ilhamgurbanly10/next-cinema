import { HeroAtom, OurMasterChefsAtom, FromOurBlogAtom } from "@/shared/state/type";

export interface Home {
    hero: HeroAtom;
    ourMasterChefs: OurMasterChefsAtom;
    fromOurBlog: FromOurBlogAtom;
}