import { AccountAccess } from "@/pages/component-examples/examples/preview-02/cards/account-access"
import { CardOverview } from "@/pages/component-examples/examples/preview-02/cards/card-overview"
import { ClaimableBalance } from "@/pages/component-examples/examples/preview-02/cards/claimable-balance"
import { ContributionHistory } from "@/pages/component-examples/examples/preview-02/cards/contribution-history"
import { CoverArt } from "@/pages/component-examples/examples/preview-02/cards/cover-art"
import { DividendIncome } from "@/pages/component-examples/examples/preview-02/cards/dividend-income"
import { EmptyConnectBank } from "@/pages/component-examples/examples/preview-02/cards/empty-connect-bank"
import { EmptyDistributeTrack } from "@/pages/component-examples/examples/preview-02/cards/empty-distribute-track"
import { EmptyExploreCatalog } from "@/pages/component-examples/examples/preview-02/cards/empty-explore-catalog"
import { Faq } from "@/pages/component-examples/examples/preview-02/cards/faq"
import { FrontDoor } from "@/pages/component-examples/examples/preview-02/cards/front-door"
import { IndexInvesting } from "@/pages/component-examples/examples/preview-02/cards/index-investing"
import { KitchenIsland } from "@/pages/component-examples/examples/preview-02/cards/kitchen-island"
import { LoadingCard } from "@/pages/component-examples/examples/preview-02/cards/loading-card"
import { NewMilestone } from "@/pages/component-examples/examples/preview-02/cards/new-milestone"
import { NotificationSettings } from "@/pages/component-examples/examples/preview-02/cards/notification-settings"
import { Payments } from "@/pages/component-examples/examples/preview-02/cards/payments"
import { PayoutThreshold } from "@/pages/component-examples/examples/preview-02/cards/payout-threshold"
import { PowerUsage } from "@/pages/component-examples/examples/preview-02/cards/power-usage"
import { Preferences } from "@/pages/component-examples/examples/preview-02/cards/preferences"
import { QrConnect } from "@/pages/component-examples/examples/preview-02/cards/qr-connect"
import { ReceivingMethod } from "@/pages/component-examples/examples/preview-02/cards/receiving-method"
import { RecentTransactions } from "@/pages/component-examples/examples/preview-02/cards/recent-transactions"
import { ReleaseCatalog } from "@/pages/component-examples/examples/preview-02/cards/release-catalog"
import { RollerShades } from "@/pages/component-examples/examples/preview-02/cards/roller-shades"
import { SavingsProgress } from "@/pages/component-examples/examples/preview-02/cards/savings-progress"
import { SavingsTargets } from "@/pages/component-examples/examples/preview-02/cards/savings-targets"
import { SidebarNav } from "@/pages/component-examples/examples/preview-02/cards/sidebar-nav"
import { SocialLinks } from "@/pages/component-examples/examples/preview-02/cards/social-links"
import { StockPerformance } from "@/pages/component-examples/examples/preview-02/cards/stock-performance"
import { SyncingState } from "@/pages/component-examples/examples/preview-02/cards/syncing-state"
import { TransferFunds } from "@/pages/component-examples/examples/preview-02/cards/transfer-funds"
import { UpcomingPayments } from "@/pages/component-examples/examples/preview-02/cards/upcoming-payments"

export default function Preview02Example() {
  return (
    <div className="w-full overflow-auto [--gap:--spacing(4)] 3xl:[--gap:--spacing(12)] md:[--gap:--spacing(10)]">
      <div className="flex w-full min-w-max justify-center">
        <div
          className="grid w-600 grid-cols-7 items-start gap-(--gap) p-(--gap) md:w-750 dark:bg-background *:[div]:gap-(--gap)"
          data-slot="capture-target"
        >
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ContributionHistory />
            <EmptyDistributeTrack />
            <QrConnect />
            <DividendIncome />
            <IndexInvesting />
            <SyncingState />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <PayoutThreshold />
            <ClaimableBalance />
            <Preferences />
            <SavingsProgress />
            <KitchenIsland />
          </div>
          <div className="col-span-2 flex flex-col p-1 [contain-intrinsic-size:760px_1200px] [content-visibility:auto]">
            <SavingsTargets />
            <RecentTransactions />
            <div className="grid grid-cols-2 items-start gap-(--gap)">
              <div className="flex flex-col gap-(--gap)">
                <SidebarNav />
                <Faq />
              </div>
              <div className="flex flex-col gap-(--gap)">
                <Payments />
                <FrontDoor />
              </div>
            </div>
            <ReleaseCatalog />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <AccountAccess />
            <CardOverview />
            <TransferFunds />
            <CoverArt />
            <LoadingCard />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <ReceivingMethod />
            <PowerUsage />
            <EmptyConnectBank />
            <UpcomingPayments />
            <RollerShades />
          </div>
          <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
            <StockPerformance />
            <EmptyExploreCatalog />
            <NewMilestone />
            <SocialLinks />
            <NotificationSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
