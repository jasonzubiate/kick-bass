import Image from "next/image";
import logo from "../../../../public/img/Secondary-Logotype-Black (02).png";
import {
  TbArrowUpRight,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandFacebook,
  TbBrandYoutube,
  TbBrandSpotify,
} from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col mx-4 lg:mx-8 mb-4 lg:mb-8 bg-hardLime text-codGray rounded-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-4/12">
          <div className="p-4 lg:p-8 border-b lg:border-r border-codGray">
            <div className="relative w-28 h-8">
              <Image
                src={logo}
                alt="logo"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="p-4 lg:p-8 border-b lg:border-r border-codGray ">
            <h2 className="text-4xl lg:text-6xl">
              Level up <br /> your music production
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 lg:gap-6 p-4 lg:p-16 lg:w-9/12 border-b border-codGray">
          <p className="default__p lg:w-7/12">
            Unleashing creativity, one beat at a time. Join our community of
            passionate producers and gain exclusive access to expert tips,
            in-depth tutorials, and the latest updates in the world of music
            production. Elevate your tracks and master the art with us.
          </p>
          <button className="flex items-center gap-2 bg-codGray text-demoSmoke uppercase rounded-full px-5 py-4">
            <span>Join Now</span>
            <TbArrowUpRight className="text-2xl text-hardLime" />
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ul className="flex gap-4 p-4 lg:p-8 border-b lg:border-b-0 lg:border-r lg:w-4/12 border-codGray">
          <li className="social__link">
            <a
              href="https://www.instagram.com/kickbassofficial/"
              target="_blank"
            >
              <TbBrandInstagram className="text-xl" />
            </a>
          </li>
          <li className="social__link">
            <a
              href="https://www.tiktok.com/@kick_bass_official?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <TbBrandTiktok className="text-xl" />
            </a>
          </li>
          <li className="social__link">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/channel/UC6VS8SkjHnIccw3WYjK6Q3A&ved=2ahUKEwj1t9ab5JyGAxUBmO4BHQn5BnYQFnoECBsQAQ&usg=AOvVaw1-oQ9KD7DVKcjgem2zBjQm"
              target="_blank"
            >
              <TbBrandYoutube className="text-xl" />
            </a>
          </li>
          <li className="social__link">
            <a href="https://www.facebook.com/Kickandbass909" target="_blank">
              <TbBrandFacebook className="text-xl" />
            </a>
          </li>
          <li className="social__link">
            <a
              href="https://open.spotify.com/user/31j5hjrfp3jsw4zs6vpoepjiwwma"
              target="_blank"
            >
              <TbBrandSpotify className="text-xl" />
            </a>
          </li>
        </ul>
        <div className="flex lg:items-center p-4 lg:py-8 lg:px-16 gap-16 lg:w-9/12 lg:justify-between">
          <ul id="sitemap" className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
            <li>
              <Link href="/community" className="footer__link">
                Community
              </Link>
            </li>
            <li>
              <Link href="/coaches" className="footer__link">
                Coaches
              </Link>
            </li>
            <li>
              <Link href="/tutorials" className="footer__link">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="footer__link">
                Pricing
              </Link>
            </li>
            <li>
              <a
                href="https://kick-bass.store/"
                target="_blank"
                className="footer__link"
              >
                Shop
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 lg:gap-8 lg:flex-row">
            <li>
              <Link href="/imprint" className="footer__link">
                Imprint
              </Link>
            </li>

            <li>
              <Link href="/contact" className="footer__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
