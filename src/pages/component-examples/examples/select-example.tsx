"use client"

import { useState } from "react"
import {
  Example,
  ExampleWrapper,
} from "@/pages/component-examples/components/example"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SelectExample() {
  return (
    <ExampleWrapper>
      <SelectBasic />
      <SelectWithIcons />
      <SelectWithAvatar />
      <SelectWithGroups />
      <SelectSides />
      <SelectLargeList />
      <SelectSizes />
      <SelectPlan />
      <SelectWithButton />
      <SelectWithField />
      <SelectInvalid />
      <SelectInline />
      <SelectDisabled />
      <SelectInDialog />
    </ExampleWrapper>
  )
}

function SelectBasic() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="Basic">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

function SelectWithIcons() {
  return (
    <Example title="With Icons">
      <div className="flex flex-col gap-4">
        <Select>
          <SelectTrigger size="sm">
            <SelectValue
              placeholder={
                <>
                  <IconPlaceholder
                    lucide="ChartLineIcon"
                    tabler="IconChartLine"
                    hugeicons="Chart03Icon"
                    phosphor="ChartLineIcon"
                    remixicon="RiLineChartLine"
                  />
                  Chart Type
                </>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="line">
                <IconPlaceholder
                  lucide="ChartLineIcon"
                  tabler="IconChartLine"
                  hugeicons="Chart03Icon"
                  phosphor="ChartBarIcon"
                  remixicon="RiBarChartLine"
                />
                Line
              </SelectItem>
              <SelectItem value="bar">
                <IconPlaceholder
                  lucide="ChartBarIcon"
                  tabler="IconChartBar"
                  hugeicons="Chart03Icon"
                  phosphor="ChartBarIcon"
                  remixicon="RiBarChartLine"
                />
                Bar
              </SelectItem>
              <SelectItem value="pie">
                <IconPlaceholder
                  lucide="ChartPieIcon"
                  tabler="IconChartPie"
                  hugeicons="Chart03Icon"
                  phosphor="ChartPieIcon"
                  remixicon="RiPieChartLine"
                />
                Pie
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger size="default">
            <SelectValue
              placeholder={
                <>
                  <IconPlaceholder
                    lucide="ChartLineIcon"
                    tabler="IconChartLine"
                    hugeicons="Chart03Icon"
                    phosphor="ChartLineIcon"
                    remixicon="RiLineChartLine"
                  />
                  Chart Type
                </>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="line">
                <IconPlaceholder
                  lucide="ChartLineIcon"
                  tabler="IconChartLine"
                  hugeicons="Chart03Icon"
                  phosphor="ChartLineIcon"
                  remixicon="RiLineChartLine"
                />
                Line
              </SelectItem>
              <SelectItem value="bar">
                <IconPlaceholder
                  lucide="ChartBarIcon"
                  tabler="IconChartBar"
                  hugeicons="Chart03Icon"
                  phosphor="ChartBarIcon"
                  remixicon="RiBarChartLine"
                />
                Bar
              </SelectItem>
              <SelectItem value="pie">
                <IconPlaceholder
                  lucide="ChartPieIcon"
                  tabler="IconChartPie"
                  hugeicons="Chart03Icon"
                  phosphor="ChartPieIcon"
                  remixicon="RiPieChartLine"
                />
                Pie
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Example>
  )
}

function SelectWithAvatar() {
  const items = [
    {
      label: (
        <>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/jorgezreik.png" alt="@jorgezreik" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          Jorge Zreik
        </>
      ),
      value: "jorgezreik",
    },
    {
      label: (
        <>
          <Avatar size="sm">
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          John Doe
        </>
      ),
      value: "johndoe",
    },
    {
      label: (
        <>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          Pranathip
        </>
      ),
      value: "shadcn",
    },
    {
      label: (
        <>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          Max Leiter
        </>
      ),
      value: "vercel",
    },
  ]
  return (
    <Example title="With Avatar">
      <Select defaultValue="johndoe">
        <SelectTrigger className="w-full max-w-72">
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

function SelectWithGroups() {
  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  const vegetables = [
    { label: "Carrot", value: "carrot" },
    { label: "Broccoli", value: "broccoli" },
    { label: "Spinach", value: "spinach" },
  ]
  return (
    <Example title="With Groups & Labels">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {fruits.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            {vegetables.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

function SelectSides() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  return (
    <Example title="Sides" containerClassName="col-span-2">
      <div className="flex flex-wrap justify-center gap-2">
        {(["left", "top", "bottom", "right"] as const).map((side) => (
          <Select key={side}>
            <SelectTrigger className="w-38 capitalize">
              <SelectValue placeholder={side} />
            </SelectTrigger>
            <SelectContent side={side}>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </div>
    </Example>
  )
}

function SelectLargeList() {
  const items = Array.from({ length: 100 }).map((_, i) => ({
    label: `Item ${i}`,
    value: `item-${i}`,
  }))
  return (
    <Example title="Large List & Search">
      <Select>
        <SelectTrigger className="w-full max-w-72">
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent
          search={{
            emptyMessage: "No items found.",
            placeholder: "Search",
          }}
        >
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

function SelectSizes() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  return (
    <Example title="Sizes">
      <div className="flex flex-col gap-4">
        <Select>
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger size="default">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Example>
  )
}

function SelectWithButton() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  return (
    <Example title="With Button">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            Submit
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline">Submit</Button>
        </div>
      </div>
    </Example>
  )
}

function SelectWithField() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="With Field">
      <Field>
        <FieldLabel htmlFor="select-fruit">Favorite Fruit</FieldLabel>
        <Select>
          <SelectTrigger id="select-fruit">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <FieldDescription>
          Choose your favorite fruit from the list.
        </FieldDescription>
      </Field>
    </Example>
  )
}

function SelectInvalid() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  return (
    <Example title="Invalid">
      <div className="flex flex-col gap-4">
        <Select>
          <SelectTrigger aria-invalid="true">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Field data-invalid>
          <FieldLabel htmlFor="select-fruit-invalid">Favorite Fruit</FieldLabel>
          <Select>
            <SelectTrigger id="select-fruit-invalid" aria-invalid>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldError errors={[{ message: "Please select a valid fruit." }]} />
        </Field>
      </div>
    </Example>
  )
}

function SelectInline() {
  const items = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ]
  return (
    <Example title="Inline with Input & NativeSelect">
      <div className="flex items-center gap-2">
        <Input placeholder="Search..." className="flex-1" />
        <Select>
          <SelectTrigger className="w-35">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <NativeSelect className="w-35">
          <NativeSelectOption value="">Sort by</NativeSelectOption>
          <NativeSelectOption value="name">Name</NativeSelectOption>
          <NativeSelectOption value="date">Date</NativeSelectOption>
          <NativeSelectOption value="status">Status</NativeSelectOption>
        </NativeSelect>
      </div>
    </Example>
  )
}

function SelectDisabled() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes", disabled: true },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="Disabled">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
  },
  {
    name: "Professional",
    description: "Ideal for growing teams and businesses.",
  },
  {
    name: "Enterprise",
    description: "Advanced features for large organizations.",
  },
]

function SelectPlan() {
  const [selected, setSelected] = useState(plans[0].name)
  const selectedPlan = plans.find((p) => p.name === selected) ?? plans[0]
  return (
    <Example title="Subscription Plan">
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="h-auto! w-72">
          <SelectValue placeholder="Select a plan" asChild>
            <span>
              <SelectPlanItem plan={selectedPlan} />
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {plans.map((plan) => (
              <SelectItem key={plan.name} value={plan.name}>
                <SelectPlanItem plan={plan} />
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Example>
  )
}

function SelectPlanItem({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <Item size="xs" className="w-full p-0">
      <ItemContent className="gap-0">
        <ItemTitle>{plan.name}</ItemTitle>
        <ItemDescription className="text-xs">
          {plan.description}
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}

function SelectInDialog() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="In Dialog">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Example</DialogTitle>
            <DialogDescription>
              Use the select below to choose a fruit.
            </DialogDescription>
          </DialogHeader>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </DialogContent>
      </Dialog>
    </Example>
  )
}
