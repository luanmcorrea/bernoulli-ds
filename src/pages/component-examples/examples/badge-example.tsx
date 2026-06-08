import {
  Example,
  ExampleWrapper,
} from "@/pages/component-examples/components/example"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { CheckCircleIcon } from "@phosphor-icons/react"

export default function BadgeExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1">
      <BadgeVariants />
      <BadgeSecondaryVariants />
      <BadgeOutlineVariants />
      <BadgeIconLoad />
      <BadgeAsLink />
      <BadgeLongText />
      <BadgeCustomColors />
    </ExampleWrapper>
  )
}

function BadgeVariants() {
  return (
    <Example title="Default variants">
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    </Example>
  )
}

function BadgeSecondaryVariants() {
  return (
    <Example title="Secondary variants">
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Default</Badge>
        <Badge variant="neutral-secondary">Neutral</Badge>
        <Badge variant="destructive-secondary">Destructive</Badge>
        <Badge variant="success-secondary">Success</Badge>
        <Badge variant="warning-secondary">Warning</Badge>
        <Badge variant="info-secondary">Info</Badge>
      </div>
    </Example>
  )
}

function BadgeOutlineVariants() {
  return (
    <Example title="Outline variants">
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">Default</Badge>
        <Badge variant="neutral-outline">Neutral</Badge>
        <Badge variant="destructive-outline">Destructive</Badge>
        <Badge variant="success-outline">Success</Badge>
        <Badge variant="warning-outline">Warning</Badge>
        <Badge variant="info-outline">Info</Badge>
      </div>
    </Example>
  )
}

function BadgeIconLoad() {
  return (
    <Example title="Icon & Loading">
      <div className="flex flex-wrap gap-2">
        <Badge><CheckCircleIcon />Icon left</Badge>
        <Badge variant="success-secondary">Icon right<CheckCircleIcon /></Badge>
        <Badge variant="info"><Spinner data-icon="inline-start"/>Loading</Badge>
        <Badge variant="warning-outline"><Spinner data-icon="inline-start"/>Loading</Badge>
      </div>
    </Example>
  )
}

function BadgeAsLink() {
  return (
    <Example title="asChild">
      <div className="flex flex-wrap gap-2">
        <Badge asChild><a href="#">
              Link{" "}
              <IconPlaceholder
                lucide="ArrowUpRightIcon"
                tabler="IconArrowUpRight"
                hugeicons="ArrowUpRightIcon"
                phosphor="ArrowUpRightIcon"
                remixicon="RiArrowRightUpLine"
                data-icon="inline-end"
              />
            </a></Badge>
        <Badge
          variant="secondary" asChild><a href="#">
              Link{" "}
              <IconPlaceholder
                lucide="ArrowUpRightIcon"
                tabler="IconArrowUpRight"
                hugeicons="ArrowUpRightIcon"
                phosphor="ArrowUpRightIcon"
                remixicon="RiArrowRightUpLine"
                data-icon="inline-end"
              />
            </a></Badge>
        <Badge
          variant="destructive" asChild><a href="#">
              Link{" "}
              <IconPlaceholder
                lucide="ArrowUpRightIcon"
                tabler="IconArrowUpRight"
                hugeicons="ArrowUpRightIcon"
                phosphor="ArrowUpRightIcon"
                remixicon="RiArrowRightUpLine"
                data-icon="inline-end"
              />
            </a></Badge>
        <Badge
          variant="ghost" asChild><a href="#">
              Link{" "}
              <IconPlaceholder
                lucide="ArrowUpRightIcon"
                tabler="IconArrowUpRight"
                hugeicons="ArrowRight02Icon"
                phosphor="ArrowUpRightIcon"
                remixicon="RiArrowRightUpLine"
                data-icon="inline-end"
              />
            </a></Badge>
      </div>
    </Example>
  )
}

function BadgeLongText() {
  return (
    <Example title="Long Text">
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">
          A badge with a lot of text to see how it wraps
        </Badge>
      </div>
    </Example>
  )
}

function BadgeCustomColors() {
  return (
    <Example title="Custom Colors">
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-600 text-blue-50 dark:bg-blue-600 dark:text-blue-50">
          Blue
        </Badge>
        <Badge className="bg-green-600 text-green-50 dark:bg-green-600 dark:text-green-50">
          Green
        </Badge>
        <Badge className="bg-sky-600 text-sky-50 dark:bg-sky-600 dark:text-sky-50">
          Sky
        </Badge>
        <Badge className="bg-purple-600 text-purple-50 dark:bg-purple-600 dark:text-purple-50">
          Purple
        </Badge>
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Blue
        </Badge>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          Green
        </Badge>
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          Sky
        </Badge>
        <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          Purple
        </Badge>
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          Red
        </Badge>
      </div>
    </Example>
  )
}
