import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { prisma } from "@/lib/prisma";

const DashboardPage = async () => {
  const listOfPantrys = await prisma.list.findMany({});

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Dashboard
      </h1>
      {listOfPantrys.length > 0 ? (
        <>
          <p>You&apos;ve got lists</p>
        </>
      ) : (
        <AlertDialog defaultOpen={true}>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>No pantries created</AlertDialogTitle>
              <AlertDialogDescription>
                We noticed that you don&apos;t have any pantry items made. Would you like to create one?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>No</AlertDialogCancel>
              <AlertDialogAction>Yes</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      
    </div>
  );
};

export default DashboardPage;
