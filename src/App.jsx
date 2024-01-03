import {
  Dialog,
  UploadCollection,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import wcrPkg from "@ui5/webcomponents-react/package.json";

export default function App() {
  return (
    <ThemeProvider>
      <Dialog open>
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
