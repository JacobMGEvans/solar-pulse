import type { Metadata } from "next"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContractsTable } from "./contracts-table"

export const metadata: Metadata = {
  title: "Contracts",
  description: "Manage solar panel installation contracts.",
}

export default function ContractsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Contracts</h2>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Contracts</CardTitle>
            <CardDescription>Manage and track all solar panel installation contracts.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContractsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

