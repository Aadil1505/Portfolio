import {
    Ticker,
    TickerIcon,
    TickerPrice,
    TickerPriceChange,
    TickerSymbol,
} from "@/components/kibo-ui/ticker";

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
                <a href="https://github.com/Aadil1505" target="_blank" rel="noopener noreferrer">
                    <img
                        alt={data.symbol}
                        height={26}
                        src="https://avatars.githubusercontent.com/u/74999480?v=4"
                        width={26}
                    />
                </a>
            </TickerIcon>
            <TickerSymbol symbol={data.symbol} />
            <TickerPrice price={data.price} />
            <TickerPriceChange change={data.change} />
        </Ticker>
    );
}