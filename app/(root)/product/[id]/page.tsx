import { prisma } from "@/prisma/prisma-client";
import {
  Container,
  GroupVariants,
  PizzaImage,
  ProductForm,
  Title,
} from "@/shared/components";
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
      {/* <ProductForm product={product} /> */}

      <div className={"flex flex-1"}>
        <PizzaImage imageUrl={product.imageUrl} size={30} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
            recusandae expedita maiores quia sequi voluptas omnis voluptatum.
            Doloremque, nesciunt.
          </p>

          <div className="flex flex-col gap-4 mt-5">
            <GroupVariants
              value="2"
              items={[
                {
                  name: "Маленькая",
                  value: "1",
                },
                {
                  name: "Средняя",
                  value: "2",
                },
                {
                  name: "Большая",
                  value: "3",
                  disabled: true,
                },
              ]}
              // value={String(size)}
              // onClick={(value) => setSize(Number(value) as PizzaSize)}
            />

            {/* <GroupVariants
              items={pizzaTypes}
              // value={String(type)}
              // onClick={(value) => setType(Number(value) as PizzaType)}
            /> */}
          </div>

          {/*  <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
            <div className="grid grid-cols-3 gap-3">
              {ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  name={ingredient.name}
                  price={ingredient.price}
                  imageUrl={ingredient.imageUrl}
                  onClick={() => addIngredient(ingredient.id)}
                  active={selectedIngredients.has(ingredient.id)}
                />
              ))}
            </div>
          </div>

          <Button
            loading={loading}
            onClick={handleClickAdd}
            className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
          >
            Добавить в корзину за {totalPrice} ₽
          </Button> */}
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
