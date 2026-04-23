import * as React from "react"
import {
  Example,
  ExampleWrapper,
} from "@/pages/component-examples/components/example"
import {
  Avatar,
  AvatarBadge,
  AvatarBadgeLevel,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AvatarProgressLevel,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CheckIcon, PlusIcon, SlidersHorizontalIcon } from "@phosphor-icons/react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export default function AvatarExample() {
  return (
    <ExampleWrapper>
      <AvatarSizes />
      <AvatarWithBadge />
      <AvatarWithBadgeIcon />
      <AvatarWithLevel />
      <AvatarGroupExample />
      <AvatarGroupWithCount />
      <AvatarGroupWithIconCount />
      <AvatarInEmpty />
    </ExampleWrapper>
  )
}

function AvatarSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="xs">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="2xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="xs">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="2xl">
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarWithBadge() {
  return (
    <Example title="Badge">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="xs">
          <AvatarImage
            src="https://github.com/jorgezreik.png"
            alt="@jorgezreik"
          />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/jorgezreik.png"
            alt="@jorgezreik"
          />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/jorgezreik.png"
            alt="@jorgezreik"
          />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/jorgezreik.png"
            alt="@jorgezreik"
          />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="xl">
          <AvatarImage
            src="https://github.com/jorgezreik.png"
            alt="@jorgezreik"
          />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="2xl">
          <AvatarImage
            src="https://github.com/jorgezreik.png"
            alt="@jorgezreik"
          />
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="xs">
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="2xl">
          <AvatarFallback>J</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarWithBadgeIcon() {
  return (
    <Example title="Badge with Icon">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="xs">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <PlusIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <PlusIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <PlusIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <PlusIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="xl">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <PlusIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="2xl">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <PlusIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar size="xs">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <CheckIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <CheckIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar>
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <CheckIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <CheckIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <CheckIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
        <Avatar size="2xl">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadge>
            <CheckIcon weight="bold" />
          </AvatarBadge>
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarWithLevel() {
  const [amount, setAmount] = React.useState([25])
  
  return (
    <Example title="Level" className="relative">
      <Popover>
        <PopoverTrigger render={
          <Button variant="ghost-neutral" size="icon" className="absolute top-3 right-3">
            <SlidersHorizontalIcon />
          </Button>
          }>
          Open Popover
        </PopoverTrigger>
        <PopoverContent align="end" className="w-fit">
          <Field className="w-40">
            <div className="flex justify-between">
              <FieldLabel htmlFor="min-payout">
                Progress level
              </FieldLabel>
              <span className="font-semibold">
                {amount[0]}%
              </span>
            </div>
            <Slider
              id="progress-level"
              value={amount}
              onValueChange={(value) =>
                setAmount(Array.isArray(value) ? [...value] : [value])
              }
              min={0}
              max={100}
              step={1}
            />
          </Field>
        </PopoverContent>
      </Popover>
      <div className="flex flex-wrap items-center gap-4">
        <Avatar size="xs">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="xl">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="2xl">
          <AvatarImage
            src="https://github.com/pranathip.png"
            alt="@pranathip"
          />
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Avatar size="xs">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar>
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
        <Avatar size="2xl">
          <AvatarFallback>P</AvatarFallback>
          <AvatarBadgeLevel>
            12
          </AvatarBadgeLevel>
          <AvatarProgressLevel value={amount[0]} />
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarGroupExample() {
  return (
    <Example title="Group">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </Example>
  )
}

function AvatarGroupWithCount() {
  return (
    <Example title="Group with Count">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </Example>
  )
}

function AvatarGroupWithIconCount() {
  return (
    <Example title="Group with Icon Count">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <PlusIcon weight="bold" />
        </AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <PlusIcon />
        </AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
            className="grayscale"
          />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
            className="grayscale"
          />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <PlusIcon />
        </AvatarGroupCount>
      </AvatarGroup>
    </Example>
  )
}

function AvatarInEmpty() {
  return (
    <Example title="In Empty">
      <Empty className="w-full flex-none border">
        <EmptyHeader>
          <EmptyMedia>
            <AvatarGroup>
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="grayscale"
                />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                  className="grayscale"
                />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                  className="grayscale"
                />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>
                <PlusIcon />
              </AvatarGroupCount>
            </AvatarGroup>
          </EmptyMedia>
          <EmptyTitle>No Team Members</EmptyTitle>
          <EmptyDescription>
            Invite your team to collaborate on this project.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <PlusIcon />
            Invite Members
          </Button>
        </EmptyContent>
      </Empty>
    </Example>
  )
}
