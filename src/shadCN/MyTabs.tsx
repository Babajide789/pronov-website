import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function MyTabs(){
    return(
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="all users">All Users</TabsTrigger>
                <TabsTrigger value="group rules">Group Rules</TabsTrigger>
            </TabsList>

            <TabsContent value="all users">Make changes to your account here.</TabsContent>
            <TabsContent value="group rules">Change your password here.</TabsContent>
        </Tabs>
    )
}
