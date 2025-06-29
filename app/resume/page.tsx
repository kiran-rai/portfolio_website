import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Mail, Phone, MapPin, GraduationCap, Award, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Resume - Kiran Rai | Data Analyst",
  description:
    "Download the resume of Kiran Sadanand Rai, Microsoft-certified Data Analyst with expertise in Power BI, SQL, and healthcare analytics.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold">
            <span className="text-primary">Data</span>Analyst
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 bg-transparent">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <Link
              href="/Kiran_Sadanand_Rai_Resume.pdf"
              download="Kiran_Sadanand_Rai_Resume.pdf"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg h-10 px-4 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl font-bold">Kiran Sadanand Rai</h1>
            <div className="flex flex-wrap justify-center gap-4 opacity-90">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Fairfax, Virginia</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>kiran.s.rai@outlook.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>571 574 3237</span>
              </div>
            </div>
            <Link
              href="/Kiran_Sadanand_Rai_Resume.pdf"
              download="Kiran_Sadanand_Rai_Resume.pdf"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg h-10 px-4 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </div>

          {/* Summary */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Microsoft-certified Data Analyst with 3+ years of experience driving product and policy decisions
                through data. Delivered reporting solutions used by 10+ stakeholders across healthcare and government,
                automated dashboards that cut analysis time, and informed feature strategy that improved onboarding
                conversion. Proficient in SQL, Power BI, and experimentation, with a proven ability to align data with
                business outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Analyst - Healthcare */}
              <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800">Product Analyst - Healthcare</h3>
                    <p className="text-muted-foreground">American Technology Consulting</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-purple-300 text-purple-700">
                      Jun 2024 - Jun 2025
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Fairfax, VA</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    Examined patient activity logs using SQL and Power BI; findings revealed three major points of
                    navigation difficulty, leading to UX enhancements that reduced onboarding abandonment.
                  </li>
                  <li>
                    Steered roadmap prioritization, integrating analytics with PMs, engineers, and designers, completing
                    50+ user story analyses per quarter, and enhancing the virtual care platform's patient onboarding
                    flow.
                  </li>
                  <li>
                    Synthesized insights from experimentation and feature adoption trends to inform quarterly product
                    strategy reviews.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Data Analyst - AI & Automation */}
              <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Data Analyst - AI & Automation</h3>
                    <p className="text-muted-foreground">George Mason University</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-blue-300 text-blue-700">
                      Jan 2024 - May 2024
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Fairfax, VA</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    Integrated an AI chatbot empowered by Azure OpenAI that provided answers to the most common student
                    questions, resulting in a significant decrease in advisor workload, and a notable enhancement in
                    student self-service.
                  </li>
                  <li>Built visualizations to enable "status-at-a-glance" operational dashboards in Power BI.</li>
                  <li>
                    Monitored chatbot interactions daily and identified the top 3 error-causing scenarios, leading to
                    targeted retraining of the AI model, improving first-contact resolution rates.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Analytics Consultant */}
              <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Analytics Consultant</h3>
                    <p className="text-muted-foreground">Ministry of Women & Child Development</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-green-300 text-green-700">
                      Apr 2021 - Aug 2021
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Mumbai, IN</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    Developed data-driven product roadmaps for a national women entrepreneurship program, prioritizing
                    features based on user feedback and market research, resulting in an increase in user satisfaction
                    scores in three months.
                  </li>
                  <li>
                    Delivered weekly insights on platform usage and impact, informing outreach strategy and policy
                    recommendations.
                  </li>
                  <li>
                    Implemented end-to-end data governance policies, including data quality checks and validation rules,
                    leading to a reduction in data errors and inconsistencies across platforms.
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Data Analyst - SaaS Solutions */}
              <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-800">Data Analyst - SaaS Solutions</h3>
                    <p className="text-muted-foreground">Shaalastic LLP</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-orange-300 text-orange-700">
                      Mar 2019 – Mar 2021
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Mumbai, IN</Badge>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    Spearheaded product analytics initiatives across three SaaS products, guiding product teams to
                    discover critical feature adoption obstacles and identify strategic pricing improvements, improving
                    conversion rates.
                  </li>
                  <li>
                    Delivered insightful dashboards monitoring monthly/daily active users, identifying which marketing
                    channels drove the highest quality traffic, leading to improved budget allocation.
                  </li>
                  <li>
                    Defined key product requirement metrics based on feature usage gaps identified across three SaaS
                    products, which enabled product teams to prioritize UX enhancements.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-indigo-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800">George Mason University</h3>
                  <p className="text-muted-foreground">MS in Data Analytics Engineering</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                    Aug 2022 - May 2024
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">GPA: 4.0</Badge>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">University of Mumbai</h3>
                  <p className="text-muted-foreground">BE in Electronics Engineering</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    Jul 2018 - May 2022
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">GPA: 4.0</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certification */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                  <Award className="h-4 w-4 text-white" />
                </div>
                Certification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                <div>
                  <h3 className="text-lg font-semibold text-green-800">
                    Microsoft Certified: Power BI Data Analyst Associate
                  </h3>
                  <p className="text-muted-foreground">Certification Number: 530F8E-EAC9EA</p>
                </div>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  Sept 2024 - Sept 2025
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
              <CardTitle>Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
                <h4 className="font-semibold mb-2 text-purple-800">Languages:</h4>
                <p className="text-muted-foreground">
                  SQL, Python (Pandas, Numpy, Scikit-learn), R (RShiny, Tidyverse), SAS.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                <h4 className="font-semibold mb-2 text-blue-800">Tools:</h4>
                <p className="text-muted-foreground">
                  Power BI (DAX), Tableau, SSRS, Microsoft Excel (Pivot Tables, VBA), Jira, Visio, Google Data Studio.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <h4 className="font-semibold mb-2 text-green-800">Databases:</h4>
                <p className="text-muted-foreground">MySQL, PostgreSQL, MS SQL Server, MongoDB.</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
                <h4 className="font-semibold mb-2 text-orange-800">Statistical Analysis:</h4>
                <p className="text-muted-foreground">
                  Regression analysis, Clustering, Predictive Modeling, Data Mining.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
