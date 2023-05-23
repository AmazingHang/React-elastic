import CardItem from "../components/card/card-item.compoent";

export const contentData = Array.from(
  {
    length: 100,
  },
  (_, index) => <CardItem key={index} />
);
