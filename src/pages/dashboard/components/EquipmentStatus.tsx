import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export default function EquipmentStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Operational</span>
            </div>
            <span className="text-sm font-bold">85%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Needs Maintenance</span>
            </div>
            <span className="text-sm font-bold">10%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">Out of Service</span>
            </div>
            <span className="text-sm font-bold">5%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
