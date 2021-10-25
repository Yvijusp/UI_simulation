import ServiceLogo from './assets/icons/service.png';
import ExpertLogo from './assets/icons/expert.png';
import DollarLogo from './assets/icons/dollar.png';
import {
  Battery,
  CarBody,
  CustomService,
  Diagnostics,
  Engine,
  Insurance,
  Oil,
  Wheel,
} from './assets/icons';

import Jonathan from './assets/images/Avatars/Jonathan.png';
import Smith from './assets/images/Avatars/Smith.png';
import { OverlayCardProps } from './components/Cards/OverlayCards';
import CarBack from './assets/images/carbackcard.png';
import CarEngine from './assets/images/carbatterycard.png';
import { Devon, Jalen, Javena, Kylee, Luisa, Paul } from './assets/images';

export const features = [
  {
    image: ServiceLogo,
    title: 'Conveniet service',
    body: 'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    image: ExpertLogo,
    title: 'Expert mechanics',
    body: 'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    image: DollarLogo,
    title: 'Transparent pricing',
    body: 'Through True Rich Attended does no end it his mother since real had half every him.',
  },
];

export const steps = [
  {
    title: 'Get a Quote',
    body: 'Through True Rich Attended does no end it his mother since real had half every',
  },
  {
    title: 'Book an Appointment',
    body: 'Through True Rich Attended does no end it his mother since real',
  },
  {
    title: 'Get your Service Done',
    body: 'Ecstatic unsatiable saw his giving Remain expense you position concluded.',
  },
];

export const offers = [
  {
    Icon: Diagnostics,
    title: 'Diagnostics',
    primary: false,
  },
  {
    Icon: Engine,
    title: 'Engine Repair',

    primary: false,
  },
  {
    Icon: Wheel,
    title: 'Wheel Repair',
    primary: true,
  },
  {
    Icon: Oil,
    title: 'Oil Filter',
    primary: false,
  },
  {
    Icon: CarBody,
    title: 'Body Work',
    primary: false,
  },
  {
    Icon: Battery,
    title: 'Batteries',
    primary: false,
  },
  {
    Icon: Insurance,
    title: 'Insurance Claim',
    primary: false,
  },
  {
    Icon: CustomService,
    title: 'Custom Service',
    primary: false,
  },
];

export const experiences = [
  {
    heading: '20+',
    title: 'Proffesional',
  },
  {
    heading: '10+',
    title: 'Years Experience',
  },
  {
    heading: '12K+',
    title: 'Service Closed',
  },
  {
    heading: '100%',
    title: 'Customer Satisfaction',
  },
];

export const brands = [
  {
    name: 'brand1',
  },
  {
    name: 'brand2',
  },
  {
    name: 'brand3',
  },
  {
    name: 'brand4',
  },
  {
    name: 'brand5',
  },
  {
    name: 'brand1',
  },
  {
    name: 'brand2',
  },
  {
    name: 'brand3',
  },
  {
    name: 'brand4',
  },
  {
    name: 'brand5',
  },
];

export const testimonials = [
  {
    avatar: Jonathan,
    name: 'Jonathan Vallem',
    city: 'New York',
    body: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
  },
  {
    avatar: Smith,
    name: 'Smith Johnson',
    city: 'New York',
    body: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
  },
  {
    avatar: Smith,
    name: 'Smith Johson',
    city: 'New York',
    body: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
  },
  {
    avatar: Smith,
    name: 'Smith Johnson',
    city: 'New York',
    body: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
  },
  {
    avatar: Jonathan,
    name: 'John Smith',
    city: 'Chicago',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus eget urna vitae rhoncus. Sed quis mauris dapibus, bibendum lorem. ',
  },
  {
    avatar: Smith,
    name: 'Alex Mercer',
    city: 'London',
    body: 'Phasellus eu interdum neque. Nulla vitae placerat dolor. Ut in volutpat orci. Aliquam ac dui quam. Vivamus libero felis, maximus.',
  },
  {
    avatar: Jonathan,
    name: 'Jonathan Vallem',
    city: 'New York',
    body: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
  },
  {
    avatar: Smith,
    name: 'Smith Johnson',
    city: 'New York',
    body: 'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working',
  },
];

export const faqs = [
  {
    question: 'How long should a car repair take?',
    answer:
      'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet',
  },
  {
    question: "How do I schedule my car's appointment ?",
    answer:
      'Quisque luctus, magna in finibus egestas, nunc purus sollicitudin orci, vitae commodo enim ante ut dui. Suspendisse orci erat, sagittis non odio non, tincidunt finibus.',
  },
  {
    question: 'What are the repair services provided?',
    answer:
      'Praesent convallis, eros ac varius cursus, lacus lorem bibendum elit, non blandit mi velit in quam. Quisque auctor pharetra faucibus. Duis porta consequat turpis eu sodales. Orci varius natoque penatibus et magnis dis.',
  },
  {
    question: 'How do I find auto body shops near me?',
    answer:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.',
  },
  {
    question: 'Genuine spare parts during car repair?',
    answer:
      'Vestibulum tempor arcu ante, non auctor sapien laoreet eu. Integer ornare tortor ac leo aliquet viverra. Ut eu justo luctus, placerat urna ut, dictum libero. Donec et mauris sollicitudin, aliquet mi vitae, consectetur neque. Donec mi dui, dictum in scelerisque sed, posuere nec nunc. Vivamus commodo, est vel finibus porttitor, nisl.',
  },
];

export const overlayCardContent: OverlayCardProps[] = [
  {
    title: 'Serve our customers and always deliver the customer service',
    image: CarBack,
    body: 'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes',
    color: 'primary',
  },
  {
    title: 'To be the world’s most eader in automotive business solutions.',
    image: CarEngine,
    body: 'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes',
    color: 'dark',
  },
  {
    title: 'We value the service we provide and our loyal returning customers ',
    image: CarEngine,
    body: 'We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes ',
    color: 'secondary',
  },
];

export const team = [
  {
    image: Javena,
    name: 'Javena Melo',
    position: 'Founder, Director',
  },
  {
    image: Paul,
    name: 'Paul Honson',
    position: 'Head Technician',
  },
  {
    image: Devon,
    name: 'Devon Lane',
    position: 'Technician',
  },
  {
    image: Jalen,
    name: 'Jalen Davies',
    position: 'Marketing Manager',
  },
  {
    image: Kylee,
    name: 'Kylee Danford',
    position: 'Sales Manager',
  },
  {
    image: Luisa,
    name: 'Luisa Wilson',
    position: 'Support Assistant',
  },
];
