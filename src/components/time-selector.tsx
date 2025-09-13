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
// import { EXPANDED_DATA } from "@/lib/data";
import { EXPANDED_DATA_T } from "@/lib/constant";

type TableRowData = {
  date: string;
  timeBlock: string;
  sellBid: string;
  purchaseBid: string;
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

  // Generate table using EXPANDED_DATA
  const handleGenerateTable = () => {
    if (!date || selectedBlocks.length === 0) return;

    const formattedDate = format(date, "yyyy-MM-dd");

    // Filter EXPANDED_DATA based on date + selected blocks
    const newTableData: TableRowData[] = EXPANDED_DATA_T.filter(
      (row: any) =>
        row.date === formattedDate && selectedBlocks.includes(row.timeBlock)
    ).map((row: any) => ({
      date: row.date,
      timeBlock: row.timeBlock,
      sellBid: row.sellBid,
      purchaseBid: row.purchaseBid,
    }));

    setTableData(newTableData);
    setOpen(true);
  };

  // Handle table input change
  const handleInputChange = (
    index: number,
    field: "sellBid" | "purchaseBid",
    newValue: string
  ) => {
    setTableData((prev) => {
      const updated = [...prev];
      updated[index][field] = newValue;
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

  // Extract time blocks only for the selected date
  const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
  const availableTimeBlocks: string[] = Array.from(
    new Set(
      EXPANDED_DATA_T.filter((row: any) => row.date === formattedDate).map(
        (row: any) => row.timeBlock
      )
    )
  );

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
          {availableTimeBlocks.map((block) => (
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
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Edit Bids</DialogTitle>
          </DialogHeader>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time Block</TableHead>
                <TableHead>Sell Bid</TableHead>
                <TableHead>Purchase Bid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={`${row.date}-${row.timeBlock}`}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.timeBlock}</TableCell>
                  <TableCell>
                    <input
                      type="text"
                      value={row.sellBid}
                      onChange={(e) =>
                        handleInputChange(index, "sellBid", e.target.value)
                      }
                      className="border rounded px-2 py-1 w-full"
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      type="text"
                      value={row.purchaseBid}
                      onChange={(e) =>
                        handleInputChange(index, "purchaseBid", e.target.value)
                      }
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
