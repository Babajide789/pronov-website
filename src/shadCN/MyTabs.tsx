import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyTabs(){
  return(
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger
          value="all users"
          className="relative px-4 py-2 text-sm text-gray-600 data-[state=active]:text-green-600
                     data-[state=active]:font-semibold
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5
                     after:bg-green-600 after:opacity-0 data-[state=active]:after:opacity-100 transition-all"
        >
          All Users
        </TabsTrigger>

        <TabsTrigger
          value="group rules"
          className="relative px-4 py-2 text-sm text-gray-600 data-[state=active]:text-green-600
                     data-[state=active]:font-semibold
                     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5
                     after:bg-green-600 after:opacity-0 data-[state=active]:after:opacity-100 transition-all"
        >
          Group Rules
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all users">Make changes to your users here.</TabsContent>
      <TabsContent value="group rules">Change your password here.</TabsContent>
    </Tabs>
  )
}
