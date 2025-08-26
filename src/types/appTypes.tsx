import type { ReactNode } from "react";

/**************** App Wrapper ******************* */

export type AppWrapperProps = {
  children: ReactNode;
  className?: string;
  wrapperbgcolor?: string;
};

/**************** Menu navbar ******************* */

export type MenuNavbarProps = {
  isOpen: boolean;
  closeModal: () => void;
};

/**************** Custom Button ******************* */

export type CustomButtonProps = {
  width?: string;
  height?: string;
  textColor?: string;
  bgColor?: string;
  label: string;
  icon?: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  loader?: boolean;
  loaderColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
  disabled?: boolean;
};

/**************** Services section a ******************* */

export type ServicesSectionAProps = {
  topText: string;
  bottomText: string;
  sideText: string;
  image1: string;
  image2: string;
};

/**************** Services section b ******************* */

export type ServicesSectionBProps = {
  headerText: string;
  topText: string;
  image1: string;
  image2: string;
  otherParagraphs: string[];
};

/**************** Services qualities card ******************* */

export type ServicesQualitiesCardType = {
  image: string;
  titleText: string;
  bodyText: string;
  bgColor: string;
};

export type ServicesQualitiesCardProps = {
  item: ServicesQualitiesCardType;
};

/**************** Services portfolio card ******************* */

export type ServicesPortfolioCardType = {
  icon: string;
  titleText: string;
  description: string;
  investment_focus: string;
  minimum_investment: string;
  holding_period: string;
  target_returns: string;
  ideal_for: string;
};

export type ServicesPortfolioCardProps = {
  item: ServicesPortfolioCardType;
};

/**************** Schedule a consultation ******************* */

export type ScheduleAConsultationProp = {
  image: string;
  title: string;
  body: string;
  buttonName: string;
};

/**************** Services process card ******************* */

export type ServicesProcessCardType = {
  number: string;
  title: string;
  description: string;
};

export type ServicesProcessCardProps = {
  item: ServicesProcessCardType;
  color?: string
};

/**************** our services card ******************* */

export type OurServicesCardType = {
  icon: string;
  titleText: string;
  description: string;
  offer: string[];
};

export type OurServicesCardProps = {
  item: OurServicesCardType;
  screen?: string;
};

/**************** success stories card ******************* */

export type SuccessStoriesCardType = {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
};

export type SuccessStoriesCardProps = {
  item: SuccessStoriesCardType;
};

/**************** our investment solutions card ******************* */

export type OurInvestmentSolutionsCardType = {
  icon: string;
  image: string;
  title: string;
  description: string;
  routeTo: string
};

export type OurInvestmentSolutionsCardProps = {
  item: OurInvestmentSolutionsCardType;
};

/**************** carousel component ******************* */

export type CarouselComponentType = {
  image: string;
};

export type CarouselComponentTypeProps = {
  slideImages: CarouselComponentType[];
};