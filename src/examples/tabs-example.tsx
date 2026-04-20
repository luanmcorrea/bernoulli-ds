import {
  Example,
  ExampleWrapper,
} from "@/components/example"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AppWindowIcon, CodeIcon, DotsThreeVerticalIcon, GearIcon, HouseIcon, MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react"

export default function TabsExample() {
  return (
    <ExampleWrapper>
      <TabsDefault />
      <TabsGhost />
      <TabsOutline />
      <TabsLine />
      <TabsDisabled />
      <TabsWithIcons />
      <TabsIconOnly />
      <TabsFullWidth />
      <TabsWithContent />
      <TabsLineWithContent />
      <TabsWithOptions />
      <TabsVertical />
      <TabsWithInputAndButton />
    </ExampleWrapper>
  )
}

function TabsDefault() {
  return (
    <Example title="Default">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsGhost() {
  return (
      <Example title="Ghost">
      <Tabs defaultValue="overview">
        <TabsList variant="ghost">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsOutline() {
  return (
    <Example title="Outline">
      <Tabs defaultValue="overview">
        <TabsList variant="outline">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsLine() {
  return (
    <Example title="Line">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsDisabled() {
  return (
    <Example title="Disabled">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsWithIcons() {
  return (
    <Example title="With Icons">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">
            <AppWindowIcon />Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon />Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsIconOnly() {
  return (
    <Example title="Icon Only" containerClassName="col-span-full">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <Tabs defaultValue="home">
          <TabsList size="lg">
            <TabsTrigger value="home">
              <HouseIcon />
            </TabsTrigger>
            <TabsTrigger value="search">
              <MagnifyingGlassIcon />
            </TabsTrigger>
            <TabsTrigger value="settings">
              <GearIcon />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="home">
          <TabsList size="lg" variant="ghost">
            <TabsTrigger value="home">
              <HouseIcon />
            </TabsTrigger>
            <TabsTrigger value="search">
              <MagnifyingGlassIcon />
            </TabsTrigger>
            <TabsTrigger value="settings">
              <GearIcon />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="home">
          <TabsList size="lg" variant="outline">
            <TabsTrigger value="home">
              <HouseIcon />
            </TabsTrigger>
            <TabsTrigger value="search">
              <MagnifyingGlassIcon />
            </TabsTrigger>
            <TabsTrigger value="settings">
              <GearIcon />
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="home">
          <TabsList size="lg" variant="line">
            <TabsTrigger value="home">
              <HouseIcon />
            </TabsTrigger>
            <TabsTrigger value="search">
              <MagnifyingGlassIcon />
            </TabsTrigger>
            <TabsTrigger value="settings">
              <GearIcon />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
    </Example>
  )
}

function TabsFullWidth() {
  return (
    <Example title="Full Width & Sizes" containerClassName="col-span-full">
      <Tabs defaultValue="overview">
        <TabsList className="w-full" size="sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="overview">
        <TabsList className="w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="overview">
        <TabsList className="w-full" size="lg">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsWithContent() {
  return (
    <Example title="With Content">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="border rounded-lg p-6">
          <TabsContent value="account">
            Manage your account preferences and profile information.
          </TabsContent>
          <TabsContent value="password">
            Update your password to keep your account secure.
          </TabsContent>
          <TabsContent value="notifications">
            Configure how you receive notifications and alerts.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}

function TabsLineWithContent() {
  return (
    <Example title="Line With Content">
      <Tabs defaultValue="account" className="gap-0">
        <TabsList variant="line" className="-mb-px">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="border-t pt-6">
          <TabsContent value="account">
            Manage your account preferences and profile information.
          </TabsContent>
          <TabsContent value="password">
            Update your password to keep your account secure.
          </TabsContent>
          <TabsContent value="notifications">
            Configure how you receive notifications and alerts.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}

function TabsWithOptions() {
  return (
    <Example title="With Add & Options">
      <Tabs defaultValue="overview">
        <div className="flex items-center gap-2 w-full overflow-x-auto">
          <TabsList variant="outline">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <Button variant="default" size="icon"><PlusIcon /></Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost-neutral" size="icon" className="ml-auto" />}
            >
              <DotsThreeVerticalIcon weight="bold"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="border rounded-lg p-6">
          <TabsContent value="overview">
            View your dashboard metrics and key performance indicators.
          </TabsContent>
          <TabsContent value="analytics">
            Detailed analytics and insights about your data.
          </TabsContent>
          <TabsContent value="reports">
            Generate and view custom reports.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}

function TabsVertical() {
  return (
    <Example title="Vertical">
      <Tabs defaultValue="account" orientation="vertical">
        <TabsList variant="ghost" size="sm">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="border rounded-lg p-6">
          <TabsContent value="account">
            Manage your account preferences and profile information.
          </TabsContent>
          <TabsContent value="password">
            Update your password to keep your account secure. Use a strong
            password with a mix of letters, numbers, and symbols.
          </TabsContent>
          <TabsContent value="notifications">
            Configure how you receive notifications and alerts. Choose which
            types of notifications you want to receive and how you want to
            receive them.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}

function TabsWithInputAndButton() {
  return (
    <Example title="With Input" containerClassName="col-span-full">
      <Tabs defaultValue="overview" className="mx-auto w-full max-w-lg">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <TabsList size="sm" variant="ghost">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <Input placeholder="Search..." className="w-44" />
        </div>
        <div className="border rounded-lg p-6 style-nova:rounded-lg style-nova:p-4 style-lyra:rounded-none style-lyra:p-4 style-maia:rounded-xl style-maia:p-6 style-mira:rounded-md style-mira:p-4 style-luma:rounded-xl style-luma:p-6">
          <TabsContent value="overview">
            View your dashboard metrics and key performance indicators.
          </TabsContent>
          <TabsContent value="analytics">
            Detailed analytics and insights about your data.
          </TabsContent>
          <TabsContent value="reports">
            Generate and view custom reports.
          </TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}
