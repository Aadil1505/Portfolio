import {
    Ticker,
    TickerIcon,
    TickerPrice,
    TickerPriceChange,
    TickerSymbol,
} from "@/components/kibo-ui/ticker";
import { AArrowUp } from "lucide-react";
// import { useState } from "react";

interface TickerData {
    symbol: string;
    price: number;
    change: number;
}

const ticker = "AADIL";

export default function TickerDisplay() {
    const data: TickerData =
    {
        symbol: ticker,
        price: 175.41,
        change: 2.13,
    };

    return (
        <Ticker>
            <TickerIcon asChild>
                {/* <img
          alt={data.symbol}
          height={26}
          src={`https://img.logo.dev/ticker/${data.symbol}?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=26&retina=true`}
          width={26}
        /> */}
                <AArrowUp />
            </TickerIcon>
            <TickerSymbol symbol={data.symbol} />
            <TickerPrice price={data.price} />
            <TickerPriceChange change={data.change} />
        </Ticker>
    );
}