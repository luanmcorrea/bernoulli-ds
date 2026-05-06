"use client"

import {
  Example,
  ExampleWrapper,
} from "@/pages/component-examples/components/example"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  Multiselect,
  MultiselectContent,
  MultiselectGroup,
  MultiselectItem,
  MultiselectLabel,
  MultiselectSeparator,
  MultiselectTrigger,
  MultiselectValue,
} from "@/components/multiselect"

export default function MultiselectExample() {
  return (
    <ExampleWrapper>
      <MultiselectBasic />
      <MultiselectWithGroups />
      <MultiselectSearchLargeList />
      <MultielectSmall />
      <MultiselectClickRemove />
      <MultiselectDisabled />
      <MultiselectSides />
      <MultiselectWithField />
      <MultiselectInvalid />
    </ExampleWrapper>
  )
}

function MultiselectBasic() {
  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Watermelon", value: "watermelon" },
  ]
  return (
    <Example title="Basic">
      <Multiselect defaultValues={["blueberry","grapes","pineapple"]}>
        <MultiselectTrigger className="w-full max-w-72">
          <MultiselectValue placeholder="Select fruits"/>
        </MultiselectTrigger >
        <MultiselectContent>
          <MultiselectGroup>
            {items.map((item) => (
              <MultiselectItem key={item.value} value={item.value}>
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
        </MultiselectContent>
      </Multiselect>
    </Example>
  )
}

function MultiselectWithGroups() {
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
    <Example title="With Groups & Select all">
      <Multiselect>
        <MultiselectTrigger className="w-full max-w-72">
          <MultiselectValue placeholder="Select fruits" />
        </MultiselectTrigger >
        <MultiselectContent selectAll={{ label: "Select all" }}>
          <MultiselectGroup>
            <MultiselectLabel>Fruits</MultiselectLabel>
              {fruits.map((item) => (
              <MultiselectItem key={item.value} value={item.value}>
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
          <MultiselectSeparator />
          <MultiselectGroup>
            <MultiselectLabel>Vegetables</MultiselectLabel>
              {vegetables.map((item) => (
              <MultiselectItem key={item.value} value={item.value}>
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
        </MultiselectContent>
      </Multiselect>
    </Example>
  )
}

function MultiselectSearchLargeList() {
  const items = [
    { label: "Select an item", value: null },
    ...Array.from({ length: 100 }).map((_, i) => ({
      label: `Item ${i}`,
      value: `item-${i}`,
    })),
  ]
  return (
    <Example title="Search & Large List">
      <Multiselect items={items}>
        <MultiselectTrigger className="w-full max-w-72">
          <MultiselectValue placeholder="Select fruits"/>
        </MultiselectTrigger>
        <MultiselectContent search={{
            emptyMessage: "No items found.",
            placeholder: "Search",
          }}>
          <MultiselectGroup>
            {items.map((item) => (
              <MultiselectItem key={item.value} value={item.value}>
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
        </MultiselectContent>
      </Multiselect>
    </Example>
  )
}

function MultielectSmall() {
  const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  return (
    <Example title="Small">
      <Multiselect items={items}>
        <MultiselectTrigger size="sm" className="w-full max-w-72">
          <MultiselectValue placeholder="Select fruits" />
        </MultiselectTrigger>
        <MultiselectContent>
          <MultiselectGroup>
            {items.map((item) => (
              <MultiselectItem key={item.value} value={item.value}>
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
        </MultiselectContent>
      </Multiselect>
    </Example>
  )
}

function MultiselectClickRemove() {
  const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="No click to remove item">
      <Multiselect defaultValues={["apple","banana"]}>
        <MultiselectTrigger className="w-full max-w-72">
          <MultiselectValue clickToRemove={false} placeholder="Select fruits"/>
        </MultiselectTrigger>
        <MultiselectContent>
          <MultiselectGroup>
            {items.map((item) => (
              <MultiselectItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
        </MultiselectContent>
      </Multiselect>
    </Example>
  )
}

function MultiselectDisabled() {
  const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="Disabled">
      <Multiselect defaultValues={["blueberry","grapes"]}>
        <MultiselectTrigger disabled className="w-full max-w-72">
          <MultiselectValue placeholder="Select fruits"/>
        </MultiselectTrigger>
        <MultiselectContent>
          <MultiselectGroup>
            {items.map((item) => (
              <MultiselectItem
                key={item.value}
                value={item.value}
              >
                {item.label}
              </MultiselectItem>
            ))}
          </MultiselectGroup>
        </MultiselectContent>
      </Multiselect>
    </Example>
  )
}

function MultiselectSides() {
  const items = [
    { label: "Select", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
  ]
  return (
    <Example title="Sides" containerClassName="col-span-2">
      <div className="flex flex-wrap justify-center gap-2">
        {(
          [
            "inline-start",
            "left",
            "top",
            "bottom",
            "right",
            "inline-end",
          ] as const
        ).map((side) => (
          <Multiselect key={side}>
            <MultiselectTrigger className="w-48 capitalize">
              <MultiselectValue placeholder={side.replace("-", " ")} />
            </MultiselectTrigger>
            <MultiselectContent side={side}>
              <MultiselectGroup>
                {items.map((item) => (
                  <MultiselectItem key={item.value} value={item.value}>
                    {item.label}
                  </MultiselectItem>
                ))}
              </MultiselectGroup>
            </MultiselectContent>
          </Multiselect>
        ))}
      </div>
    </Example>
  )
}

function MultiselectWithField() {
  const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="With Field">
      <Field>
        <FieldLabel htmlFor="multiselect-fruit">Favorite fruits</FieldLabel>
        <Multiselect items={items}>
          <MultiselectTrigger id="multiselect-fruit">
            <MultiselectValue placeholder="Select fruits" />
          </MultiselectTrigger>
          <MultiselectContent>
            <MultiselectGroup>
              {items.map((item) => (
                <MultiselectItem key={item.value} value={item.value}>
                  {item.label}
                </MultiselectItem>
              ))}
            </MultiselectGroup>
          </MultiselectContent>
        </Multiselect>
        <FieldDescription>
          Choose your favorite fruits.
        </FieldDescription>
      </Field>
    </Example>
  )
}

function MultiselectInvalid() {
  const items = [
    { label: "Select a fruit", value: null },
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ]
  return (
    <Example title="Invalid">
      <div className="flex flex-col gap-4">
        <Multiselect items={items}>
          <MultiselectTrigger aria-invalid="true" className="w-full max-w-72">
            <MultiselectValue placeholder="Select fruits"/>
          </MultiselectTrigger>
          <MultiselectContent>
            <MultiselectGroup>
              {items.map((item) => (
                <MultiselectItem key={item.value} value={item.value}>
                  {item.label}
                </MultiselectItem>
              ))}
            </MultiselectGroup>
          </MultiselectContent>
        </Multiselect>
        <Field data-invalid>
          <FieldLabel htmlFor="multiselect-fruit-invalid">Favorite Fruit</FieldLabel>
          <Multiselect items={items}>
            <MultiselectTrigger id="multiselect-fruit-invalid" aria-invalid>
              <MultiselectValue placeholder="Select fruits"/>
            </MultiselectTrigger>
            <MultiselectContent>
              <MultiselectGroup>
                {items.map((item) => (
                  <MultiselectItem key={item.value} value={item.value}>
                    {item.label}
                  </MultiselectItem>
                ))}
              </MultiselectGroup>
            </MultiselectContent>
          </Multiselect>
          <FieldError errors={[{ message: "Please select a valid fruit." }]} />
        </Field>
      </div>
    </Example>
  )
}
