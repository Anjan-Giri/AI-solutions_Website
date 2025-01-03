import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ContactManagement.css";

function ContactsTable({ contacts, onEdit, onDelete }) {
  return (
    <TableContainer
      component={Paper}
      className="rounded-lg shadow-lg overflow-hidden"
    >
      <Table className="min-w-full">
        <TableHead>
          <TableRow className="bg-teal-600 text-white text-sm uppercase">
            <TableCell className="p-4">Name</TableCell>
            <TableCell className="p-4">Email</TableCell>
            <TableCell className="p-4">Phone Number</TableCell>
            <TableCell className="p-4">Company</TableCell>
            <TableCell className="p-4">Country</TableCell>
            <TableCell className="p-4">Job Title</TableCell>
            <TableCell className="p-4">Message</TableCell>
            <TableCell className="p-4 text-center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow
              key={index}
              className="hover:bg-teal-50 transition duration-200"
            >
              <TableCell className="p-4">{contact.name}</TableCell>
              <TableCell className="p-4">{contact.email}</TableCell>
              <TableCell className="p-4">{contact.phone}</TableCell>
              <TableCell className="p-4">{contact.company}</TableCell>
              <TableCell className="p-4">{contact.country}</TableCell>
              <TableCell className="p-4">{contact.jobTitle}</TableCell>
              <TableCell className="p-4">{contact.message}</TableCell>
              <TableCell className="p-4 flex justify-center gap-2">
                {/* <IconButton
                  onClick={() => onEdit(contact._id)}
                  className="text-teal-600 hover:text-teal-800"
                >
                  <EditIcon />
                </IconButton> */}
                <IconButton
                  onClick={() => onDelete(contact._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactsTable;
