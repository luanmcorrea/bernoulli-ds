"use client"

import { ActivateAgentDialog } from "@/examples/preview/cards/activate-agent-dialog"
import { AnalyticsCard } from "@/examples/preview/cards/analytics-card"
import { AnomalyAlert } from "@/examples/preview/cards/anomaly-alert"
import { BarChartCard } from "@/examples/preview/cards/bar-chart-card"
import { BookAppointment } from "@/examples/preview/cards/book-appointment"
import { CodespacesCard } from "@/examples/preview/cards/codespaces-card"
import { ContributionsActivity } from "@/examples/preview/cards/contributions-activity"
import { Contributors } from "@/examples/preview/cards/contributors"
import { EnvironmentVariables } from "@/examples/preview/cards/environment-variables"
import { FeedbackForm } from "@/examples/preview/cards/feedback-form"
import { FileUpload } from "@/examples/preview/cards/file-upload"
import { GithubProfile } from "@/examples/preview/cards/github-profile"
import { IconPreviewGrid } from "@/examples/preview/cards/icon-preview-grid"
import { InviteTeam } from "@/examples/preview/cards/invite-team"
import { Invoice } from "@/examples/preview/cards/invoice"
import { LiveWaveformCard } from "@/examples/preview/cards/live-waveform"
import { NoTeamMembers } from "@/examples/preview/cards/no-team-members"
import { NotFound } from "@/examples/preview/cards/not-found"
import { ObservabilityCard } from "@/examples/preview/cards/observability-card"
import { PieChartCard } from "@/examples/preview/cards/pie-chart-card"
import { ReportBug } from "@/examples/preview/cards/report-bug"
import { ShippingAddress } from "@/examples/preview/cards/shipping-address"
import { Shortcuts } from "@/examples/preview/cards/shortcuts"
import { SkeletonLoading } from "@/examples/preview/cards/skeleton-loading"
import { SleepReport } from "@/examples/preview/cards/sleep-report"
import { StyleOverview } from "@/examples/preview/cards/style-overview"
import { TypographySpecimen } from "@/examples/preview/cards/typography-specimen"
import { UIElements } from "@/examples/preview/cards/ui-elements"
import { UsageCard } from "@/examples/preview/cards/usage-card"
import { Visitors } from "@/examples/preview/cards/visitors"
import { WeeklyFitnessSummary } from "@/examples/preview/cards/weekly-fitness-summary"

export default function PreviewExample() {
  return (
    <div className="w-full overflow-auto [--gap:--spacing(4)] 3xl:[--gap:--spacing(12)] md:[--gap:--spacing(10)]">
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