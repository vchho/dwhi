"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { SelectSingleEventHandler } from "react-day-picker";

interface DatePickerProps {
  value: Date | undefined;
  setValue: (date: Date | undefined) => void;
}

export function DatePicker({ setValue, value }: DatePickerProps) {
  // https://github.com/shadcn-ui/ui/issues/901#issuecomment-1719716399
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setValue(date);
  }, [date, setValue]);

  const handleOnSelect: SelectSingleEventHandler = (date) => {
    // onSelect?.(date)
    setDate(date);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            // "max-w-[280px] justify-start text-left font-normal",
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          today={value || new Date()}
          selected={value}
          // onSelect={setDate}
          onSelect={handleOnSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
