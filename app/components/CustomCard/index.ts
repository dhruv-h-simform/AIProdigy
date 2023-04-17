import CustomCard from './CustomCard';
import UsersCard from './UsersCard';

const Card = Object.assign(CustomCard, {
  UsersCard: UsersCard,
});

export default Card;
export type { CustomCardProps, UsersCardProps } from './types';
