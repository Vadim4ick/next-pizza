import { prisma } from "@/prisma/prisma-client";
import { Container, ProductForm } from "@/shared/components";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: { id: parseInt(params.id) },
    include: {
      items: true,
      ingredients: true,
      category: { include: { products: { include: { items: true } } } },
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
};

export default ProductPage;
