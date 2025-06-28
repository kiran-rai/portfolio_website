import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-10">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5" />
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Product Analyst - Healthcare</CardTitle>
                <CardDescription>American Technology Consulting • Full-time</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                Jun 2024 - Jun 2025
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Leading product analytics initiatives for healthcare technology solutions.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Examined patient activity logs using SQL and Power BI; findings revealed three major points of
                navigation difficulty, leading to UX enhancements that reduced onboarding abandonment
              </li>
              <li>
                Steered roadmap prioritization, integrating analytics with PMs, engineers, and designers, completing 50+
                user story analyses per quarter, and enhancing the virtual care platform's patient onboarding flow
              </li>
              <li>
                Synthesized insights from experimentation and feature adoption trends to inform quarterly product
                strategy reviews
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-10">
        <div className="absolute w-4 h-4 bg-muted-foreground/70 rounded-full -left-[9px] top-1.5" />
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Data Analyst - AI & Automation</CardTitle>
                <CardDescription>George Mason University • Full-time</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                Jan 2024 - May 2024
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Implemented AI-powered solutions to enhance student services and operational efficiency.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Integrated an AI chatbot empowered by Azure OpenAI that provided answers to the most common student
                questions, resulting in a significant decrease in advisor workload and notable enhancement in student
                self-service
              </li>
              <li>Built visualizations to enable "status-at-a-glance" operational dashboards in Power BI</li>
              <li>
                Monitored chatbot interactions daily and identified the top 3 error-causing scenarios, leading to
                targeted retraining of the AI model, improving first-contact resolution rates
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-10">
        <div className="absolute w-4 h-4 bg-muted-foreground/70 rounded-full -left-[9px] top-1.5" />
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Analytics Consultant</CardTitle>
                <CardDescription>Ministry of Women & Child Development • Contract</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                Apr 2021 - Aug 2021
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Developed data-driven strategies for national women entrepreneurship programs.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Developed data-driven product roadmaps for a national women entrepreneurship program, prioritizing
                features based on user feedback and market research, resulting in increased user satisfaction scores in
                three months
              </li>
              <li>
                Delivered weekly insights on platform usage and impact, informing outreach strategy and policy
                recommendations
              </li>
              <li>
                Implemented end-to-end data governance policies, including data quality checks and validation rules,
                leading to a reduction in data errors and inconsistencies across platforms
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l-2 border-muted-foreground/20">
        <div className="absolute w-4 h-4 bg-muted-foreground/70 rounded-full -left-[9px] top-1.5" />
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Data Analyst - SaaS Solutions</CardTitle>
                <CardDescription>Shaalastic LLP • Full-time</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                Mar 2019 - Mar 2021
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Led product analytics initiatives across multiple SaaS products to drive growth and optimization.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Spearheaded product analytics initiatives across three SaaS products, guiding product teams to discover
                critical feature adoption obstacles and identify strategic pricing improvements, improving conversion
                rates
              </li>
              <li>
                Delivered insightful dashboards monitoring monthly/daily active users, identifying which marketing
                channels drove the highest quality traffic, leading to improved budget allocation
              </li>
              <li>
                Defined key product requirement metrics based on feature usage gaps identified across three SaaS
                products, which enabled product teams to prioritize UX enhancements
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
