import { InfoAtom, Hero, TopCategories, WeeklyBestRecipes } from '@/shared/state/type';
import api from '../api';

export const getInfo = async (): Promise<InfoAtom> => {

  try {

    const response = await api.get('/todos');

    let data: InfoAtom = {data: null, error: false, loading: false};

    data.data = {
        title: 'The Argument In Favor Of Using Filler Text Goes Something Like This: If You Use Any Real Content In The Consulting Process Anytime You Reach.',
        images: ['https://themegenix.net/html/zaira/assets/img/blog/hr_post01.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post02.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post03.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post01.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post02.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post03.jpg']
    }

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }
};

export const getHero = async (): Promise<Hero> => {

  try {

    const response = await api.get('/todos');

    let data: Hero = {data: null, error: false, loading: false};

    data.data = [
      {
        id: 1,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img01.jpg",
        label: "BREAKFAST",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 2,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img02.jpg",
        label: "LUNCH",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 3,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img03.jpg",
        label: "DESSERT",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 4,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img04.jpg",
        label: "APPETIZER",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 5,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img01.jpg",
        label: "BREAKFAST",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 6,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img02.jpg",
        label: "LUNCH",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 7,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img03.jpg",
        label: "DESSERT",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 8,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img04.jpg",
        label: "APPETIZER",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      }
    ]

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }
};

export const getTopCategories = async (): Promise<TopCategories> => {

  try {

    const response = await api.get('/todos');

    let data: TopCategories = {data: null, error: false, loading: false};

    data.data = [
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img01.png",
        label: "breakfast",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img02.png",
        label: "dessert",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img03.png",
        label: "lunch",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img04.png",
        label: "appetizer",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img05.png",
        label: "dinner",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img06.png",
        label: "pizza",
        href: '/'
      }
    ]

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }
};

export const getWeeklyBestRecipes = async (): Promise<WeeklyBestRecipes> => {

  try {

    const response = await api.get('/todos');

    let data: WeeklyBestRecipes = {data: null, error: false, loading: false};

    data.data = [
      {
        id: 1,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img01.jpg",
        label: "BREAKFAST",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 2,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img02.jpg",
        label: "LUNCH",
        title: "Exploring The Potential Of Web Workers For Multithreading",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 3,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img03.jpg",
        label: "DESSERT",
        title: "Favorite Browned Butter Chocolate Cookies Daily Breakfast",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 4,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img04.jpg",
        label: "APPETIZER",
        title: "The Potentially Dangerous Non Sibility Of Cookie Notices",
        user_name: "ADMIN",
        href: "/"
      }
    ]

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }
};

