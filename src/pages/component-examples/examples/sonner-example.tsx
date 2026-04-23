"use client"

import { toast } from "sonner"

import {
  Example,
  ExampleWrapper,
} from "@/pages/component-examples/components/example"
import { Button } from "@/components/ui/button"

export default function SonnerExample() {
  return (
    <ExampleWrapper>
      <SonnerGeneral />
    </ExampleWrapper>
  )
}

function SonnerGeneral() {
  return (
    <Example title="General" containerClassName="col-span-2">
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant="outline" onClick={() => toast("Event has been created")}>
          Default
        </Button>
        <Button variant="outline" onClick={() => toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Description
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Event has been created")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Be at the area 10 minutes before the event time")
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Event start time cannot be earlier than 8am")
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Event has not been created")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const toastId = toast.loading("Loading...")

            setTimeout(() => {
              toast.success("Event has been created", { id: toastId })
            }, 2000)
          }}
        >
          Loading
        </Button>
      </div>
      
    </Example>
  )
}
