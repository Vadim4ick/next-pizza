"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/store/cart";
import { ProductForm } from "../product-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);
  const firstItem = product.items[0];

  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem.id,
    });
  };

  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartItem({
      productItemId: productItemId,
      ingredients: ingredients,
    });
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ProductForm product={product} onSubmit={() => router.back()} />

        {/* {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            price={350}
            loading={false}
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
          />
        )} */}
      </DialogContent>
    </Dialog>
  );
};
