import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineMapPin,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub, 
  FaLinkedin, 
  FaX, 
  FaSpotify, 
  FaYelp, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaWhatsapp, 
  FaReddit, 
  FaTelegram, 
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  mapPin: HiOutlineMapPin,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  yelp: FaYelp,
  spotify: FaSpotify,
  instagram: FaInstagram,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  java: FaJava,
  python: FaPython,
  sql: FaDatabase,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
