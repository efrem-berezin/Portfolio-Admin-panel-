import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const List = () => {
    const rows = [
        {
          id: 1143155,
          organisation: "Mercy Hospital",
          contact: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Invoice",
          status: "Approved",
        },
        {
          id: 2235235,
          organisation: "Buffalo River Hospital",
          contact: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Invoice",
          status: "Pending",
        },
        {
          id: 2342353,
          organisation: "KCR University",
          contact: "Karl Bonir",
          date: "1 March",
          amount: 35,
          method: "Invoice",
          status: "Pending",
        },
        {
          id: 2357741,
          organisation: "UST corparation",
          contact: "Jane Onail",
          date: "1 March",
          amount: 120,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          organisation: "HRI Block",
          contact: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Invoice",
          status: "Pending",
        },
      ];

    return(
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Organisation</TableCell>
            <TableCell className="tableCell">Contact Manager</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  
                  {row.organisation}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.contact}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default List