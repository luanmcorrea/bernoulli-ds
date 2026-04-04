import type { Icon } from "@phosphor-icons/react"
import {
  ActivityIcon,
  AppWindowIcon,
  ArchiveIcon,
  ArrowCircleLeftIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  BankIcon,
  BellIcon,
  CaretDownIcon,
  CaretUpDownIcon,
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  ChatCircleIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  DotsThreeOutlineIcon,
  EnvelopeIcon,
  FileIcon,
  FloppyDiskIcon,
  GearIcon,
  HouseIcon,
  InfoIcon,
  LayoutIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
  QuestionIcon,
  ScissorsIcon,
  ShareIcon,
  SidebarIcon,
  SignOutIcon,
  TextTIcon,
  TrashIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
} from "@phosphor-icons/react"

const iconMap = {
  ActivityIcon,
  AppWindowIcon,
  ArchiveIcon,
  ArrowCircleLeftIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  BankIcon,
  BellIcon,
  CaretDownIcon,
  CaretUpDownIcon,
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  ChatCircleIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  DotsThreeOutlineIcon,
  EnvelopeIcon,
  FileIcon,
  FloppyDiskIcon,
  GearIcon,
  HouseIcon,
  InfoIcon,
  LayoutIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  PlusCircleIcon,
  PlusIcon,
  QuestionIcon,
  ScissorsIcon,
  ShareIcon,
  SidebarIcon,
  SignOutIcon,
  TextTIcon,
  TrashIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
} satisfies Record<string, Icon>

type IconPlaceholderProps = React.ComponentProps<"svg"> & {
  phosphor?: keyof typeof iconMap | string
  lucide?: string
  tabler?: string
  hugeicons?: string
  remixicon?: string
}

function IconPlaceholder({ phosphor, ...props }: IconPlaceholderProps) {
  const IconComponent =
    phosphor && phosphor in iconMap
      ? iconMap[phosphor as keyof typeof iconMap]
      : QuestionIcon

  return <IconComponent {...props} />
}

export { IconPlaceholder }
