type ProductCardProps = {
 item: {
  name: string;
  sellIn: number;
  quality: number;
 };
};

export default function ProductCard({ item }: ProductCardProps) {
 const { name, sellIn, quality } = item;
 return <div>ProductCard</div>;
}
