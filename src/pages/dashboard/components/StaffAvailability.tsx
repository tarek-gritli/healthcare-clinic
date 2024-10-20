import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, UserCheck, UserX } from "lucide-react";

export default function StaffAvailability() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Total Staff</span>
            </div>
            <span className="text-sm font-bold">50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Available</span>
            </div>
            <span className="text-sm font-bold">42</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <UserX className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">On Leave</span>
            </div>
            <span className="text-sm font-bold">8</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
