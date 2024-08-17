import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                key={1}
                title={"Пиццы"}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Мясная пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Не мясная пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Веган",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Гавайская пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Русская пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Узбекская",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                key={2}
                title={"Пиццы2"}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Мясная пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Не мясная пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Веган",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Гавайская пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Русская пицца",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Узбекская",
                    price: 500,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 500 }],
                  },
                ]}
              />

              {/* {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )} */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
