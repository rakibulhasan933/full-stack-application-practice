import prisma from "@/libs/db"
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const users = await prisma.users.findMany();
		return NextResponse.json({ users })
	} catch (error) {
		return NextResponse.json({ message: "GET error", error }, { status: 500 })
	}
};