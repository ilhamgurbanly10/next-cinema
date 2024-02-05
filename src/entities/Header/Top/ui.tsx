import React from "react";
import { useTranslation } from "next-i18next";
import TextButton from "@/shared/ui/Buttons/TextButton";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
  YoutubeFilled,
  User,
  UserAdd,
} from "@/shared/icons";
import Container from "@/shared/ui/Container";
import Section from "@/shared/ui/Section";

export const UI: React.FC = ({}) => {
  const { t } = useTranslation("common");

  return (
    <div className="header-top bg-primary-blue w-full hidden lg:block text-white py-4">
      <Container>
        <Section className="flex items-center justify-between">
          <div className="flex items-center">
            <TextButton href={"/"} text={<FacebookFilled />} className="mr-4" />
            <TextButton
              href={"/"}
              text={<TwitterOutlined />}
              className="mr-4"
            />
            <TextButton
              href={"/"}
              text={<InstagramOutlined />}
              className="mr-4"
            />
            <TextButton href={"/"} text={<YoutubeFilled />} className="mr-4" />
            <TextButton href={"/"} text={<LinkedinFilled />} />
          </div>

          <div className="flex items-center">
            <TextButton
              href={"/"}
              text={
                <span className="flex items-center uppercase">
                  <User />
                  <span className="ml-2">{t("sign_in")}</span>
                </span>
              }
              className="mr-4"
            />
            <TextButton
              href={"/"}
              text={
                <span className="flex items-center uppercase">
                  <UserAdd />
                  <span className="ml-2">{t("sign_up")}</span>
                </span>
              }
              className=""
            />
          </div>
        </Section>
      </Container>
    </div>
  );
};
