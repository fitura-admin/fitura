import { NextRequest, NextResponse } from "next/server";
import { sendEmailViaBrevo } from "~/src/shared/lib/utils/brevo";
import { addApplicationRow } from "~/src/shared/lib/utils/google-sheets";

export const runtime = "nodejs";

// прим.: тут много as, так как валидация есть на фронте
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const resume = formData.get("resumeFile") as File;

    const stringFields = [email, name, phone, position];
    if (!stringFields.every((f) => typeof f === "string")) {
      return NextResponse.json(
        { error: "Некорректные данные" },
        { status: 400 },
      );
    }

    if (
      !resume ||
      !(resume instanceof File) ||
      resume.size > 20 * 1024 * 1024
    ) {
      return NextResponse.json(
        { error: "Некорректные данные" },
        { status: 400 },
      );
    }

    await sendEmailViaBrevo({
      name,
      email,
      phone,
      position,
      resume,
    });

    await addApplicationRow({
      name,
      email,
      phone,
      position,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при отправке формы" },
      { status: 500 },
    );
  }
}
