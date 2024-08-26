import styles from "./loading-spinner.module.css";

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={`${styles.spinner} ${className || ''}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
