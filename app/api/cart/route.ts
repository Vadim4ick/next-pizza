import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token: token,
          },
        ],
      },
      include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log("[CART_GET] Server error", error);
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    const body = (await req.json()) as CreateCartItemValues;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: body.productItemId,
        ingredients: { every: { id: { in: body.ingredients } } },
      },
    });

    // Если товар был найден - делаем + 1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },

        data: {
          quantity: findCartItem.quantity + 1,
        },
      });

      // const updatedUserCart = await updateCartTotalAmount(token);
      // const res = NextResponse.json(updatedUserCart);
      // res.cookies.set("cartToken", token);
      // return res;
    }

    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productItemId: body.productItemId,
        quantity: 1,
        ingredients: { connect: body.ingredients?.map((id) => ({ id })) },
      },
    });

    // const updatedUserCart = await updateCartTotalAmount(token);
    // return NextResponse.json(updatedUserCart);

    const updatedUserCart = await updateCartTotalAmount(token);
    const res = NextResponse.json(updatedUserCart);
    res.cookies.set("cartToken", token);
    return res;
  } catch (error) {
    console.log("[CART_POST] Server error", error);
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    );
  }
}
