"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Title, WhiteBlock } from "@/shared/components";
import {
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
} from "@/shared/components/shared";
import { useCart } from "@/shared/hooks/use-cart";
import { FormProvider, useForm } from "react-hook-form";
import {
  CheckoutFormValues,
  checkoutFormSchema,
} from "@/shared/constants/checkout-form-schema";

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log(data);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />

              <CheckoutPersonalForm />

              <WhiteBlock title="3. Адрес доставки">123</WhiteBlock>
            </div>

            {/* Правая часть */}
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
