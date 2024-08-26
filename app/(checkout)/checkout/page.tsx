import { Container, Title, WhiteBlock } from "@/shared/components";
import {
  CheckoutPersonalForm,
  CheckoutSidebar,
} from "@/shared/components/shared";

export default async function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина ">123</WhiteBlock>

          <CheckoutPersonalForm />

          <WhiteBlock title="3. Адрес доставки">123</WhiteBlock>
        </div>

        {/* Правая часть */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={550} />
        </div>
      </div>
    </Container>
  );
}
