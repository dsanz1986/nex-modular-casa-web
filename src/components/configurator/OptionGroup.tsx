
import { ConfigOption } from "@/lib/configurator-data";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface OptionGroupProps {
  title: string;
  options: ConfigOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  showColors?: boolean;
}

export const OptionGroup = ({ title, options, selectedValue, onSelect, showColors = false }: OptionGroupProps) => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-playfair font-semibold text-nex-text">{title}</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const isSelected = selectedValue === option.id;
          
          return (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md border-2 ${
                isSelected 
                  ? 'border-nex-primary bg-nex-primary/5' 
                  : 'border-gray-200 hover:border-nex-primary/50'
              }`}
              onClick={() => onSelect(option.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {showColors && option.color && (
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-gray-200 flex-shrink-0"
                        style={{ backgroundColor: option.color }}
                      />
                    )}
                    <div>
                      <h5 className="font-inter font-medium text-nex-text">{option.name}</h5>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="w-6 h-6 bg-nex-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
