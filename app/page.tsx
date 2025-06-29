import Link from "next/link"
import { ArrowRight, BarChart2, Database, FileSpreadsheet, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold">
            <span className="text-primary">Data</span>Analyst
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#certifications" className="text-sm font-medium hover:text-primary transition-colors">
              Certifications
            </Link>
            <Link href="/resume" className="text-sm font-medium hover:text-primary transition-colors">
              Resume
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Background Pattern */}
        <section className="container py-24 sm:py-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 text-sm font-medium border border-purple-200">
                <BarChart2 className="mr-2 h-4 w-4 text-purple-600" />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Microsoft-Certified Power BI Data Analyst • 3+ years experience
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Kiran Sadanand Rai
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Driving product and policy decisions through data. Specialized in healthcare and customer analytics
                with expertise in SQL, Power BI, and experimentation.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/resume">
                    View My Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-purple-200 hover:bg-purple-50 bg-transparent">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span className="text-sm">Fairfax, Virginia • Available for remote work</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative aspect-square overflow-hidden rounded-full border-4 border-purple-300 w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] shadow-2xl">
                  <img
                    src="/images/profile.png"
                    alt="Kiran Sadanand Rai - Data Analyst"
                    className="object-cover w-full h-full"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="container py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative"
        >
          {/* Decorative Elements */}
          <div
            className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          />

          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center relative z-10">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a Microsoft-certified Data Analyst with 3+ years of experience driving product and policy decisions
              through data. I've delivered reporting solutions used by 10+ stakeholders across healthcare and government
              sectors, automated dashboards that significantly cut analysis time, and informed feature strategies that
              improved onboarding conversion rates.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              With an MS in Data Analytics Engineering from George Mason University and a BE in Electronics Engineering
              from University of Mumbai, I combine technical expertise with strong business acumen. I'm proficient in
              SQL, Power BI, Python, and experimentation, with a proven ability to align data insights with business
              outcomes.
            </p>
          </div>
        </section>

        <section id="certifications" className="container py-12 md:py-24 lg:py-32 bg-white">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="mt-4 text-muted-foreground sm:text-lg">
                Professional certifications validating my expertise
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Card className="w-full max-w-md border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
                    <BarChart2 className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">Microsoft Certified</CardTitle>
                  <CardDescription className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Power BI Data Analyst Associate
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Certification Number:</strong> 530F8E-EAC9EA
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Valid:</strong> September 2024 - September 2025
                    </p>
                  </div>
                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 text-sm font-medium text-green-800 border border-green-200">
                    ✓ Active Certification
                  </div>
                </CardContent>
              </Card>

              <div className="text-center max-w-2xl">
                <p className="text-muted-foreground">
                  This certification validates my ability to prepare data, model data, visualize and analyze data, and
                  deploy and maintain assets using Microsoft Power BI. It demonstrates expertise in data analysis,
                  dashboard creation, and business intelligence solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="mx-auto grid max-w-5xl gap-8 md:gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="mt-4 text-muted-foreground sm:text-lg">
                My technical toolkit for data analysis and visualization
              </p>
            </div>

            <Tabs defaultValue="visualization" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white border border-purple-200">
                <TabsTrigger
                  value="visualization"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  Visualization
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value="soft"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  Soft Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="visualization" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2 bg-gradient-to-r from-purple-50 to-pink-50">
                      <CardTitle className="flex items-center">
                        <BarChart2 className="mr-2 h-5 w-5 text-purple-600" />
                        Data Visualization & BI
                      </CardTitle>
                      <CardDescription className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                        Microsoft Certified: Power BI Data Analyst Associate
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Power BI (DAX)</span>
                          <span className="text-sm text-muted-foreground">95%</span>
                        </div>
                        <Progress
                          value={95}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Tableau</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Google Data Studio</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <Progress
                          value={80}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>SSRS</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Progress
                          value={75}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-pink-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-cyan-50">
                      <CardTitle>Tools & Databases</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Microsoft Excel (VBA, Pivot Tables)</span>
                          <span className="text-sm text-muted-foreground">95%</span>
                        </div>
                        <Progress
                          value={95}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>MySQL & PostgreSQL</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                        <Progress
                          value={90}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>MS SQL Server</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>MongoDB</span>
                          <span className="text-sm text-muted-foreground">70%</span>
                        </div>
                        <Progress
                          value={70}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-cyan-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2 bg-gradient-to-r from-purple-50 to-blue-50">
                      <CardTitle className="flex items-center">
                        <Database className="mr-2 h-5 w-5 text-purple-600" />
                        Programming & Databases
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>SQL</span>
                          <span className="text-sm text-muted-foreground">95%</span>
                        </div>
                        <Progress
                          value={95}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Python (Pandas, NumPy, Scikit-learn)</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>R (RShiny, Tidyverse)</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <Progress
                          value={80}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>SAS</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Progress
                          value={75}
                          className="h-2 bg-purple-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <CardTitle className="flex items-center">
                        <FileSpreadsheet className="mr-2 h-5 w-5 text-blue-600" />
                        Statistical Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Regression Analysis</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                        <Progress
                          value={90}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Clustering & Data Mining</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Predictive Modeling</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Experimentation & A/B Testing</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <Progress
                          value={80}
                          className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="soft" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                      <CardTitle>Communication & Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Data Storytelling</span>
                          <span className="text-sm text-muted-foreground">95%</span>
                        </div>
                        <Progress
                          value={95}
                          className="h-2 bg-green-100 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Cross-functional Collaboration</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                        <Progress
                          value={90}
                          className="h-2 bg-green-100 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Technical Documentation</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-green-100 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                      <CardTitle>Problem Solving</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Critical Thinking</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                        <Progress
                          value={90}
                          className="h-2 bg-orange-100 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Business Acumen</span>
                          <span className="text-sm text-muted-foreground">85%</span>
                        </div>
                        <Progress
                          value={85}
                          className="h-2 bg-orange-100 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span>Attention to Detail</span>
                          <span className="text-sm text-muted-foreground">95%</span>
                        </div>
                        <Progress
                          value={95}
                          className="h-2 bg-orange-100 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-red-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="experience" className="container py-12 md:py-24 lg:py-32 bg-white">
          <div className="mx-auto grid max-w-5xl gap-8 md:gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <p className="mt-4 text-muted-foreground sm:text-lg">My journey as a data analyst</p>
            </div>

            <ExperienceTimeline />
          </div>
        </section>

        <section
          id="contact"
          className="container py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUM5MkFDIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0yMCAyMGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwIDQuNS0xMCAxMCA0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwem0xMCAwYzAtNS41LTQuNS0xMC0xMC0xMHMtMTAgNC41LTEwIDEwIDQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTB6Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

          <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground sm:text-lg">Interested in working together? Let's connect!</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span>kiran.s.rai@outlook.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                      <span className="text-white text-xs font-bold">📞</span>
                    </div>
                    <span>571 574 3237</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Linkedin className="h-4 w-4 text-white" />
                    </div>
                    <Link
                      href="https://linkedin.com/in/kiran-rai"
                      className="hover:underline hover:text-purple-600 transition-colors"
                      target="_blank"
                    >
                      linkedin.com/in/kiran-rai
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                    <Link
                      href="https://github.com/kiranrai"
                      className="hover:underline hover:text-purple-600 transition-colors"
                      target="_blank"
                    >
                      github.com/kiranrai
                    </Link>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 hover:bg-purple-50 hover:border-purple-300 bg-transparent"
                    asChild
                  >
                    <Link href="/Kiran_Sadanand_Rai_Resume.pdf" download="Kiran_Sadanand_Rai_Resume.pdf">
                      Download Resume
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose md:text-left opacity-90">
            © 2024 Kiran Sadanand Rai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kiranrai"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/kiran-rai"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
