// src/components/SpecializationCard.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SpecializationCardProps {
  icon?: LucideIcon;
  title: string;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({ icon: Icon, title }) => {
  return (
    <Card className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-center rounded-3xl shadow-md p-6 bg-muted border-none">
      <CardContent className="flex items-center p-0 space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-background">
          {Icon && (
            <Icon
              className="w-6 h-6 text-foreground"
            />
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground flex-grow">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default SpecializationCard;
