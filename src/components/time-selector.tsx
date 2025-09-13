"use client";

import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

// --- Helper to generate 96 time blocks (15-min intervals) ---
const generateTimeBlocks = (): string[] => {
  const blocks: string[] = [];
  let hour = 0;
  let minute = 0;

  for (let i = 0; i < 96; i++) {
    const label = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
      2,
      "0"
    )}`;
    blocks.push(label);
    minute += 15;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  return blocks;
};

const timeBlocks: string[] = generateTimeBlocks();

type TableRowData = {
  timeBlock: string;
  value: string;
};

export default function DateTimeBlockTable() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [tableData, setTableData] = useState<TableRowData[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  // Toggle block selection
  const toggleBlock = (block: string) => {
    setSelectedBlocks((prev) =>
      prev.includes(block) ? prev.filter((b) => b !== block) : [...prev, block]
    );
  };

  // Generate table with default values
  const handleGenerateTable = () => {
    if (!date || selectedBlocks.length === 0) return;

    const newTableData: TableRowData[] = selectedBlocks.map((block) => ({
      timeBlock: block,
      value: "Default", // pre-filled value
    }));

    setTableData(newTableData);
    setOpen(true);
  };

  // Handle table input change
  const handleInputChange = (index: number, newValue: string) => {
    setTableData((prev) => {
      const updated = [...prev];
      updated[index].value = newValue;
      return updated;
    });
  };

  // Submit data to API
  const handleSubmit = async () => {
    if (!date) return;

    try {
      const payload = {
        date: format(date, "yyyy-MM-dd"),
        data: tableData,
      };

      await axios.post("/api/xyz", payload);
      alert("✅ Data submitted successfully!");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting data!");
    }
  };

  return (
    <div className="space-y-6">
      {/* Date Picker */}
      <div>
        <h2 className="text-lg font-bold">Select Date</h2>
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>

      {/* Time Blocks */}
      <div>
        <h2 className="text-lg font-bold">Select Time Blocks</h2>
        <div className="grid grid-cols-6 gap-2 max-h-[300px] overflow-y-auto p-2 border rounded">
          {timeBlocks.map((block) => (
            <div key={block} className="flex items-center space-x-2">
              <Checkbox
                checked={selectedBlocks.includes(block)}
                onCheckedChange={() => toggleBlock(block)}
              />
              <span className="text-sm">{block}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <Button
        onClick={handleGenerateTable}
        disabled={!date || selectedBlocks.length === 0}
      >
        Generate Table
      </Button>

      {/* Dialog with Editable Table */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Table</DialogTitle>
          </DialogHeader>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time Block</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.timeBlock}>
                  <TableCell>{row.timeBlock}</TableCell>
                  <TableCell>
                    <input
                      type="text"
                      value={row.value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
