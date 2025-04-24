import { NextResponse } from 'next/server';
/* import { connectToDB } from '@/lib/mongodb'; */
import { connectToDB } from '@/app/lib/mongodb';
/* import Order from '@/models/Order'; */
import Order from '@/app/models/Order';

export async function POST(req) {
    try {
        const body = await req.json();
        console.log('📦 Order received:', body);

        await connectToDB();
        await Order.create(body);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
