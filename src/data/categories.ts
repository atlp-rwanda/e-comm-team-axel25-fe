import {
  FaLaptop,
  FaMobileAlt,
  FaTshirt,
  FaShoppingBag,
  FaBabyCarriage,
  FaGlasses,
} from 'react-icons/fa';
import { IoIosFitness } from 'react-icons/io';
import { GiSpeaker } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import {
  BsHouseDoor,
  BsBook,
  BsCameraVideo,
  BsMic,
  BsFlower1,
} from 'react-icons/bs';
import { RiFlightTakeoffLine, RiGamepadLine } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';

export const categories = [
  {
    label: 'Electronics',
    icon: FaLaptop,
    description: 'Find the latest technology gadgets and devices',
  },
  {
    label: 'Fashion',
    icon: FaTshirt,
    description: 'Discover the latest trends in fashion and style',
  },
  {
    label: 'Health & Beauty',
    icon: FaMobileAlt,
    description: 'Get the best deals on health and beauty products',
  },
  {
    label: 'Home & Living',
    icon: GiSpeaker,
    description: 'Find the best deals on home and living products',
  },
  {
    label: 'Baby & Kids',
    icon: FaBabyCarriage,
    description: 'Discover the latest baby and kids products',
  },
  {
    label: 'Pet Supplies',
    icon: MdPets,
    description: 'Find everything your pet needs',
  },
  {
    label: 'Sports & Fitness',
    icon: IoIosFitness,
    description: 'Get in shape with the latest sports and fitness products',
  },
  {
    label: 'Bags & Accessories',
    icon: FaShoppingBag,
    description: 'Find the perfect accessories to complete your outfit',
  },
  {
    label: 'Eyewear',
    icon: FaGlasses,
    description: 'Find the latest eyewear trends and styles',
  },
  {
    label: 'Home Appliances',
    icon: BsHouseDoor,
    description: 'Upgrade your home with the latest appliances',
  },
  {
    label: 'Books & Stationery',
    icon: BsBook,
    description: 'Find the latest books and stationery products',
  },
  {
    label: 'Cameras & Accessories',
    icon: BsCameraVideo,
    description:
      "Capture life's moments with the latest cameras and accessories",
  },
  {
    label: 'Audio & Music',
    icon: BsMic,
    description:
      'Experience high-quality sound with the latest audio and music products',
  },
  {
    label: 'Travel',
    icon: RiFlightTakeoffLine,
    description: 'Discover new destinations with the latest travel products',
  },
  {
    label: 'Cars & Automotive',
    icon: AiFillCar,
    description:
      'Upgrade your ride with the latest car and automotive products',
  },
  {
    label: 'Gaming',
    icon: RiGamepadLine,
    description: 'Get your game on with the latest gaming products',
  },
  {
    label: 'Flowers & Gifts',
    icon: BsFlower1,
    description: 'Find the perfect gift for your loved ones',
  },
];
