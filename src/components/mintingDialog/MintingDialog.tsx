import React from "react";
import { CircleLoader } from "react-awesome-loaders";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";

interface MintingDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const steps = [
  { id: 0, step: "Transferring balance from c-chain" },
  { id: 1, step: "Minting NFT" },
  { id: 2, step: "Success" },
];

export const MintingDialog: React.FC<MintingDialogProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [activeStep, setActiveStep] = React.useState<number>(2);

  React.useEffect(() => {
    if (
      !isOpen ||
      steps.length === 0 ||
      activeStep === steps[steps.length - 1].id + 1
    )
      return;

    const interval = setInterval(() => {
      setActiveStep((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [steps, activeStep, isOpen]);

  React.useEffect(() => {
    if (!isOpen) {
      setActiveStep(0);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={styles.dialog}>
        <DialogHeader className={styles.header}>
          <CircleLoader
            meshColor="#6a7dbf"
            lightColor="#E0E7FF"
            duration={1.5}
            desktopSize="90px"
            mobileSize="64px"
          />
          <DialogTitle className={styles.title}>Minting</DialogTitle>
          <div className={styles.divider} />
          <DialogDescription className={styles.description}>
            {steps.map(({ id, step }) => (
              <div
                key={id}
                className={cn(styles.step, {
                  [styles.activeStep]: activeStep === id,
                  [styles.completedStep]: activeStep > id,
                })}
              >
                <span
                  className={cn({
                    [styles.withConnector]: id !== steps[steps.length - 1].id,
                  })}
                />
                <p>{step}</p>
              </div>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
