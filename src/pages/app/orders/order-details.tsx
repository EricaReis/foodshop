import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: 4rye3437fuis</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Customer</TableCell>
              <TableCell className="flex justify-end">Erica Reis</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">92322390123</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">erica@gmailcom</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Time since order
              </TableCell>
              <TableCell className="flex justify-end">5 minutes</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Corn dog family size</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$5</TableCell>
              <TableCell className="text-right">$10</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Sunny side up egg</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$3</TableCell>
              <TableCell className="text-right">$6</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Bagel</TableCell>
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">$3</TableCell>
              <TableCell className="text-right">$9</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3}>Order Total</TableCell>
            <TableCell className="text-right font-medium">$25</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
