import React from "react";
import { Props } from "./type";
import useModel from "./model";
import Top from "./Top";
import Container from "@/shared/ui/Container";
import Image from "@/shared/ui/Image";
import Link from "next/link";
import Navbar from "./Navbar";
import Search from "./Search";
import HamburgerMenu from "@/shared/ui/HamburgerMenu";
import Section from "@/shared/ui/Section";
import IconicButton from "@/shared/ui/Buttons/IconicButton";
import {
  Bars,
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinFilled,
  YoutubeFilled,
} from "@/shared/icons";
import MobileNavbar from "./MobileNavbar";
import Images from "@/shared/images";

export const UI: React.FC<Props> = ({}) => {
  const { showMenu, setShowMenu } = useModel();

  return (
    <header className="header">
      <Top />

      <div className="border-b">
        <Container>
          <Section className="hidden lg:flex items-center py-6 justify-between bg-white">
            <div className="flex items-center">
              <Navbar className="" />
            </div>

            <div>
              <Link href="/">
                <Image
                  className="brand"
                  width={171}
                  height={40}
                  alt={"brand"}
                  src={Images.logo}
                />
              </Link>
            </div>

            <Search />
          </Section>
        </Container>

        <Container className="flex lg:hidden items-center justify-between p-4 bg-white">
          <div>
            <Link href="/">
              <Image
                className="brand"
                width={171}
                height={40}
                alt={"brand"}
                src={Images.logo}
              />
            </Link>
          </div>

          <button
            type="button"
            className="text-4xl"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <Bars color="#F4796C" />
          </button>
        </Container>
      </div>

      <HamburgerMenu show={showMenu} setShow={setShowMenu}>
        <div>
          <div className="mt-8">
            <Link href="/">
              <Image
                className="brand"
                width={171}
                height={40}
                alt={"brand"}
                src={Images.logo}
              />
            </Link>
          </div>

          <Search className="mt-4" rounded={false} />

          <MobileNavbar className="mt-6" />

          <div className="flex justify-between mt-6">
            <IconicButton
              colorClassName="text-primary-blue"
              href="/"
              isLink={true}
              icon={<FacebookFilled />}
            />
            <IconicButton
              href="/"
              colorClassName="text-primary-blue"
              isLink={true}
              icon={<TwitterOutlined />}
            />
            <IconicButton
              href="/"
              colorClassName="text-primary-blue"
              isLink={true}
              icon={<InstagramOutlined />}
            />
            <IconicButton
              href="/"
              colorClassName="text-primary-blue"
              isLink={true}
              icon={<LinkedinFilled />}
            />
            <IconicButton
              href="/"
              colorClassName="text-primary-blue"
              isLink={true}
              icon={<YoutubeFilled />}
            />
          </div>
        </div>
      </HamburgerMenu>
    </header>
  );
};
