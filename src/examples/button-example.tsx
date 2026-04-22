"use client"

import { Example, ExampleWrapper } from "@/components/example"
import { Button, buttonVariants } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { ArrowRightIcon, PlusIcon, FloppyDiskIcon, TelegramLogoIcon, TrashIcon, ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

export default function ButtonExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1 2xl:grid-cols-1">
      <ButtonVariantsAndSizes />
      <ButtonIconLeft />
      <ButtonIconRight />
      <ButtonIconOnly />
      <ButtonLoading />
      <ButtonDestructive />
      <ButtonDisabled />
      <ButtonExamples />
    </ExampleWrapper>
  )
}

function ButtonVariantsAndSizes() {
  return (
    <Example title="Variants & Sizes">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="outline">Outline</Button>
        <Button size="sm" variant="ghost">Ghost</Button>
        <Button size="sm" variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg">Default</Button>
        <Button size="lg" variant="outline">Outline</Button>
        <Button size="lg" variant="ghost">Ghost</Button>
        <Button size="lg" variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="xl">Default</Button>
        <Button size="xl" variant="outline">Outline</Button>
        <Button size="xl" variant="ghost">Ghost</Button>
        <Button size="xl" variant="link">Link</Button>
      </div>
    </Example>
  )
}

function ButtonIconLeft() {
  return (
    <Example title="Icon Left">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm"><PlusIcon/>Default</Button>
        <Button size="sm" variant="outline"><PlusIcon/>Outline</Button>
        <Button size="sm" variant="ghost"><PlusIcon/>Ghost</Button>
        <Button size="sm" variant="link"><PlusIcon/>Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button><PlusIcon/>Default</Button>
        <Button variant="outline"><PlusIcon/>Outline</Button>
        <Button variant="ghost"><PlusIcon/>Ghost</Button>
        <Button variant="link"><PlusIcon/>Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg"><PlusIcon/>Default</Button>
        <Button size="lg" variant="outline"><PlusIcon/>Outline</Button>
        <Button size="lg" variant="ghost"><PlusIcon/>Ghost</Button>
        <Button size="lg" variant="link"><PlusIcon/>Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="xl"><PlusIcon/>Default</Button>
        <Button size="xl" variant="outline"><PlusIcon/>Outline</Button>
        <Button size="xl" variant="ghost"><PlusIcon/>Ghost</Button>
        <Button size="xl" variant="link"><PlusIcon/>Link</Button>
      </div>
    </Example>
  )
}

function ButtonIconRight() {
  return (
    <Example title="Icon Right">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Default<ArrowRightIcon/></Button>
        <Button size="sm" variant="outline">Outline<ArrowRightIcon/></Button>
        <Button size="sm" variant="ghost">Ghost<ArrowRightIcon/></Button>
        <Button size="sm" variant="link">Link<ArrowRightIcon/></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button>Default<ArrowRightIcon/></Button>
        <Button variant="outline">Outline<ArrowRightIcon/></Button>
        <Button variant="ghost">Ghost<ArrowRightIcon/></Button>
        <Button variant="link">Link<ArrowRightIcon/></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg">Default<ArrowRightIcon/></Button>
        <Button size="lg" variant="outline">Outline<ArrowRightIcon/></Button>
        <Button size="lg" variant="ghost">Ghost<ArrowRightIcon/></Button>
        <Button size="lg" variant="link">Link<ArrowRightIcon/></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="xl">Default<ArrowRightIcon/></Button>
        <Button size="xl" variant="outline">Outline<ArrowRightIcon/></Button>
        <Button size="xl" variant="ghost">Ghost<ArrowRightIcon/></Button>
        <Button size="xl" variant="link">Link<ArrowRightIcon/></Button>
      </div>
    </Example>
  )
}

function ButtonIconOnly() {
  return (
    <Example title="Icon Only">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon-sm"><PlusIcon/></Button>
        <Button size="icon-sm" variant="outline"><PlusIcon/></Button>
        <Button size="icon-sm" variant="ghost"><PlusIcon/></Button>
        <Button size="icon-sm" variant="link"><PlusIcon/></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon"><PlusIcon/></Button>
        <Button size="icon" variant="outline"><PlusIcon/></Button>
        <Button size="icon" variant="ghost"><PlusIcon/></Button>
        <Button size="icon" variant="link"><PlusIcon/></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon-lg"><PlusIcon/></Button>
        <Button size="icon-lg" variant="outline"><PlusIcon/></Button>
        <Button size="icon-lg" variant="ghost"><PlusIcon/></Button>
        <Button size="icon-lg" variant="link"><PlusIcon/></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon-xl"><PlusIcon/></Button>
        <Button size="icon-xl" variant="outline"><PlusIcon/></Button>
        <Button size="icon-xl" variant="ghost"><PlusIcon/></Button>
        <Button size="icon-xl" variant="link"><PlusIcon/></Button>
      </div>
    </Example>
  )
}

function ButtonLoading() {
  return (
    <Example title="Loading">
      <div className="flex flex-wrap items-center gap-4">
        <Button><Spinner/> Loading</Button>
        <Button variant="outline"><Spinner/> Loading</Button>
        <Button variant="ghost"><Spinner/> Loading</Button>
        <Button size="icon"><Spinner/></Button>
        <Button variant="outline" size="icon"><Spinner/></Button>
        <Button variant="ghost" size="icon"><Spinner/></Button>
      </div>
    </Example>
  )
}

function ButtonDestructive() {
  return (
    <Example title="Destructive">
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="destructive">Default</Button>
        <Button variant="destructive-outline">Outline</Button>
        <Button variant="destructive-ghost">Ghost</Button>
        <Button variant="destructive-link">Link</Button>                
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="destructive"><TrashIcon/>Default</Button>
        <Button variant="destructive-outline"><TrashIcon/>Outline</Button>
        <Button variant="destructive-ghost"><TrashIcon/>Ghost</Button>
        <Button variant="destructive-link"><TrashIcon/>Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon" variant="destructive"><TrashIcon/></Button>
        <Button size="icon" variant="destructive-outline"><TrashIcon/></Button>
        <Button size="icon" variant="destructive-ghost"><TrashIcon/></Button>
        <Button size="icon" variant="destructive-link"><TrashIcon/></Button>
      </div>
    </Example>
  )
}

function ButtonDisabled() {
  return (
    <Example title="Disabled">
      <div className="flex flex-wrap items-center gap-4">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="ghost" disabled>Ghost</Button>
        <Button variant="link" disabled>Link</Button>
      </div>
    </Example>
  )
}

function ButtonExamples() {
  return (
    <Example title="Examples">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline"><FloppyDiskIcon/>Save draft</Button>
        <Button><TelegramLogoIcon/>Publish</Button>
        <Button variant="ghost"><PlusIcon/>Add item</Button>
        <Button size="icon"><ArrowLeftIcon/></Button>
        <Button size="icon"><ArrowRightIcon/></Button>
        <Button variant="destructive"><TrashIcon/>Delete</Button>
        <a href="#button" className={buttonVariants({variant:"link"})}>External link <ArrowUpRightIcon /></a>
      </div>
    </Example>
  )
}