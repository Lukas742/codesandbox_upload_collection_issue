import {
  Button,
  Dialog,
  ThemeProvider,
  UploadCollection,
} from "@ui5/webcomponents-react";
import { useRef, useState } from "react";

export default function App() {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Button
        onClick={() => {
          dialogRef.current.show();
        }}
      >
        Open via ref
      </Button>
      <Dialog
        ref={dialogRef}
        open={open}
        onAfterClose={() => {
          setOpen(false);
        }}
      >
        <UploadCollection
          mode="SingleSelect"
          // onDrop={onFileDrop}
          noDataText="Upload from"
          noDataDescription={
            "Drop files here, or choose the 'Select file' button"
          }
        />
      </Dialog>
    </ThemeProvider>
  );
}
