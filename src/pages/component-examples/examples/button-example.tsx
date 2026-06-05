"use client"

import { Example, ExampleWrapper } from "@/pages/component-examples/components/example"
import { Button, buttonVariants } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { ArrowRightIcon, PlusIcon, FloppyDiskIcon, TelegramLogoIcon, TrashIcon, ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

export default function ButtonExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1 2xl:grid-cols-1">
      <ButtonVariants />
      <ButtonSizes />
      <ButtonIcon />
      <ButtonIconOnly />
      <ButtonLoading />
      <ButtonDestructive />
      <ButtonDisabled />
      <ButtonExamples />
    </ExampleWrapper>
  )
}

function ButtonVariants() {
  return (
    <Example title="Variants">
      <div className="flex flex-wrap items-center gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="neutral">Default</Button>
        <Button variant="secondary-neutral">Secondary</Button>
        <Button variant="outline-neutral">Outline</Button>
        <Button variant="ghost-neutral">Ghost</Button>
        <Button variant="link-neutral">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon"><PlusIcon /></Button>
        <Button variant="secondary" size="icon"><PlusIcon /></Button>
        <Button variant="outline" size="icon"><PlusIcon /></Button>
        <Button variant="ghost" size="icon"><PlusIcon /></Button>
        <Button variant="link" size="icon"><PlusIcon /></Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="neutral" size="icon"><PlusIcon /></Button>
        <Button variant="secondary-neutral" size="icon"><PlusIcon /></Button>
        <Button variant="outline-neutral" size="icon"><PlusIcon /></Button>
        <Button variant="ghost-neutral" size="icon"><PlusIcon /></Button>
        <Button variant="link-neutral" size="icon"><PlusIcon /></Button>
      </div>
    </Example>
  )
}

function ButtonSizes() {
  return (
    <Example title="Sizes">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra large</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon-xs"><TelegramLogoIcon/></Button>
        <Button size="icon-sm"><TelegramLogoIcon/></Button>
        <Button size="icon"><TelegramLogoIcon/></Button>
        <Button size="icon-lg"><TelegramLogoIcon/></Button>
        <Button size="icon-xl"><TelegramLogoIcon/></Button>
      </div>
    </Example>
  )
}

function ButtonIcon() {
  return (
    <Example title="Icon">
      <div className="flex flex-wrap items-center gap-4">
        <Button><ArrowLeftIcon/>Icon left</Button>
        <Button>Icon right<ArrowRightIcon/></Button>
      </div>
    </Example>
  )
}

function ButtonIconOnly() {
  return (
    <Example title="Icon Only">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon"><PlusIcon/></Button>
        <Button size="icon" variant="secondary"><PlusIcon/></Button>
        <Button size="icon" variant="outline"><PlusIcon/></Button>
        <Button size="icon" variant="ghost"><PlusIcon/></Button>
        <Button size="icon" variant="link"><PlusIcon/></Button>
      </div>  
      <div className="flex flex-wrap items-center gap-4">
        <Button size="icon" variant="neutral"><PlusIcon/></Button>
        <Button size="icon" variant="secondary-neutral"><PlusIcon/></Button>
        <Button size="icon" variant="outline-neutral"><PlusIcon/></Button>
        <Button size="icon" variant="ghost-neutral"><PlusIcon/></Button>
        <Button size="icon" variant="link-neutral"><PlusIcon/></Button>
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