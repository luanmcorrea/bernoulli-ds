"use client"

import { ActivateAgentDialog } from "@/pages/component-examples/examples/cards-1/cards/activate-agent-dialog"
import { AnalyticsCard } from "@/pages/component-examples/examples/cards-1/cards/analytics-card"
import { AnomalyAlert } from "@/pages/component-examples/examples/cards-1/cards/anomaly-alert"
import { BarChartCard } from "@/pages/component-examples/examples/cards-1/cards/bar-chart-card"
import { BookAppointment } from "@/pages/component-examples/examples/cards-1/cards/book-appointment"
import { CodespacesCard } from "@/pages/component-examples/examples/cards-1/cards/codespaces-card"
import { ContributionsActivity } from "@/pages/component-examples/examples/cards-1/cards/contributions-activity"
import { Contributors } from "@/pages/component-examples/examples/cards-1/cards/contributors"
import { EnvironmentVariables } from "@/pages/component-examples/examples/cards-1/cards/environment-variables"
import { FeedbackForm } from "@/pages/component-examples/examples/cards-1/cards/feedback-form"
import { FileUpload } from "@/pages/component-examples/examples/cards-1/cards/file-upload"
import { GithubProfile } from "@/pages/component-examples/examples/cards-1/cards/github-profile"
import { IconPreviewGrid } from "@/pages/component-examples/examples/cards-1/cards/icon-preview-grid"
import { InviteTeam } from "@/pages/component-examples/examples/cards-1/cards/invite-team"
import { Invoice } from "@/pages/component-examples/examples/cards-1/cards/invoice"
import { LiveWaveformCard } from "@/pages/component-examples/examples/cards-1/cards/live-waveform"
import { NoTeamMembers } from "@/pages/component-examples/examples/cards-1/cards/no-team-members"
import { NotFound } from "@/pages/component-examples/examples/cards-1/cards/not-found"
import { ObservabilityCard } from "@/pages/component-examples/examples/cards-1/cards/observability-card"
import { PieChartCard } from "@/pages/component-examples/examples/cards-1/cards/pie-chart-card"
import { ReportBug } from "@/pages/component-examples/examples/cards-1/cards/report-bug"
import { ShippingAddress } from "@/pages/component-examples/examples/cards-1/cards/shipping-address"
import { Shortcuts } from "@/pages/component-examples/examples/cards-1/cards/shortcuts"
import { SkeletonLoading } from "@/pages/component-examples/examples/cards-1/cards/skeleton-loading"
import { SleepReport } from "@/pages/component-examples/examples/cards-1/cards/sleep-report"
import { StyleOverview } from "@/pages/component-examples/examples/cards-1/cards/style-overview"
import { TypographySpecimen } from "@/pages/component-examples/examples/cards-1/cards/typography-specimen"
import { UIElements } from "@/pages/component-examples/examples/cards-1/cards/ui-elements"
import { UsageCard } from "@/pages/component-examples/examples/cards-1/cards/usage-card"
import { Visitors } from "@/pages/component-examples/examples/cards-1/cards/visitors"
import { WeeklyFitnessSummary } from "@/pages/component-examples/examples/cards-1/cards/weekly-fitness-summary"

export default function CardsExample1() {
  return (
    <div className="w-full [--gap:--spacing(4)] 3xl:[--gap:--spacing(12)] md:[--gap:--spacing(10)]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-600 grid-cols-7 items-start gap-(--gap) p-(--gap) md:w-750 dark:bg-background *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <StyleOverview />
            <TypographySpecimen />
            <div className="md:hidden">
              <UIElements />
            </div>
            <CodespacesCard />
            <Invoice />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <IconPreviewGrid />
            <div className="hidden w-full md:flex">
              <UIElements />
            </div>
            <ObservabilityCard />
            <ShippingAddress />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <EnvironmentVariables />
            <BarChartCard />
            <InviteTeam />
            <ActivateAgentDialog />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <SkeletonLoading />
            <PieChartCard />
            <NoTeamMembers />
            <ReportBug />
            <Contributors />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <FeedbackForm />
            <BookAppointment />
            <SleepReport />
            <GithubProfile />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <WeeklyFitnessSummary />
            <FileUpload />
            <AnalyticsCard />
            <UsageCard />
            <Shortcuts />
          </div>
          <div className="flex flex-col p-px [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AnomalyAlert />
            <LiveWaveformCard />
            <Visitors />
            <ContributionsActivity />
            <NotFound />
          </div>
        </div>
      </div>
    </div>
  )
}