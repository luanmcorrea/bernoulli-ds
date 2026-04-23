"use client"

import * as React from "react"

import {
  Example,
  ExampleWrapper,
} from "@/pages/component-examples/components/example"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CheckboxExample() {
  return (
    <ExampleWrapper>
      <CheckboxBasic />
      <CheckboxWithDescription />
      <CheckboxInvalid />
      <CheckboxDisabled />
      <CheckboxWithTitle />
      <CheckboxInTable />
      <CheckboxGroup />
      <CheckboxCustom />
    </ExampleWrapper>
  )
}

function CheckboxBasic() {
  return (
    <Example title="Basic">
      <Field orientation="horizontal">
        <Checkbox id="terms" />
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
      </Field>
    </Example>
  )
}

function CheckboxWithDescription() {
  return (
    <Example title="With Description">
      <Field orientation="horizontal">
        <Checkbox id="terms-2" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="terms-2">Accept terms and conditions</FieldLabel>
          <FieldDescription>
            By clicking this checkbox, you agree to the terms and conditions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </Example>
  )
}

function CheckboxInvalid() {
  return (
    <Example title="Invalid">
      <Field orientation="horizontal" data-invalid>
        <Checkbox id="terms-3" aria-invalid />
        <FieldLabel htmlFor="terms-3">Accept terms and conditions</FieldLabel>
      </Field>
    </Example>
  )
}

function CheckboxDisabled() {
  return (
    <Example title="Disabled">
      <Field orientation="horizontal">
        <Checkbox id="toggle" disabled />
        <FieldLabel htmlFor="toggle">Enable notifications</FieldLabel>
      </Field>
    </Example>
  )
}

function CheckboxWithTitle() {
  return (
    <Example title="With Title">
      <FieldGroup>
        <FieldLabel htmlFor="toggle-2">
          <Field orientation="horizontal">
            <Checkbox id="toggle-2" defaultChecked />
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                You can enable or disable notifications at any time.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="toggle-4">
          <Field orientation="horizontal" data-disabled>
            <Checkbox id="toggle-4" disabled />
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                You can enable or disable notifications at any time.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </Example>
  )
}

const tableData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@example.com",
    role: "User",
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "User",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Editor",
  },
]

function CheckboxInTable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(["1"])
  )

  const selectAll = selectedRows.size === tableData.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
  }

  return (
    <Example title="In Table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8">
              <Checkbox
                id="select-all"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              data-state={selectedRows.has(row.id) ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  id={`row-${row.id}`}
                  checked={selectedRows.has(row.id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(row.id, checked === true)
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Example>
  )
}

function CheckboxGroup() {
  return (
    <Example title="Group">
      <Field>
        <FieldLabel>Show these items on the desktop:</FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
          <FieldLabel
            htmlFor="finder-pref-9k2-hard-disks-ljj"
            className="font-normal"
          >
            Hard disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-external-disks-1yg" />
          <FieldLabel
            htmlFor="finder-pref-9k2-external-disks-1yg"
            className="font-normal"
          >
            External disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
          <FieldLabel
            htmlFor="finder-pref-9k2-cds-dvds-fzt"
            className="font-normal"
          >
            CDs, DVDs, and iPods
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2"
            className="font-normal"
          >
            Connected servers
          </FieldLabel>
        </Field>
      </Field>
    </Example>
  )
}

function CheckboxCustom() {
  const options = [
    { label: "Social Media", value: "social-media", },
    { label: "Advertising", value: "advertising", },
    { label: "Search Engine", value: "search-engine", },
    { label: "Referral", value: "referral", },
    { label: "Other", value: "other", },
  ]
  return (
    <Example title="Custom">
      <FieldGroup>
        <FieldSet className="gap-4">
          <FieldLegend>How did you hear about us?</FieldLegend>
          <FieldDescription className="line-clamp-1">
            Select the option that best describes how you heard about us.
          </FieldDescription>
          <FieldGroup className="flex flex-row flex-wrap gap-2">
            {options.map((option) => (
              <FieldLabel
                htmlFor={option.value}
                key={option.value}
                className="w-fit!"
              >
                <Field
                  orientation="horizontal"
                  className="overflow-hidden  px-3! py-1.5! transition-all has-data-checked:px-2! has-data-checked:gap-1.5"
                >
                  <Checkbox
                    value={option.value}
                    id={option.value}
                    defaultChecked={option.value === "social-media"}
                    className="-ml-6 rounded-full -translate-x-2 transition-all has-data-checked:ml-0 has-data-checked:translate-x-0"
                  />
                  <FieldTitle>{option.label}</FieldTitle>
                </Field>
              </FieldLabel>
            ))}
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </Example>
  )
}
