"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
} from "@/components/kibo-ui/contribution-graph";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ShineBorder } from "../ui/shine-border";
import { NumberTicker } from "../ui/number-ticker";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsData {
  contributions: ContributionDay[];
  total: number;
}

const username = 'Aadil1505';

export default function Contributions() {
  const [data, setData] = useState<ContributionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        
        const responseData = await response.json();
        
        const total = responseData.contributions.reduce(
          (sum: number, day: ContributionDay) => sum + day.count, 
          0
        );

        setData({
          contributions: responseData.contributions,
          total,
        });
      } catch (error) {
        console.error('Failed to fetch contributions:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <Card className="p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-muted-foreground text-sm">Loading contribution activity...</p>
          </div>
        </Card>
      );
    }

    if (!data) {
      return (
        <Card className="p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <p className="text-muted-foreground">Failed to load contributions</p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Link href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        <Card className="relative p-8 pb-6 shadow-sm transition-all duration-300 hover:shadow-md">
          <ShineBorder shineColor={["#39d353", "#FE8FB5", "#FFBE7B"]}/>
          <ContributionGraphWrapper data={data.contributions} />
        </Card>
        <div className="flex justify-center">
          <Button
            asChild
            variant="outline"
            size="default"
            className="gap-2 transition-all duration-300 hover:scale-105"
          >
            <Link href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              View Full GitHub Profile
            </Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="contributions">
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">GitHub Contributions</h2>
            <p className="text-muted-foreground mt-6">
              {loading ? (
                "Fetching my latest activity from GitHub"
              ) : (
                <span className="inline-flex items-center gap-2 text-center">
                  <NumberTicker value={data?.total || 0} className="text-muted-foreground" />
                  <span>contributions in the last year</span>
                </span>
              )}
            </p>
          </div>

          <div className="mt-12">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}

const ContributionGraphWrapper = ({ data }: { data: ContributionDay[] }) => {
  return (
    <div className="flex justify-center overflow-x-auto">
      <ContributionGraph data={data}>
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={activity}
              className={cn(
                'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]',
              )}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <img
              src={`https://github.com/${username}.png`}
              alt={username}
              width={20}
              height={20}
              className="rounded-full"
            />
            <Link 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
            >
              {username}
            </Link>
          </div>
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  );
};