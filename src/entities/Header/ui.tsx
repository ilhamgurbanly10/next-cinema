import React from "react";
import { Props } from "./type";
import useModel from "./model";
import Top from "./Top";
import Container from "@/shared/ui/Container";
import Image from "@/shared/ui/Image";
import Link from "next/link";
import Navbar from "./Navbar";
import HamburgerMenu from "@/shared/ui/HamburgerMenu";
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
        <Container className="hidden lg:flex items-center justify-between bg-white">
          <div className="flex items-center">
            {/* <Navbar className="ml-8" /> */}
          </div>

          <div>
            {/* <Link href="/">
              <Image
                className="brand"
                width={171}
                height={40}
                alt={"brand"}
                src={Images.logo}
              />
            </Link> */}
          </div>
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

      {/* <HamburgerMenu show={showMenu} setShow={setShowMenu}>
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

          <MobileNavbar className="mt-6" />

          <div className="flex justify-between mt-6">
            <IconicButton
              href="/"
              isLink={true}
              icon={<FacebookFilled color="#183354" />}
            />
            <IconicButton
              href="/"
              isLink={true}
              icon={<TwitterOutlined color="#183354" />}
            />
            <IconicButton
              href="/"
              isLink={true}
              icon={<InstagramOutlined color="#183354" />}
            />
            <IconicButton
              href="/"
              isLink={true}
              icon={<LinkedinFilled color="#183354" />}
            />
            <IconicButton href="/" isLink={true} icon={<YoutubeFilled />} />
          </div>
        </div>
      </HamburgerMenu> */}
    </header>
  );
};
