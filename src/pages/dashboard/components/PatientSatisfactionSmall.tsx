import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Meh, Frown } from "lucide-react";

export default function PatientSatisfactionSmall() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Satisfaction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Smile className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Satisfied</span>
            </div>
            <span className="text-sm font-bold">75%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Meh className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Neutral</span>
            </div>
            <span className="text-sm font-bold">20%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Frown className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">Unsatisfied</span>
            </div>
            <span className="text-sm font-bold">5%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
