import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/Icons";

// Defina as props do componente
type Props = {
  logoSrc: string;
  description: string;
  phoneNumber: string;
  resourcesLinks: { title: string; url: string }[];
  companyLinks: { title: string; url: string }[];
  quickLinks: { title: string; url: string }[];
};

const Footer2 = ({
  logoSrc,
  description,
  phoneNumber,
  resourcesLinks,
  companyLinks,
  quickLinks,
}: Props) => {
  return (
    <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <img src={logoSrc} alt="logo" className="max-w-full" />
              </Link>
              <p className="text-body-color mb-7 text-base">{description}</p>
              <p className="text-dark flex items-center text-sm font-medium">
                <span className="text-primary mr-3">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    className="fill-current"
                  ></svg>
                </span>
                <span>{phoneNumber}</span>
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                Resources
              </h4>
              <ul>
                {resourcesLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">Company</h4>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                Quick Links
              </h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <YoutubeIcon />
                </Link>
              </div>
              <p className="text-body-color text-base">&copy; 2025 TailGrids</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
