import House1 from 'assets/houses/House1.webp';
import House2 from 'assets/houses/House2.webp';
import House3 from 'assets/houses/House3.webp';
import House4 from 'assets/houses/House4.webp';
import House5 from 'assets/houses/House5.webp';
import House6 from 'assets/houses/House6.webp';
import House7 from 'assets/houses/House7.webp';
import House8 from 'assets/houses/House8.webp';
import House9 from 'assets/houses/House9.webp';
import House10 from 'assets/houses/House10.webp';
import House11 from 'assets/houses/House11.webp';
import House12 from 'assets/houses/House12.webp';
import House13 from 'assets/houses/House13.webp';
import House14 from 'assets/houses/House14.webp';
import House15 from 'assets/houses/House15.webp';
import House16 from 'assets/houses/House16.webp';
import House17 from 'assets/houses/House17.webp';
import House18 from 'assets/houses/House18.webp';



export const locations = [
  { value: 'Abia', label: 'Abia' },
  { value: 'Adamawa', label: 'Adamawa' },
  { value: 'Akwa Ibom', label: 'Akwa Ibom' },
  { value: 'Anambra', label: 'Anambra' },
  { value: 'Bauchi', label: 'Bauchi' },
  { value: 'Bayelsa', label: 'Bayelsa' },
  { value: 'Benue', label: 'Benue' },
  { value: 'Borno', label: 'Borno' },
  { value: 'Cross River', label: 'Cross River' },
  { value: 'Delta', label: 'Delta' },
  { value: 'Ebonyi', label: 'Ebonyi' },
  { value: 'Edo', label: 'Edo' },
  { value: 'Ekiti', label: 'Ekiti' },
  { value: 'Enugu', label: 'Enugu' },
  { value: 'Gombe', label: 'Gombe' },
  { value: 'Imo', label: 'Imo' },
  { value: 'Jigawa', label: 'Jigawa' },
  { value: 'Kaduna', label: 'Kaduna' },
  { value: 'Kano', label: 'Kano' },
  { value: 'Katsina', label: 'Katsina' },
  { value: 'Kebbi', label: 'Kebbi' },
  { value: 'Kogi', label: 'Kogi' },
  { value: 'Kwara', label: 'Kwara' },
  { value: 'Lagos', label: 'Lagos' },
  { value: 'Nasarawa', label: 'Nasarawa' },
  { value: 'Niger', label: 'Niger' },
  { value: 'Ogun', label: 'Ogun' },
  { value: 'Ondo', label: 'Ondo' },
  { value: 'Osun', label: 'Osun' },
  { value: 'Oyo', label: 'Oyo' },
  { value: 'Plateau', label: 'Plateau' },
  { value: 'Rivers', label: 'Rivers' },
  { value: 'Sokoto', label: 'Sokoto' },
  { value: 'Taraba', label: 'Taraba' },
  { value: 'Yobe', label: 'Yobe' },
  { value: 'Zamfara', label: 'Zamfara' },
  { value: 'FCT', label: 'FCT' },
];

export const propertyTypes = [
  { value: 'Any', label: 'Any' },
  { value: 'Self Contain', label: 'Self Contain' },
  { value: 'Mini Flats', label: 'Mini Flats' },
  { value: 'Flats/Apartments', label: 'Flat/Apartments' },
  { value: 'Semi Detached Bungalow', label: 'Semi Detached Bungalow' },
  { value: 'Detached Bungalow', label: 'Detached Bungalow' },
  { value: 'Semi Detached Duplex', label: 'Semi Detached Duplex' },
  { value: 'Detached Duplex', label: 'Detached Duplex' },
  { value: 'Terraced Duplex', label: 'Terraced Duplex' },
];

export const prices = [
  { value: '< ₦200,000', label: '< ₦200,000' },
  { value: '₦200,000 - ₦400,000', label: '₦200,000 - ₦400,000' },
  { value: '₦400,000 - ₦600,000', label: '₦400,000 - ₦600,000' },
  { value: '₦600,000 - ₦800,000', label: '₦600,000 - ₦800,000' },
  { value: '₦800,000 - ₦1,000,000', label: '₦800,000 - ₦1,000,000' },
  { value: '₦1,000,000 - ₦1,200,000', label: '₦1,000,000 - ₦1,200,000' },
  { value: '₦1,200,000 - ₦1,400,000', label: '₦1,200,000 - ₦1,400,000' },
  { value: '₦1,400,000 - ₦1,600,000', label: '₦1,400,000 - ₦1,600,000' },
  { value: '₦1,600,000 - ₦2,000,000', label: '₦1,600,000 - ₦2,000,000' },
  { value: '₦2,000,000 - ₦5,000,000', label: '₦2,000,000 - ₦5,000,000' },
];

export const bedrooms = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];
export const advancedSearches = [
  {
    value: '24/7 Power Supply',
    label: '24/7 Power Supply',
    checked: false,
    id: 1,
  },
  { value: 'Air Condition', label: 'Air Condition', checked: false, id: 2 },
  { value: 'Generator', label: 'Generator', checked: false, id: 3 },
  { value: 'Big compound', label: 'Big compound', checked: false, id: 4 },
  { value: 'BQ Cottage', label: 'BQ Cottage', checked: false, id: 5 },
  { value: 'Central Heating', label: 'Central Heating', checked: false, id: 6 },
  {
    value: 'Cleaning Service',
    label: 'Cleaning Service',
    checked: false,
    id: 7,
  },
  { value: 'Dining Room', label: 'Dining Room', checked: false, id: 8 },
  { value: 'Dryer', label: 'Dryer', checked: false, id: 9 },
  { value: 'Ensuite', label: 'Ensuite', checked: false, id: 10 },
  {
    value: 'Fire Extinguish',
    label: 'Fire Extinguish',
    checked: false,
    id: 11,
  },
  { value: 'Furnished', label: 'Furnished', checked: false, id: 12 },
  { value: 'Garden', label: 'Garden', checked: false, id: 13 },
  { value: 'Gate Fenced', label: 'Gate Fenced', checked: false, id: 14 },
  {
    value: 'Generator House',
    label: 'Generator House',
    checked: false,
    id: 15,
  },
  { value: 'Gerrad Roof', label: 'Gerrad Roof', checked: false, id: 16 },
  { value: 'Gym', label: 'Gym', checked: false, id: 17 },
  { value: 'Laundry', label: 'Laundry', checked: false, id: 18 },
  { value: 'Lounge', label: 'Lounge', checked: false, id: 19 },
  { value: 'Microwave', label: 'Microwave', checked: false, id: 20 },
  { value: 'Swimming Pool', label: 'Swimming Pool', checked: false, id: 21 },
  { value: 'Parking', label: 'Parking', checked: false, id: 22 },
  { value: 'Refridgerator', label: 'Refridgerator', checked: false, id: 23 },
  { value: 'Sauna', label: 'Sauna', checked: false, id: 24 },
  { value: 'Security', label: 'Security', checked: false, id: 25 },
  { value: 'TV Cable', label: 'TV Cable', checked: false, id: 26 },
  { value: 'Wifi', label: 'Wifi', checked: false, id: 27 },
  { value: 'Pets Allowed', label: 'Pets Allowed', checked: false, id: 28 },
  { value: 'Elevator', label: 'Elevator', checked: false, id: 29 },
  { value: 'Protectors', label: 'Protectors', checked: false, id: 30 },
];

export const postHouseRegLinks = [
  {
    id: 0,
    name: 'Address',
    tab: 'address',
    disabled: false,
    isActive: true,
  },
  {
    id: 1,
    name: 'Descriptions',
    tab: 'desc',
    disabled: true,
    isActive: false,
  },
  {
    id: 2,
    name: 'Features',
    tab: 'features',
    disabled: true,
    isActive: false,
  },
  {
    id: 3,
    name: 'Price',
    tab: 'price',
    disabled: true,
    isActive: false,
  },
  {
    id: 4,
    name: 'Photos',
    tab: 'photo',
    disabled: true,
    isActive: false,
  },
  // {
  //   id: 5,
  //   name: 'Upload',
  //   tab: 'upload',
  //   disabled: true,
  // },
];
export const Bathrooms =[
  { value: 'Bathrooms', label: 'Bathrooms' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
]
export const Bedrooms =[
  { value: 'Bedrooms', label: 'Bedrooms' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
]
export const apartments = [
  {
    id: 1,
    image: House1,
    price: '10,000',
    location: 'Adigbe, Abeokuta',
    propertyType: 'Mini Flat',
    bedroomNumber: 1,
    bathroomNumber: 1,
    status: 'approved'
  },
  {
    id: 2,
    image: House2,
    price: '15,000',
    location: 'Lafenwa, Abeokuta',
    propertyType: 'Semi Detached Bungalow',
    bedroomNumber: 3,
    bathroomNumber: 2,
    status: 'declined'

  },
  {
    id: 3,
    image: House3,
    price: '10,000',
    location: 'Adigbe, Abeokuta',
    propertyType: 'Mini Flat',
    bedroomNumber: 2,
    bathroomNumber: 2,
    status: 'pending'
  },
  {
    id: 4,
    image: House4,
    price: '10,000',
    location: 'Adigbe, Abeokuta',
    propertyType: 'Mini Flat',
    bedroomNumber: 2,
    bathroomNumber: 2,
    status: 'approved'
  },
  {
    id: 5,
    image: House5,
    price: '10,000',
    location: 'Adigbe, Abeokuta',
    propertyType: 'Mini Flat',
    bedroomNumber: 2,
    bathroomNumber: 2,
    status: 'approved'
  },

  {
    id: 6,
    image: House6,
    price: '10,000',
    location: 'Adigbe, Abeokuta',
    propertyType: 'Mini Flat',
    bedroomNumber: 2,
    bathroomNumber: 2,
    status: 'approved'
  },
  {
    id: 7,
    image: House7,
    price: '10,000',
    location: 'Ikeja, Lagos',
    propertyType: 'Mini Flat',
    bedroomNumber: 1,
    bathroomNumber: 2,
  },
  {
    id: 8,
    image: House8,
    price: '12,000',
    location: 'Lekki, Lagos',
    propertyType: 'Semi detached duplex',
    bedroomNumber: 4,
    bathroomNumber: 5,
  },
  {
    id: 9,
    image: House9,
    price: '10,000',
    location: 'VI, Lagos',
    propertyType: 'Semi detached duplex',
    bedroomNumber: 2,
    bathroomNumber: 3,
  },
  {
    id: 10,
    image: House10,
    price: '10,000',
    location: 'Adigbe, Abeokuta',
    propertyType: '3 Bedroom bungalow',
    bedroomNumber: 3,
    bathroomNumber: 3,
  },
  {
    id: 11,
    image: House11,
    price: '12,000',
    location: 'Camp, Abeokuta',
    propertyType: '2 Bedroom bungalow',
    bedroomNumber: 2,
    bathroomNumber: 1,
  },
  {
    id: 12,
    image: House12,
    price: '10,000',
    location: 'Ikoyi, Lagos',
    propertyType: 'Semi detached duplex',
    bedroomNumber: 2,
    bathroomNumber: 1,
  },
  {
    id: 13,
    image: House13,
    price: '10,000',
    location: 'Egbeda, Lagos',
    propertyType: '2 Bedroom flat',
    bedroomNumber: 3,
    bathroomNumber: 3,
  },
  {
    id: 14,
    image: House14,
    price: '12,000',
    location: 'Ikeja, Lagos',
    propertyType: '3 Bedroom flat',
    bedroomNumber: 3,
    bathroomNumber: 1,
  },
  {
    id: 15,
    image: House15,
    price: '10,000',
    location: 'Ewang Estate, Abeokuta',
    propertyType: '2 Bedroom flat',
    bedroomNumber: 2,
    bathroomNumber: 1,
  },
  {
    id: 16,
    image: House16,
    price: '10,000',
    location: 'Ajah, Lagos',
    propertyType: '2 Bedroom flat',
    bedroomNumber: 3,
    bathroomNumber: 3,
  },
  {
    id: 17,
    image: House17,
    price: '12,000',
    location: 'Mushin, Lagos',
    propertyType: '3 Bedroom flat',
    bedroomNumber: 3,
    bathroomNumber: 1,
  },
  {
    id: 18,
    image: House18,
    price: '10,000',
    location: 'Lafenwa, Abeokuta',
    propertyType: '2 Bedroom flat',
    bedroomNumber: 1,
    bathroomNumber: 1,
  },
];
export default apartments;
