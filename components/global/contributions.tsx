"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@/components/kibo-ui/contribution-graph";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
        
        // Calculate total from contributions array
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

  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">GitHub Contributions</h2>
            <p className="text-muted-foreground mt-6">
              {loading 
                ? "Loading contribution activity..." 
                : `${data?.total || 0} contributions in the last year`}
            </p>
          </div>

          <div className="mt-12">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-muted-foreground animate-pulse">Loading contributions...</div>
              </div>
            ) : data ? (
              <ContributionGraphWrapper data={data.contributions} />
            ) : (
              <div className="flex items-center justify-center py-20">
                <div className="text-muted-foreground">Failed to load contributions</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const ContributionGraphWrapper = ({ data }: { data: ContributionDay[] }) => {
  return (
    <div className="flex justify-center">
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
                'transition-all duration-200 hover:opacity-80'
              )}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter />
      </ContributionGraph>
    </div>
  );
};